import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.dirname(new URL(import.meta.url).pathname); const port = +process.env.PORT || 4850;
const T = { '.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.woff2':'font/woff2','.svg':'image/svg+xml','.mp4':'video/mp4' };
http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html'; const f = path.join(root, p);
  if (!f.startsWith(root)) { r.writeHead(403); return r.end(); }
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); return r.end('404'); } r.writeHead(200, { 'Content-Type': T[path.extname(f)] || 'application/octet-stream' }); r.end(d); });
}).listen(port, () => console.log('http://localhost:' + port));
