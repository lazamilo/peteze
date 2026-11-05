// Vsebina povzeta po peteze.si
window.PETEZE = {
  contact: {
    name: 'PETEZE d.o.o.',
    street: 'Jama 15',
    city: 'SI-1234 Mengeš',
    phone: '+386 1 833 25 90',
    phoneHref: 'tel:+38618332590',
    email: 'info@peteze.si',
    mat: '5324980000',
    ddv: 'SI74513125',
    reg: 'Okrožno sodišče v Ljubljani'
  },

  categories: [
    {
      id: 'transformatorji',
      name: 'Transformatorji',
      tint: 'blue',
      img: 'assets/img/p/cat-transformatorji.png',
      partner: null,
      own: true,
      lead: 'Lastna proizvodnja v Mengšu. Majhne in srednje velike serije, izdelane točno po specifikacijah naročnika.',
      body: 'Že več kot 40 let izdelujemo transformatorje in ostale navite komponente ter poslujemo s partnerji po vsem svetu. Ker smo specializirani za majhne in srednje velike serije, točno sledimo kupčevim specifikacijam. Sodobna oprema nam omogoča, da se hitro odzovemo na vsako zahtevo.',
      items: [
        { name: 'Montaža na letev', img: 'assets/img/p/na-letev.png' },
        { name: 'Montaža na tiskana vezja tip EI', img: 'assets/img/p/tiskana-vezja-EI.png' },
        { name: 'Stranska pritrditev na ohišje', img: 'assets/img/p/stranska-pritrditev22.png' },
        { name: 'Montaža na tiskana vezja UI', img: 'assets/img/p/na-tiskana-vezja-UI.png' }
      ]
    },
    {
      id: 'toploskrcljive-cevi',
      name: 'Toploskrčljive cevi',
      tint: 'magenta',
      img: 'assets/img/p/cat-cevi.png',
      partner: 'dsg-canusa',
      lead: 'Toploskrčljive cevi in komponente DSG-CANUSA. Uradni zastopnik za Slovenijo od leta 1991.',
      body: 'Dobro založeno skladišče pomeni kratek dobavni rok. Naročite lahko tudi manjše količine, cevi pa za vas razrežemo na mero. Izdelki pokrivajo avtomobilsko in elektronsko industrijo, komunikacije in elektro distribucijo.',
      items: [
        { name: 'Iz posebnih materialov', img: 'assets/img/p/posebni-materiali.png' },
        { name: 'Tankostenske cevi', img: 'assets/img/p/tankostenske-cevi.png' },
        { name: 'Srednje in debelostenske z lepilom', img: 'assets/img/p/srednje-in-debele.png' },
        { name: 'Tankostenske cevi z lepilom', img: 'assets/img/p/tankostenske-zlepilom.png' },
        { name: 'Posebni izdelki', img: 'assets/img/p/posebne.png' },
        { name: 'Naprave za krčenje', img: 'assets/img/p/naprave_za_krcenje.png', text: 'Velika izbira naprav za krčenje toploskrčljivih cevi.' }
      ]
    },
    {
      id: 'mehanska-tesnila',
      name: 'Mehanska tesnila',
      tint: 'yellow',
      img: 'assets/img/p/cat-tesnila.png',
      partner: 'hauff-technik',
      lead: 'Tesnila HAUFF-TECHNIK proti vdoru vode, vlage in glodalcev v objekt. Vedno. Varno. Vodotesno.',
      body: 'Prodajni program je tako širok, da se najde rešitev skoraj za vsak problem. Rešitve so namenjene proizvajalcem, distributerjem, monterjem in končnim uporabnikom. Največja prednost je kratek odzivni čas za tesnilo, izdelano po naročilu.',
      items: [
        { name: 'Cevni prehodi', img: 'assets/img/p/cevniprehodi.png' },
        { name: 'Hišni prehodi', img: 'assets/img/p/hisniprehodi.png' },
        { name: 'Posebnosti', img: 'assets/img/p/posebnosti2.png' },
        { name: 'Kabelski prehodi', img: 'assets/img/p/kabelski-prehodi.png' }
      ]
    },
    {
      id: 'kabelske-objemke',
      name: 'Kabelske objemke',
      tint: 'neutral',
      img: 'assets/img/p/cat-objemke.png',
      partner: 'id-technik',
      lead: 'Objemke ID-TECHNIK za nizkonapetostne in srednjenapetostne kable ter distančne objemke lastne proizvodnje.',
      body: 'Objemke so posebno primerne za enojno pritrditev in trikotno polaganje enožilnih kablov, izoliranih s polietilenom (PE) in omrežnim polietilenom (VPE). Zraven ponujamo ustrezen pritrdilni material.',
      items: [
        { name: 'KS kabelska objemka', img: 'assets/img/p/id-Technik-KS-Foto.png' },
        { name: 'K kabelska objemka', img: 'assets/img/p/id-Technik-K-Foto.png' },
        { name: 'KP kabelske objemke', img: 'assets/img/p/id-Technik-KP-Foto.png' },
        { name: 'KT kabelska objemka', img: 'assets/img/p/id-Technik-KT-Foto.png' },
        { name: 'KR kabelska objemka', img: 'assets/img/p/id-Technik-KR-Foto.png' },
        { name: 'KH kabelska objemka', img: 'assets/img/p/id-Technik-KH-Foto.png' },
        { name: 'RS vrstna objemka', img: 'assets/img/p/id-Technik-RS4-Foto.png' },
        { name: 'Distančne kabelske objemke', img: 'assets/img/p/distancna-objemka.png', text: 'Lastna proizvodnja PETEZE.' },
        { name: 'Pribor za kabelske objemke', img: 'assets/img/p/id-Technik-Elastische-Einlage-Foto.png' }
      ]
    },
    {
      id: 'spojni-elementi',
      name: 'Spojni elementi',
      tint: 'blue',
      img: 'assets/img/p/cat-spojni.png',
      partner: 'elpress',
      lead: 'Kabelski spojni material in orodja za stiskanje in rezanje ELPRESS, ki jih uporabljajo vsi večji dobavitelji električne energije v Evropi.',
      body: 'Program pokriva skoraj vse vrste vodnikov, od izoliranih kabel čevljev in votlic do hidravličnih sistemov stiskanja in ozemljitve. Uporabljen je v elektrarnah, na železnicah, v telekomunikacijah in pri proizvajalcih transformatorjev.',
      items: [
        { name: 'Izolirani kabel čevlji', img: 'assets/img/p/ci-3549_icon.jpg', text: 'Pokositrana površina, izdelani brez halogena.' },
        { name: 'Votlice', img: 'assets/img/p/ci-3552_icon.jpg', text: 'Izolirane in neizolirane, pokositrane, iz elektroliznega bakra.' },
        { name: 'Neizolirani kabel čevlji', img: 'assets/img/p/ci-3555_icon.jpg', text: 'Vezni tulci, očesni, cevni, viličasti in igličasti kabel čevlji.' },
        { name: 'Bakreni kabel čevlji', img: 'assets/img/p/ci-3558_icon.jpg', text: 'Izdelani iz 99,95 % bakra, tipi KR, KRF, KRD in KRT.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3559_file.pdf' },
        { name: 'Al/AlCu kabel čevlji', img: 'assets/img/p/ci-3561_icon.jpg', text: 'Za aluminijaste vodnike, iz 99,7 % čistega aluminija.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3562_file.pdf' },
        { name: 'Vijačni kabel čevlji', img: 'assets/img/p/ci-3564_icon.jpg', text: 'Vijačni kabel čevlji in vezni tulci za nizko in srednjo napetost.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3565_file.pdf' },
        { name: 'Kompleti kabelskih spojk', img: 'assets/img/p/ci-3567_icon.jpg', text: 'Za spajanje 1 kV kablov, izoliranih 4G in 5G.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3568_file.pdf' },
        { name: 'Prostovodni spojniki', img: 'assets/img/p/ci-3570_icon.jpg', text: 'Spojniki za prostovodne vrvi, tudi za zlitine.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3571_file.pdf' },
        { name: 'Hidravlični sistemi stiskanja', img: 'assets/img/p/ci-3573_icon.jpg', text: 'Stiskanje kabel čevljev od 10 do 1200 mm².', pdf: 'https://www.peteze.si/upld/CatalogueItem/3574_file.pdf' },
        { name: 'Orodje za rezanje in snemanje izolacije', img: 'assets/img/p/ci-3576_icon.jpg', pdf: 'https://www.peteze.si/upld/CatalogueItem/3577_file.pdf' },
        { name: 'Ozemljitev', img: 'assets/img/p/ci-3579_icon.jpg', text: 'Ozemljitveni sistem brez spojev.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3580_file.pdf' },
        { name: 'Hidravlične črpalke', img: 'assets/img/p/ci-3582_icon.jpg', text: 'Nožne, akumulatorske in omrežne.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3583_file.pdf' },
        { name: 'Vetrna energija', img: 'assets/img/p/ci-3588_icon.jpg', pdf: 'https://www.peteze.si/upld/CatalogueItem/3589_file.pdf' },
        { name: 'Železniški program', img: 'assets/img/p/ci-3591_icon.jpg', pdf: 'https://www.peteze.si/upld/CatalogueItem/3592_file.pdf' },
        { name: 'Električne naprave', img: 'assets/img/p/ci-3594_icon.jpg', text: 'Spojni program za proizvajalce transformatorjev.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3595_file.pdf' }
      ]
    },
    {
      id: 'zbiralcni-sistemi',
      name: 'Zbiralčni sistemi',
      tint: 'magenta',
      img: 'assets/img/p/cat-zbiralke.png',
      partner: 'pogliano',
      lead: 'Nizkonapetostni razvodni sistemi POGLIANO za tovarniške hale, od 25 A do 6300 A.',
      body: 'Zbiralke omogočajo enostavno napajanje naprav. Ko se tehnologija spremeni ali stroje prerazporedite, inštalacij ni treba predelovati.',
      items: [
        { name: 'BX-E', sub: '800 A do 6300 A', min: 800, max: 6300, text: 'BLINDOCOMPATTO®, zbiralka tipa sendvič.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3598_file.pdf' },
        { name: 'BX-R IP68', sub: '800 A do 2500 A', text: 'BLINDOCOMPATTORESINA®, dimenzijsko enaka kot BX-E.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3600_file.pdf' },
        { name: 'BX-F', sub: '800 A do 5000 A', text: 'Zbiralka tipa sendvič, preizkušena za odpornost na ogenj.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3602_file.pdf' },
        { name: 'BS', sub: '250 A do 1000 A', text: 'BLINDOSBARRA® za distribucijo električne energije.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3604_file.pdf' },
        { name: 'MB', sub: '63 A do 160 A', text: 'MINIBLINDO® za industrijska in poslovna okolja.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3606_file.pdf' },
        { name: 'BLP', sub: '25 A do 40 A', text: 'BLINDOLUCEPOGLIANO®, zbiralka za razsvetljavo.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3608_file.pdf' },
        { name: 'BT-E', sub: '100 A do 400 A', text: 'BLINDOTROLLEY®, drsna zbiralka za dvigala in mobilne porabnike.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3610_file.pdf' },
        { name: 'BT', sub: '50 A do 300 A', text: 'BLINDOTROLLEY®, drsna zbiralka za mobilne porabnike.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3612_file.pdf' },
        { name: 'BX', sub: '800 A do 1000 A', text: 'BLINDOCOMPATTO®.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3614_file.pdf' },
        { name: 'BJ', sub: '50 A do 125 A', text: 'BLINDOJUNIOR® za manjše tokove.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3616_file.pdf' },
        { name: 'BL', sub: 'do 40 A', text: 'BLINDOLUX®, zbiralka za razsvetljavo.', pdf: 'https://www.peteze.si/upld/CatalogueItem/3618_file.pdf' }
      ]
    }
  ],

  partners: [
    {
      id: 'dsg-canusa', name: 'DSG-CANUSA', logo: 'assets/img/partners/DSG-Canusa-Logo-Navy-RGB-1.png',
      url: 'https://www.dsgcanusa.com', cat: 'toploskrcljive-cevi', since: '1991',
      text: 'Eden vodilnih proizvajalcev toploskrčljivih cevi in komponent, s proizvodnjo v Nemčiji, na Poljskem, v Kanadi in ZDA. PETEZE je uradni zastopnik od leta 1991 in skrbi za distribucijo in tehnično podporo v Sloveniji.'
    },
    {
      id: 'hauff-technik', name: 'HAUFF-TECHNIK', logo: 'assets/img/partners/hauff-logo.png',
      url: 'https://www.hauff-technik.de', cat: 'mehanska-tesnila',
      text: 'Eno vodilnih podjetij v Evropi na področju mehanskih tesnil. Rešitev za skoraj vsak problem vdora vode, vlage ali glodalcev v objekt, s kratkim odzivnim časom za tesnila po naročilu.'
    },
    {
      id: 'id-technik', name: 'ID-TECHNIK', logo: 'assets/img/partners/logo_print.gif',
      url: 'http://www.id-technik.com', cat: 'kabelske-objemke',
      text: 'Proizvajalec kabelskih objemk za pritrditev nizkonapetostnih in srednjenapetostnih kablov, posebno primernih za trikotno polaganje enožilnih kablov.'
    },
    {
      id: 'elpress', name: 'ELPRESS', logo: 'assets/img/partners/Elpress-Authorized-Distributor.png',
      url: 'http://www.elpress.se', cat: 'spojni-elementi',
      text: 'Eno večjih podjetij za kabelski spojni material ter orodja za stiskanje in rezanje. Proizvodnja je od leta 1992 certificirana po ISO 9001 pri British Standards Institution.'
    },
    {
      id: 'pogliano', name: 'POGLIANO', logo: 'assets/img/partners/pogliano.png',
      url: 'http://www.blindosbarra.com', cat: 'zbiralcni-sistemi',
      text: 'Nizkonapetostni razvodni sistemi za tovarniške hale, ki omogočajo enostavno napajanje naprav in prerazporeditev strojev brez posegov v inštalacije.'
    }
  ],

  news: [
    {
      id: 'sistem-etgar', date: '18. 4. 2023', title: 'Sistem ETGAR', sub: 'Pametni dom, pametni vrt?',
      img: 'assets/img/news/etgar.jpg', pos: '50% 20%',
      lead: 'Elektriko potrebujete tudi na vrtu, za robotsko kosilnico, črpalko za ribnik ali razsvetljavo. S sistemom ETGAR proizvajalca HAUFF-TECHNIK imate vse pripravljeno za kasnejše priključitve, stavba pa ostane zatesnjena.',
      body: [
        'Poleg hišnega vhoda, ki vsakemu domu zagotavlja napajalne vode za elektriko in telekomunikacije, je pomembna tudi električna oziroma telekomunikacijska napeljava vrtne parcele.',
        'Pri gradnji hiše je treba sprejeti veliko odločitev, od proračuna do tlorisa in vseh tehničnih značilnosti stavbe. Zasnova zunanje parcele in vrta zato pogosto pride na vrsto šele, ko je stavba že dokončana.',
        'Pri novogradnji je pomembno zunanje objekte načrtovati zgodaj. E-polnilnice, robotske kosilnice, vrtna razsvetljava, bazeni, WLAN in varnostni sistemi potrebujejo elektriko ali vodo. S sistemom ETGAR (Energy To GARden) je vse pripravljeno za kasnejše priključitve, stavba pa ostane zatesnjena pred plinom, vodo in radonom.'
      ]
    },
    {
      id: 'hsi90-dfk', date: '27. 2. 2023', title: 'HSI90 DFK', sub: 'Vsestranska plastična prirobnica',
      img: 'assets/img/news/hsi90.jpg', pos: '50% 50%',
      lead: 'Obstoječa ali nova konstrukcija, beton ali stena zabojnika: novo plastično prirobnico HSI90 DFK je mogoče zanesljivo uporabiti povsod.',
      body: [
        'Naj bo obstoječa ali nova konstrukcija, beton ali stena zabojnika, v povezavi s svežo betonsko kompozitno folijo ali bitumenskimi debelimi premazi, prirobnico HSI90 DFK je mogoče zanesljivo uporabiti povsod.',
        'Prirobnica iz poliamida, ojačenega s steklenimi vlakni, je združljiva s standardnimi sistemskimi tesnili in omogoča enostavno priključitev EKK ali TKK za kable ali neposredno tesnjenje kablov in cevi.',
        'Največja prednost v primerjavi s prejšnjim sistemom je, da prirobnica omogoča kronske izvrtine do premera 100 mm. S tem se odpre široko območje uporabe gumijastih tesnil tipa HSD100, HRD100 in HRK100.'
      ]
    },
    {
      id: 'dual5', date: '26. 1. 2022', title: 'DUAL5', sub: 'Spajanje fleksibilnih aluminijastih vodnikov',
      img: 'assets/img/news/dual5.png', pos: '50% 50%', contain: true,
      lead: 'Konceptna rešitev ELPRESS za spajanje fleksibilnih aluminijastih vodnikov razreda 5 po IEC 60228.',
      body: [
        'Aluminijaste žice v fleksibilnih vodnikih so manj odporne na mehanske obremenitve, zato potrebujejo mehko in enakomerno stiskanje. Hkrati se na žicah takoj oblikuje oksidna plast, ki jo prebije le agresivno stiskanje.',
        'DUAL5 združi oboje v enem stisku. Šesterokotni stisk nežno stisne žice, točkovno stiskanje jih nato raztegne in razbije oksidno plast, kar zagotavlja stabilno prevodnost. Isti par matric se lahko uporablja za več nazivnih velikosti.',
        'Tehnologija temelji na istih zanesljivih spojnih elementih, ki se uporabljajo že desetletja, zato lahko fleksibilne aluminijaste vodnike kombinirate z vodniki razreda 1, 2 in 5 iz aluminija ter razreda 2, 5 in 6 iz bakra.'
      ]
    },
    {
      id: 'elpress-akademija', date: '12. 12. 2018', title: 'Elpress akademija', sub: 'Smernice razvoja spojnega materiala',
      img: 'assets/img/news/akademija.jpg', pos: '50% 40%',
      lead: 'Elpress akademija je predstavila smernice bodočega razvoja spajanja in spojnega materiala.',
      body: [
        'Šolanje je bilo obsežno. Predstavili so nam vse od prodaje do skrbi za kupce po izpeljanem naročilu. Odgovor na vprašanje, zakaj niso najcenejši, smo dobili v njihovi proizvodnji in laboratoriju za testiranje izdelkov.',
        'ELPRESS ponuja celotne rešitve: spojni material, orodje za stiskanje in šolanje vaših monterjev. Šolanje se je končalo s teoretičnim in praktičnim testom ter podelitvijo diplom.'
      ]
    }
  ]
};
