window.PZ_RENDER = D => {
  const { ARR, GO, catUrl, store } = window.PZ;
  const $ = s => document.querySelector(s);
  const q = new URLSearchParams(location.search);
  const partnerOf = c => D.partners.find(p => p.id === c.partner);

  /* ---------- Transformer line drawing ---------- */
  const tf = $('#tf');
  if (tf) {
    let lam = '';
    for (let y = 157; y <= 204; y += 6) lam += `<path class="lam" d="M92 ${y}H508"/>`;
    for (let y = 396; y <= 444; y += 6) lam += `<path class="lam" d="M92 ${y}H508"/>`;
    for (let x = 97; x <= 145; x += 6) lam += `<path class="lam" d="M${x} 212V388"/><path class="lam" d="M${x + 358} 212V388"/>`;
    let coil = '';
    for (let y = 202; y <= 398; y += 7) coil += `<path class="coil" d="M206 ${y}Q300 ${y + 6} 394 ${y}"/>`;
    tf.innerHTML = `
      <path class="dim" d="M90 118H510M90 110V126M510 110V126"/>
      <text x="300" y="104" text-anchor="middle">EI 84 · 50 Hz</text>
      <path class="dim" d="M548 150V450M540 150H556M540 450H556"/>
      <text x="562" y="304">84</text>
      ${lam}
      <path class="core" d="M90 150H510V450H90Z"/>
      <path class="core" d="M150 210H255V390H150Z"/>
      <path class="core" d="M345 210H450V390H345Z"/>
      <path class="bobbin" d="M190 176H410V196H190Z"/>
      <path class="bobbin" d="M205 196H395V404H205Z"/>
      ${coil}
      <path class="bobbin" d="M190 404H410V424H190Z"/>
      <rect class="pin" x="226" y="424" width="8" height="44"/><rect class="pin" x="266" y="424" width="8" height="44"/>
      <rect class="pin" x="326" y="424" width="8" height="44"/><rect class="pin" x="366" y="424" width="8" height="44"/>
      <path class="wire" d="M230 468V520H12"/><path class="wire" d="M270 468V548H12"/>
      <path class="wire" d="M330 468V548H588"/><path class="wire" d="M370 468V520H588"/>
      <path class="flow b" d="M12 520H230V468"/>
      <path class="flow m" d="M270 468V548H12"/>
      <path class="flow y" d="M370 468V520H588"/>
      <text x="12" y="508">230 V</text><text x="588" y="508" text-anchor="end">12 V</text>`;
  }

  /* ---------- Statement words ---------- */
  const stmt = $('#statement');
  if (stmt) stmt.innerHTML = stmt.textContent.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

  /* ---------- Bento ---------- */
  const bento = $('#bento');
  if (bento) {
    const size = { transformatorji: 'big', 'zbiralcni-sistemi': 'full' };
    bento.innerHTML = D.categories.map(c => `
      <a class="tile ${size[c.id] || ''}" data-tint="${c.tint}" href="${catUrl(c)}">
        ${c.own ? '<span class="own"><i></i>Lastna proizvodnja</span>' : ''}
        <h3>${c.name}</h3>
        <div class="pic"><img src="${c.img}" alt="${c.name}"></div>
        <div class="meta"><p>${c.own ? c.lead : partnerOf(c).name + ' · ' + c.items.length + ' skupin izdelkov'}</p><span class="go">${GO}</span></div>
      </a>`).join('');
  }

  /* ---------- Own production cards ---------- */
  const mk = $('#makeCards');
  if (mk) {
    const t = D.categories[0];
    mk.innerHTML = t.items.map((it, i) => `
      <div class="mcard">
        <svg class="grid" aria-hidden="true"><defs><pattern id="g${i}" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#e2e2dc" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g${i})"/></svg>
        <span class="mono">0${i + 1} / 04</span>
        <img src="${it.img}" alt="${it.name}" data-par="10">
        <b>${it.name}</b>
      </div>`).join('');
  }

  /* ---------- Partner rows ---------- */
  const pl = $('#plist');
  if (pl) {
    pl.innerHTML = D.partners.map(p => {
      const c = D.categories.find(x => x.id === p.cat);
      return `<a class="prow" href="partnerji.html#${p.id}">
        <h3>${p.name}</h3>
        <p>${c.name}${p.id === 'hauff-technik' ? '. Vedno. Varno. Vodotesno.' : p.since ? ', zastopnik od leta ' + p.since + '.' : '.'}</p>
        <span class="plogo"><img src="${p.logo}" alt="${p.name}"></span>
        <span class="go">${GO}</span>
      </a>`;
    }).join('');
  }

  /* ---------- News cards ---------- */
  const card = n => `
    <a class="ncard" href="novica.html?n=${n.id}">
      <div class="ni ${n.contain ? 'contain' : ''}"><img src="${n.img}" alt="${n.title}" style="object-position:${n.pos}"></div>
      <div class="nmeta mono"><span>${n.date}</span></div>
      <h3>${n.title}</h3>
      <p>${n.sub}</p>
    </a>`;
  const nc = $('#ncards');
  if (nc) nc.innerHTML = D.news.slice(0, 3).map(card).join('');
  const nall = $('#newsAll');
  if (nall) nall.innerHTML = D.news.map(card).join('');

  /* ---------- Article ---------- */
  const art = $('#article');
  if (art) {
    const n = D.news.find(x => x.id === q.get('n')) || D.news[0];
    document.title = `${n.title}, PETEZE`;
    $('#aTitle').textContent = n.title;
    $('#aDate').textContent = n.date;
    art.innerHTML = `
      <div class="ahero ${n.contain ? 'contain' : ''}"><img src="${n.img}" alt="${n.title}" style="object-position:${n.pos}"></div>
      <p class="first">${n.lead}</p>
      ${n.body.map(b => `<p>${b}</p>`).join('')}
      <div style="margin-top:40px"><a class="btn btn-ghost" href="novice.html">Vse novice ${ARR}</a></div>`;
  }

  /* ---------- Ponudba overview ---------- */
  const cl = $('#clist');
  if (cl) {
    cl.innerHTML = D.categories.map((c, i) => `
      <a class="crow" href="${catUrl(c)}">
        <span class="mono">0${i + 1}</span>
        <h3>${c.name}</h3>
        <p>${c.own ? 'Lastna proizvodnja' : partnerOf(c).name} · ${c.items.length} skupin</p>
        <span class="ci"><img src="${c.img}" alt=""></span>
        <span class="go">${GO}</span>
      </a>`).join('');
  }

  /* ---------- Category page ---------- */
  const cat = $('#cat');
  if (cat) {
    const c = D.categories.find(x => x.id === q.get('k')) || D.categories[0];
    const p = partnerOf(c);
    document.title = `${c.name}, PETEZE`;
    const listed = store.get();
    const isBus = c.id === 'zbiralcni-sistemi';
    let products;
    if (isBus) {
      const rng = it => { const n = (it.sub.match(/\d+/g) || []).map(Number); return n.length > 1 ? n : [10, n[0]]; };
      const lg = v => Math.log10(v), L0 = lg(10), L1 = lg(10000), pos = v => ((lg(v) - L0) / (L1 - L0)) * 100;
      products = `
        <div class="raxis"><span></span><div class="ticks">${[10, 100, 1000, 10000].map(v => `<span style="left:${pos(v)}%">${v} A</span>`).join('')}</div><span></span><span></span></div>
        <div class="range">${c.items.map(it => { const [a, b] = rng(it); return `
          <div class="rrow"><b>${it.name}</b><div class="rbar"><i style="left:${pos(a)}%;width:${pos(b) - pos(a)}%"></i></div>
          <div class="rt"><strong>${it.sub}</strong>${it.text}</div>
          <a href="${it.pdf}" target="_blank" rel="noopener">Podatki ${ARR}</a></div>`; }).join('')}</div>`;
    } else {
      products = `<div class="pgrid" data-stagger>${c.items.map(it => `
        <div class="pcard">
          <div class="pi"><img src="${it.img}" alt="${it.name}"></div>
          <h3>${it.name}</h3>
          ${it.text ? `<p>${it.text}</p>` : ''}
          <div class="pact">
            <button data-add="${c.name}: ${it.name}" class="${listed.includes(c.name + ': ' + it.name) ? 'added' : ''}">${listed.includes(c.name + ': ' + it.name) ? 'Na seznamu' : 'Dodaj na seznam'}</button>
            ${it.pdf ? `<a href="${it.pdf}" target="_blank" rel="noopener">Tehnični podatki</a>` : ''}
          </div>
        </div>`).join('')}</div>`;
    }
    cat.innerHTML = `
      <section class="page-hero wrap">
        <div class="crumbs"><a href="ponudba.html">Ponudba</a><span>/</span><span>${c.name}</span></div>
        <div class="cat-hero">
          <div><h1 class="d1" data-split>${c.name}</h1><p class="lead" data-rise>${c.lead}</p>
            <div style="margin-top:40px;display:flex;gap:12px;flex-wrap:wrap" data-rise><a class="btn btn-ink" href="kontakt.html?k=${c.id}">Pošlji povpraševanje ${ARR}</a></div></div>
          <div class="cat-visual" data-tint="${c.tint}"><img src="${c.img}" alt="${c.name}" data-par="6"></div>
        </div>
        <div class="cat-body">
          <div class="side">${p ? `<span class="plogo"><img src="${p.logo}" alt="${p.name}"></span><a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">${p.url.replace(/^https?:\/\/(www\.)?/, '')} ${ARR}</a>` : '<span class="mono">PETEZE · Mengeš</span>'}</div>
          <p data-rise>${c.body}</p>
        </div>
        <h2 class="d3" style="margin-bottom:clamp(28px,3vw,56px)" data-split>${isBus ? 'Zbiralke po toku' : 'Izdelki'}</h2>
        ${products}
      </section>`;
    cat.addEventListener('click', e => {
      const b = e.target.closest('[data-add]'); if (!b) return;
      const v = b.dataset.add, l = store.get(), i = l.indexOf(v);
      if (i > -1) l.splice(i, 1); else l.push(v);
      store.set(l);
      b.classList.toggle('added', i < 0); b.textContent = i < 0 ? 'Na seznamu' : 'Dodaj na seznam';
    });
    document.querySelectorAll('.nav a[href="ponudba.html"]').forEach(a => a.classList.add('on'));
  }

  /* ---------- Partners page ---------- */
  const pp = $('#pblocks');
  if (pp) {
    pp.innerHTML = D.partners.map((p, i) => {
      const c = D.categories.find(x => x.id === p.cat);
      return `<article class="pblock" id="${p.id}">
        <div class="pb-l"><span class="mono">0${i + 1} / 05</span><h2 class="d2">${p.name}</h2>
          <div class="pb-logo"><img src="${p.logo}" alt="${p.name}"></div></div>
        <div class="pb-r"><p class="lead" style="color:var(--ink)">${p.text}</p>
          <a class="pb-cat" href="${catUrl(c)}" data-tint="${c.tint}"><img src="${c.img}" alt=""><span><small>Program</small><b>${c.name}</b></span><span class="go">${GO}</span></a>
          <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">${p.url.replace(/^https?:\/\/(www\.)?/, '')} ${ARR}</a></div>
      </article>`;
    }).join('');
  }

  /* ---------- Contact form ---------- */
  const form = $('#form');
  if (form) {
    const chips = form.querySelector('.chips');
    const pre = q.get('k');
    chips.innerHTML = D.categories.map(c => `<button type="button" class="chip ${c.id === pre ? 'on' : ''}" data-v="${c.name}">${c.name}</button>`).join('');
    chips.addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) b.classList.toggle('on'); });
    const bk = form.querySelector('.basket'), l = store.get();
    if (l.length) { bk.classList.add('on'); bk.innerHTML = `<b>Na seznamu za povpraševanje:</b> ${l.join(', ')}`; }
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.classList.add('sent');
      form.querySelector('.ok').scrollIntoView({ behavior: 'smooth', block: 'center' });
      store.set([]);
    });
  }
};
