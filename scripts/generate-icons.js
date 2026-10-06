import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, drawFn) {
  // RGBA buffer with 1 extra filter byte per row (0 = filter None)
  const rowSize = width * 4 + 1;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) {
        c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type);
    const crcBuf = Buffer.alloc(4);
    const combined = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(combined), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression method
  ihdrData[11] = 0; // filter method
  ihdrData[12] = 0; // interlace method
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT Chunk
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND Chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Brand Icon Drawer
function drawBrandIcon(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const maxR = w * 0.46;

  // Background rounded rect / circle
  if (dist > maxR) {
    return [0, 0, 0, 0]; // transparent
  }

  // Outer gold ring
  if (dist > maxR - w * 0.04) {
    return [217, 119, 6, 255]; // Gold
  }

  // Inner green circle
  if (dist > maxR - w * 0.08) {
    return [22, 101, 52, 255]; // Dark green
  }

  // Central white circle base
  const innerR = maxR - w * 0.12;
  if (dist <= innerR) {
    // Distance from center
    const ny = (y - cy) / innerR; // -1 to 1
    const nx = (x - cx) / innerR; // -1 to 1

    // Draw book pages in bottom center
    if (ny > 0.1 && ny < 0.6 && Math.abs(nx) < 0.65) {
      if (Math.abs(nx) < 0.05) {
        return [217, 119, 6, 255]; // spine gold
      }
      return [255, 255, 255, 255]; // white pages
    }

    // Stem and leaves in top center
    if (ny <= 0.1 && ny > -0.6 && Math.abs(nx) < 0.06) {
      return [22, 101, 52, 255]; // green stem
    }

    // Leaves
    const leafLeft = Math.pow(nx + 0.25, 2) + Math.pow(ny + 0.2, 2);
    const leafRight = Math.pow(nx - 0.25, 2) + Math.pow(ny + 0.2, 2);
    if (leafLeft < 0.08 || leafRight < 0.08) {
      return [34, 197, 94, 255]; // bright green leaves
    }

    // Golden star at top
    const starDist = Math.hypot(nx, ny + 0.65);
    if (starDist < 0.12) {
      return [245, 158, 11, 255]; // Gold star
    }

    // Inner gentle green tint background
    return [240, 253, 244, 255]; // emerald-50
  }

  return [22, 101, 52, 255];
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 192x192
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPNG(192, 192, drawBrandIcon));
console.log('Created pwa-192x192.png');

// 512x512
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPNG(512, 512, drawBrandIcon));
console.log('Created pwa-512x512.png');

// 512x512 Maskable (solid background with safe zone)
fs.writeFileSync(
  path.join(publicDir, 'pwa-maskable-512x512.png'),
  createPNG(512, 512, (x, y, w, h) => {
    // Solid background
    const pixel = drawBrandIcon(x, y, w, h);
    if (pixel[3] === 0) {
      return [22, 101, 52, 255]; // solid dark green
    }
    return pixel;
  })
);
console.log('Created pwa-maskable-512x512.png');

// apple-touch-icon 180x180
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPNG(180, 180, drawBrandIcon));
console.log('Created apple-touch-icon.png');

// favicon.ico placeholder
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), createPNG(32, 32, drawBrandIcon));
console.log('Created favicon.ico');
