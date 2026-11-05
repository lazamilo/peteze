(() => {
  const D = window.PETEZE;
  const page = document.body.dataset.page || '';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  const ARR = '<svg class="arr" viewBox="0 0 18 18" fill="none"><path d="M2 9h13M10 4l5 5-5 5" stroke="currentColor" stroke-width="1.8"/></svg>';
  const GO = '<svg viewBox="0 0 18 18" fill="none"><path d="M2 9h13M10 4l5 5-5 5" stroke="currentColor" stroke-width="1.8"/></svg>';
  const CHEV = '<svg class="chev" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.6"/></svg>';
  const catUrl = c => `kategorija.html?k=${c.id}`;
  window.PZ = { ARR, GO, catUrl };

  /* ---------- Inquiry list (seznam za povpraševanje) ---------- */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem('pz-list') || '[]'); } catch (e) { return []; } },
    set(v) { try { localStorage.setItem('pz-list', JSON.stringify(v)); } catch (e) {} updatePill(); }
  };
  window.PZ.store = store;

  /* ---------- Header ---------- */
  const nav = [
    ['ponudba', 'Ponudba', 'ponudba.html', true],
    ['partnerji', 'Partnerji', 'partnerji.html'],
    ['o-nas', 'O nas', 'o-nas.html'],
    ['novice', 'Novice', 'novice.html'],
    ['kontakt', 'Kontakt', 'kontakt.html']
  ];
  const megaItems = D.categories.map(c => `
    <a class="mega-item" data-tint="${c.tint}" href="${catUrl(c)}">
      <span class="mi"><img src="${c.img}" alt=""></span>
      <span><b>${c.name}</b><small>${c.own ? 'Lastna proizvodnja' : D.partners.find(p => p.id === c.partner).name}</small></span>
    </a>`).join('');

  const hdr = document.createElement('header');
  hdr.className = 'hdr';
  hdr.innerHTML = `
    <div class="hdr-in wrap">
      <a class="logo" href="index.html" aria-label="PETEZE, domov"><img src="assets/logo.png" alt="PETEZE"></a>
      <nav class="nav">
        ${nav.map(([id, label, href, mega]) => mega
          ? `<div class="has-mega"><a href="${href}" class="${page === id ? 'on' : ''}">${label}${CHEV}</a></div>`
          : `<a href="${href}" class="${page === id ? 'on' : ''}">${label}</a>`).join('')}
      </nav>
      <div class="hdr-cta">
        <span class="lang"><b>SLO</b> / ENG</span>
        <a class="btn btn-ink" href="kontakt.html">Pošlji povpraševanje ${ARR}</a>
        <button class="burger" aria-label="Meni"><span></span><span></span></button>
      </div>
    </div>
    <div class="mega"><div class="mega-in wrap">
      <div class="mega-intro"><p>Lastni transformatorji in komponente petih vodilnih evropskih proizvajalcev.</p><a class="all" href="ponudba.html">Celotna ponudba ${ARR}</a></div>
      <div class="mega-grid">${megaItems}</div>
    </div></div>`;
  document.body.prepend(hdr);

  const mnav = document.createElement('div');
  mnav.className = 'mnav';
  mnav.innerHTML = `
    <a class="big" href="ponudba.html">Ponudba</a>
    <div class="sub">${D.categories.map(c => `<a href="${catUrl(c)}">${c.name}</a>`).join('')}</div>
    ${nav.slice(1).map(([, l, h]) => `<a class="big" href="${h}">${l}</a>`).join('')}
    <a class="btn btn-ink" href="kontakt.html">Pošlji povpraševanje ${ARR}</a>`;
  document.body.appendChild(mnav);
  hdr.querySelector('.burger').addEventListener('click', () => document.documentElement.classList.toggle('menu-open'));

  const megaHost = hdr.querySelector('.has-mega');
  let megaT;
  const openMega = () => { clearTimeout(megaT); hdr.classList.add('mega-on'); };
  const closeMega = () => { megaT = setTimeout(() => hdr.classList.remove('mega-on'), 160); };
  megaHost.addEventListener('mouseenter', openMega);
  megaHost.addEventListener('mouseleave', closeMega);
  hdr.querySelector('.mega').addEventListener('mouseenter', openMega);
  hdr.querySelector('.mega').addEventListener('mouseleave', closeMega);

  let lastY = 0;
  const onScroll = y => {
    hdr.classList.toggle('solid', y > 40);
    hdr.classList.toggle('hide', y > 400 && y > lastY && !hdr.classList.contains('mega-on'));
    lastY = y;
  };

  /* ---------- Footer ---------- */
  const C = D.contact;
  const ftr = document.createElement('footer');
  ftr.innerHTML = `
    ${page !== 'kontakt' ? `<section class="cta wrap">
      <h2 class="d3" data-rise>Imate specifikacijo? Pošljite jo.</h2>
      <div style="margin-top:clamp(28px,3vw,56px)" data-rise><a class="cta-mail" href="mailto:${C.email}">info<span class="at">@</span>peteze.si</a></div>
      <div class="cta-row" data-rise>
        <div><h4>Telefon</h4><a href="${C.phoneHref}">${C.phone}</a></div>
        <div><h4>Naslov</h4><p>${C.street}<br>${C.city}</p></div>
        <div><h4>Povpraševanje</h4><a href="kontakt.html">Odpri obrazec</a></div>
      </div>
    </section>` : ''}
    <div class="ftr wrap">
      <div class="ftr-top">
        <div><img src="assets/logo.png" alt="PETEZE"></div>
        <div><h5>Ponudba</h5><ul>${D.categories.map(c => `<li><a href="${catUrl(c)}">${c.name}</a></li>`).join('')}</ul></div>
        <div><h5>Partnerji</h5><ul>${D.partners.map(p => `<li><a href="partnerji.html#${p.id}">${p.name}</a></li>`).join('')}</ul></div>
        <div><h5>Podjetje</h5><ul><li><a href="o-nas.html">O nas</a></li><li><a href="o-nas.html#kakovost">Politika kakovosti</a></li><li><a href="novice.html">Novice</a></li><li><a href="kontakt.html">Kontakt</a></li></ul></div>
      </div>
      <div class="ftr-bars"><i></i><i></i><i></i></div>
      <div class="ftr-bot"><span>© ${new Date().getFullYear()} PETEZE d.o.o., ${C.street}, ${C.city}</span><nav><a href="#">Splošni pogoji</a><a href="#">Zasebnost</a><a href="#">Piškotki</a></nav></div>
    </div>`;
  document.body.appendChild(ftr);

  const pill = document.createElement('a');
  pill.className = 'btn btn-ink cart-pill';
  pill.href = 'kontakt.html';
  document.body.appendChild(pill);
  function updatePill() {
    const n = store.get().length;
    pill.classList.toggle('on', n > 0 && page !== 'kontakt');
    pill.innerHTML = `Seznam za povpraševanje (${n}) ${ARR}`;
  }
  updatePill();

  /* ---------- Page renderers hook ---------- */
  if (window.PZ_RENDER) window.PZ_RENDER(D);

  /* ---------- Motion ---------- */
  const hasGsap = window.gsap && window.ScrollTrigger;
  if (!hasGsap || reduce) {
    document.querySelectorAll('[data-rise]').forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; });
    document.querySelectorAll('.statement .w').forEach(w => w.style.color = 'var(--ink)');
    document.documentElement.classList.add('no-loader');
    addEventListener('scroll', () => onScroll(scrollY), { passive: true });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', e => { ScrollTrigger.update(); onScroll(e.scroll); });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -110 }); }
    }));
  } else addEventListener('scroll', () => onScroll(scrollY), { passive: true });

  // split headings into lines (by words)
  const splitLines = el => {
    const words = el.innerHTML.trim().split(/\s+(?![^<]*>)/);
    el.innerHTML = words.map(w => `<span class="wd" style="display:inline-block">${w}</span>`).join(' ');
    const ws = [...el.querySelectorAll('.wd')];
    const lines = [];
    ws.forEach(w => {
      const top = w.offsetTop;
      let l = lines.find(x => Math.abs(x.top - top) < 4);
      if (!l) lines.push(l = { top, ws: [] });
      l.ws.push(w.innerHTML);
    });
    el.innerHTML = lines.map(l => `<span class="ln"><span>${l.ws.join(' ')}</span></span>`).join('');
    el.classList.add('split');
    return el.querySelectorAll('.ln > span');
  };

  const intro = () => {
    // Headline reveals
    document.querySelectorAll('[data-split]').forEach(el => {
      const ls = splitLines(el);
      gsap.from(ls, { yPercent: 105, duration: 1.1, ease: 'expo.out', stagger: .08, scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    document.querySelectorAll('[data-rise]').forEach(el => {
      gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
    gsap.utils.toArray('[data-stagger]').forEach(group => {
      gsap.from(group.children, { opacity: 0, y: 50, duration: 1, ease: 'expo.out', stagger: .07, scrollTrigger: { trigger: group, start: 'top 86%' } });
    });

    // Statement: gray words fill to black
    const st = document.querySelector('.statement p');
    if (st) {
      gsap.to(st.querySelectorAll('.w'), { color: '#0f0f0c', stagger: .1, ease: 'none', scrollTrigger: { trigger: st, start: 'top 75%', end: 'bottom 45%', scrub: true } });
    }

    // Mini parallax inside frames
    gsap.utils.toArray('[data-par]').forEach(img => {
      const amt = parseFloat(img.dataset.par) || 8;
      gsap.fromTo(img, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Counters
    gsap.utils.toArray('[data-count]').forEach(el => {
      const to = +el.dataset.count, from = +(el.dataset.from || 0), o = { v: from };
      gsap.to(o, { v: to, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' }, onUpdate: () => el.textContent = Math.round(o.v) });
    });

    // Busbar ranges
    gsap.utils.toArray('.rbar i').forEach(b => {
      gsap.from(b, { scaleX: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: b, start: 'top 92%' } });
    });

    // Hero
    const hero = document.querySelector('.hero');
    if (hero) heroMotion(hero);
    ScrollTrigger.refresh();
  };

  function heroMotion(hero) {
    const svg = hero.querySelector('svg.tf');
    const draws = svg.querySelectorAll('.core, .lam, .coil, .bobbin, .wire, .dim');
    draws.forEach(p => { const L = p.getTotalLength ? p.getTotalLength() : 400; p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
    const tl = gsap.timeline({ delay: .1 });
    tl.from(hero.querySelectorAll('.hero-word'), { yPercent: 110, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: .12 })
      .to(svg.querySelectorAll('.core, .bobbin'), { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', stagger: .1 }, '-=1.1')
      .to(svg.querySelectorAll('.lam'), { strokeDashoffset: 0, duration: .9, ease: 'power2.out', stagger: .02 }, '-=1.0')
      .to(svg.querySelectorAll('.coil'), { strokeDashoffset: 0, duration: .6, ease: 'power1.out', stagger: .015 }, '-=1.1')
      .to(svg.querySelectorAll('.wire, .dim'), { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out', stagger: .05 }, '-=.6')
      .from(svg.querySelectorAll('text, .pin'), { opacity: 0, duration: .6, stagger: .04 }, '-=.6')
      .from(hero.querySelectorAll('.hero-foot > *'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: .1 }, '-=1');

    // flowing current along wires
    svg.querySelectorAll('.flow').forEach((f, i) => {
      const L = f.getTotalLength();
      f.style.strokeDasharray = `${L * .18} ${L}`;
      gsap.fromTo(f, { strokeDashoffset: L * 1.18 }, { strokeDashoffset: 0, duration: 2.4 + i * .3, ease: 'power1.inOut', repeat: -1, delay: 2.4 + i * .35 });
    });

    // scroll: words part, object scales up
    if (innerWidth > 980) {
      const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to(hero.querySelector('.hero-word.l'), { xPercent: -28, opacity: .0, ease: 'none', scrollTrigger: st });
      gsap.to(hero.querySelector('.hero-word.r'), { xPercent: 28, opacity: .0, ease: 'none', scrollTrigger: st });
      gsap.to(hero.querySelector('.hero-art'), { scale: 1.35, yPercent: 18, ease: 'none', scrollTrigger: st });
      gsap.to(hero.querySelector('.hero-foot'), { opacity: 0, y: -40, ease: 'none', scrollTrigger: { ...st, end: '40% top' } });
    }
  }

  // Loader (home only, once per session)
  const loader = document.querySelector('.loader');
  let seen = false;
  try { seen = sessionStorage.getItem('pz-seen') === '1'; sessionStorage.setItem('pz-seen', '1'); } catch (e) {}
  const start = () => document.fonts && document.fonts.ready ? document.fonts.ready.then(intro) : intro();
  if (loader && !seen) {
    lenis && lenis.stop();
    const bars = loader.querySelectorAll('.loader-mark i'), cnt = loader.querySelector('.loader-count'), o = { v: 0 };
    gsap.timeline({ onComplete: () => { loader.remove(); lenis && lenis.start(); } })
      .from(bars, { scaleX: 0, duration: .9, ease: 'expo.inOut', stagger: .12 })
      .to(o, { v: 100, duration: 1.3, ease: 'power2.inOut', onUpdate: () => cnt.textContent = Math.round(o.v) }, 0)
      .to(bars, { scaleX: 0, transformOrigin: 'right', duration: .6, ease: 'expo.in', stagger: .08 })
      .to(cnt, { opacity: 0, duration: .3 }, '<')
      .add(start, '-=.15')
      .to(loader, { opacity: 0, duration: .5 }, '-=.1');
  } else {
    loader && loader.remove();
    start();
  }
})();
