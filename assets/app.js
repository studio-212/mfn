/* ═════════ block 1 of 5 ═════════ */

/* ═══════════════════════════════════
   CMS — SUPABASE CONFIG
   Replace these two values with your
   Supabase project URL and anon key.
═══════════════════════════════════ */
const SUPABASE_URL  = 'https://rxeprhywtmgyoweqbcjd.supabase.co';
const SUPABASE_ANON = 'sb_publishable_6D-k9kzeoj3EjJ569mPiHw_0NndyVLT';
const sb = (typeof supabase !== 'undefined' && !SUPABASE_URL.includes('YOUR_PROJECT'))
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON) : null;


/* ═══════════════════════════════════
   VIDEO SETUP
═══════════════════════════════════ */
const vid  = document.getElementById('bg-video');
const fall = document.getElementById('bg-fall');
if (vid.src && vid.src !== window.location.href) {
  fall.style.display = 'none';
} else {
  vid.style.display = 'none';
}


/* ═══════════════════════════════════
   SECTION CONTENT
═══════════════════════════════════ */
const sections = {

  world: {
    name: 'World',
    html: `
      <div class="world-hero">
        <h2 class="world-title">World</h2>
        <p class="world-sub">The story so far — chronological</p>
      </div>

      <div class="project">
        <p class="proj-year">2025</p>
        <h3 class="proj-title">Pressure</h3>
        <p class="proj-type">Album &nbsp;&middot;&nbsp; with hihi</p>
        <div class="proj-art pa-pressure"></div>
        <p class="proj-desc">A collaborative album with producer hihi. PRESSURE earned global attention from OkayAfrica, Dead Good Music, Rotate Magazine, and 24 Hip-Hop &mdash; mau from nowhere's most fully realised statement yet.</p>
        <div class="proj-quotes">
          <div>
            <p class="proj-quote">"Pressure isn't just experimental &mdash; it's proof that the future of hip-hop lies in fearless collaboration and cross-cultural dialogue."</p>
            <p class="proj-quote-src">24 Hip-Hop</p>
          </div>
          <div>
            <p class="proj-quote">"Pressure is as much a document of survival as it is a celebration of transformation, bold, raw, and entirely its own."</p>
            <p class="proj-quote-src">Rotate Magazine</p>
          </div>
          <div>
            <p class="proj-quote">"More than a collaboration &mdash; it's a conversation, a clash, and a catharsis. If you're into rap that isn't afraid to veer left, this one's for you."</p>
            <p class="proj-quote-src">Wordplay Magazine</p>
          </div>
        </div>
        <p class="tl-label">Tracklist</p>
        <div class="tl-wrap" id="tl-pressure">
          <div class="track-list">
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/here-we-are-again" target="_blank"><div class="track-left"><span class="track-name">here we are again</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/peace-war" target="_blank"><div class="track-left"><span class="track-name">peace: war</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/whats-all-this-then-1" target="_blank"><div class="track-left"><span class="track-name">what's all this then</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/e6" target="_blank"><div class="track-left"><span class="track-name">E6</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere" target="_blank"><div class="track-left"><span class="track-name">Green Hill Zone</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/miss-you" target="_blank"><div class="track-left"><span class="track-name">miss you</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/silly" target="_blank"><div class="track-left"><span class="track-name">silly</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/hard_drive" target="_blank"><div class="track-left"><span class="track-name">hard_drive</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://soundcloud.com/maufromnowhere/down_again" target="_blank"><div class="track-left"><span class="track-name">down_again</span></div><span class="track-stream">&#9654; Stream</span></a>
          </div>
          <div class="tl-fade"></div>
        </div>
        <button class="tl-toggle" onclick="toggleTracks('tl-pressure',9)"><span class="tl-count">9 tracks +</span></button>
        <div class="proj-actions">
          <a href="https://open.spotify.com/artist/7MZ8Hh17R6vfPDn9UCkvuf" target="_blank" class="btn-cream">&#9654; Stream on Spotify</a>
          <a href="https://maufromnowhere.bandcamp.com/album/pressure" target="_blank" class="btn-outline">Buy on Bandcamp</a>
        </div>
      </div>

      <div class="project">
        <p class="proj-year">2024</p>
        <h3 class="proj-title">Soft Steps</h3>
        <p class="proj-type">EP</p>
        <div class="proj-art pa-softsteps"></div>
        <p class="proj-desc">"Putting one foot in front of the other in a gentle way. SOFT STEPS is an ode to patience, navigating growth and the trials that come with it with the grace to forgive myself and the calm endurance to press onward into the unknown." Praised by CLASH, Atwood Magazine, and 1883 for its fearless experimentation.</p>
        <div class="proj-quotes">
          <div>
            <p class="proj-quote">"The creativity is undimmed on his latest project, with 'SOFT STEPS' epitomising his thirst for collaboration &mdash; there's an urgency to his work, allowing him to step confidently into the unknown."</p>
            <p class="proj-quote-src">CLASH</p>
          </div>
          <div>
            <p class="proj-quote">"A masterful offering of an authentic and innovative creative journey, rapidly evolving his sonic identity."</p>
            <p class="proj-quote-src">Mixtape Madness</p>
          </div>
          <div>
            <p class="proj-quote">"Far more than just a rapper, mau displays his ability to create melodies within his hook and bring out a lighter-touch to this bass-heavy, Hip-Hop-inspired single."</p>
            <p class="proj-quote-src">Forbes</p>
          </div>
        </div>
        <p class="tl-label">Tracklist</p>
        <div class="tl-wrap" id="tl-softsteps">
          <div class="track-list">
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/track/dont-pick-up" target="_blank"><div class="track-left"><span class="track-name">don't pick up</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/track/restore-feat-jay-james" target="_blank"><div class="track-left"><span class="track-name">Restore</span><span class="track-feat">feat. Jay James</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/" target="_blank"><div class="track-left"><span class="track-name">Remind(h)er</span><span class="track-feat">feat. MAUIMOON</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/" target="_blank"><div class="track-left"><span class="track-name">By Your Side</span><span class="track-feat">feat. Sute Iwar, NAiLA</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/track/crooked" target="_blank"><div class="track-left"><span class="track-name">Crooked</span></div><span class="track-stream">&#9654; Stream</span></a>
          </div>
          <div class="tl-fade"></div>
        </div>
        <button class="tl-toggle" onclick="toggleTracks('tl-softsteps',5)"><span class="tl-count">5 tracks +</span></button>
        <div class="proj-actions">
          <a href="https://maufromnowhere.bandcamp.com/album/soft-steps" target="_blank" class="btn-cream">&#9654; Stream EP</a>
        </div>
      </div>

      <div class="project">
        <p class="proj-year">2019 &mdash; 2023</p>
        <h3 class="proj-title">Earlier work</h3>
        <p class="proj-type">Albums &nbsp;&middot;&nbsp; Singles &nbsp;&middot;&nbsp; The Nairobi years</p>
        <div class="proj-art pa-early"></div>
        <p class="proj-desc">Named Apple Music's East African Up Next Artist (May 2023). Debut album The Universe Is Holding You, the MFN EP, minute-ish mau, and homebound (demos) &mdash; the foundations of a borderless sonic identity shaped between Nairobi, the UK, and the Netherlands.</p>
        <p class="tl-label">Catalogue</p>
        <div class="tl-wrap" id="tl-early">
          <div class="track-list">
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/album/the-universe-is-holding-you" target="_blank"><div class="track-left"><span class="track-name">The Universe Is Holding You</span><span class="track-feat">Album &middot; 2022</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/album/mfn" target="_blank"><div class="track-left"><span class="track-name">MFN</span><span class="track-feat">EP &middot; 2020</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/track/zombie-flower" target="_blank"><div class="track-left"><span class="track-name">Zombie Flower</span><span class="track-feat">Single</span></div><span class="track-stream">&#9654; Stream</span></a>
          <a class="track-row" href="https://maufromnowhere.bandcamp.com/track/try" target="_blank"><div class="track-left"><span class="track-name">Try</span><span class="track-feat">Single</span></div><span class="track-stream">&#9654; Stream</span></a>
          </div>
          <div class="tl-fade"></div>
        </div>
        <button class="tl-toggle" onclick="toggleTracks('tl-early',4)"><span class="tl-count">4 releases +</span></button>
        <div class="proj-actions">
          <a href="https://maufromnowhere.bandcamp.com" target="_blank" class="btn-outline">Full catalogue on Bandcamp</a>
        </div>
      </div>
    `
  },

  about: {
    name: 'About',
    html: `
      <div class="about-wrap">
        <div id="about-circle-zone"
          data-portrait-url="Brand Assets/MFN graded/DSCF3822.jpg"
          data-bio="mau from nowhere blends hip-hop, R&amp;B, and electronic textures into a soulful, genre-bending sound shaped between Nairobi, the UK, and the Netherlands. His music is both urgent and meditative — weaving melodic raps with reflective songwriting, drawing comparisons to Obongjayar, Noname, and Yinka Bernie, with influences spanning Outkast to Bloc Party. Born Kamau Wainaina in Nairobi, raised between Kenya, the UK and the Netherlands, mau's music reflects a life spent oscillating between worlds — never quite staying in one place, finding comfort instead in the clarity of his craft. His 2025 collaborative album PRESSURE with producer hihi earned global attention from OkayAfrica, Dead Good Music, and 24 Hip-Hop. His 2024 EP SOFT STEPS was praised by CLASH, Atwood Magazine, and 1883. Named Apple Music's East African Up Next Artist (May 2023) and spotlighted on COLORS.">
        </div>
        <div class="about-lower">
          <blockquote class="about-quote">"mau from nowhere has the innate ability to make you feel seen and validated through his vulnerability. He lets you in and in doing so creates an environment that is real and non-judgmental."</blockquote>
          <span class="about-quote-src">Tangaza Magazine</span>
          <div class="press-marquee-wrap">
            <div class="press-marquee-track">
              <span class="press-name">OkayAfrica</span>
              <span class="press-name">CLASH</span>
              <span class="press-name">1883 Magazine</span>
              <span class="press-name">Atwood Magazine</span>
              <span class="press-name">Wordplay Magazine</span>
              <span class="press-name">Music Crowns</span>
              <span class="press-name">Rotate Magazine</span>
              <span class="press-name">24 Hip-Hop</span>
              <span class="press-name">Kilele Magazine</span>
              <span class="press-name">Tangaza Magazine</span>
              <span class="press-name">Dead Good Music</span>
              <span class="press-name">Forbes</span>
              <span class="press-name">Mixtape Madness</span>
              <span class="press-name">PAM</span>
              <span class="press-name">OkayAfrica</span>
              <span class="press-name">CLASH</span>
              <span class="press-name">1883 Magazine</span>
              <span class="press-name">Atwood Magazine</span>
              <span class="press-name">Wordplay Magazine</span>
              <span class="press-name">Music Crowns</span>
              <span class="press-name">Rotate Magazine</span>
              <span class="press-name">24 Hip-Hop</span>
              <span class="press-name">Kilele Magazine</span>
              <span class="press-name">Tangaza Magazine</span>
              <span class="press-name">Dead Good Music</span>
              <span class="press-name">Forbes</span>
              <span class="press-name">Mixtape Madness</span>
              <span class="press-name">PAM</span>
            </div>
          </div>
          <div class="achievements">
            <div class="achievement"><div class="ach-dot"></div><p class="ach-text">Apple Music Up Next Artist &mdash; May 2023</p></div>
            <div class="achievement"><div class="ach-dot"></div><p class="ach-text">PRESSURE (2025) with hihi &mdash; global press attention across four continents</p></div>
            <div class="achievement"><div class="ach-dot"></div><p class="ach-text">Known for intimate yet powerful live performances &mdash; from Nairobi club floors to festival stages across the UK and Europe</p></div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;padding-bottom:40px">
            <a href="mailto:mgmt.mfn@gmail.com?subject=EPK%20Request" target="_blank" class="btn-cream">&#8595; Download EPK</a>
            <a href="mailto:mgmt.mfn@gmail.com" class="btn-outline">Get in touch</a>
          </div>
        </div>
      </div>
    `
  },

  shows: {
    name: 'Shows',
    html: `
      <div class="shows-hero">
        <h2 class="shows-title">Shows</h2>
      </div>
      <div class="show-list">
        <div class="show-row">
          <div class="show-l"><span class="show-date">18 Apr 2025</span></div>
          <div class="show-meta"><span class="show-city">London, UK</span><span class="show-venue">Fold</span></div>
          <a href="https://ra.co/REPLACE" target="_blank" class="show-tk">Tickets</a>
        </div>
        <div class="show-row">
          <div class="show-l"><span class="show-date">2 May 2025</span></div>
          <div class="show-meta"><span class="show-city">London, UK</span><span class="show-venue">Corsica Studios</span></div>
          <a href="https://ra.co/REPLACE" target="_blank" class="show-tk">Tickets</a>
        </div>
        <div class="show-row sold-out">
          <div class="show-l"><span class="show-date">14 May 2025</span></div>
          <div class="show-meta"><span class="show-city">Nairobi, KE</span><span class="show-venue">Nairobi Festival</span></div>
          <a href="#" class="show-tk out">Sold out</a>
        </div>
        <div class="show-row">
          <div class="show-l"><span class="show-date">28 Jun 2025</span></div>
          <div class="show-meta"><span class="show-city">Manchester, UK</span><span class="show-venue">Soup Kitchen</span></div>
          <a href="https://ra.co/REPLACE" target="_blank" class="show-tk">Tickets</a>
        </div>
      </div>
      <p class="booking-note">Booking &mdash; <a href="mailto:mgmt.mfn@gmail.com">mgmt.mfn@gmail.com</a></p>
    `
  },

  shop: {
    name: 'Shop',
    html: `
      <div class="shop-hero">
        <h2 class="shop-title">Shop</h2>
      </div>
      <div class="shop-grid">
        <div class="shop-card" onclick="openProductDetail('garden-tee')">
          <div class="shop-img">
            <div class="shop-img-inner mi1"></div>
            <span class="shop-badge">New</span>
            <button class="shop-add-btn" onclick="directAdd('garden-tee',event)">Add to cart</button>
          </div>
          <div class="shop-card-info">
            <span class="shop-card-name">Garden tee</span>
            <span class="shop-card-sub">100% organic cotton</span>
            <span class="shop-card-price">&pound;28</span>
          </div>
        </div>
        <div class="shop-card" onclick="openProductDetail('nowhere-hoodie')">
          <div class="shop-img">
            <div class="shop-img-inner mi2"></div>
            <span class="shop-badge">Limited</span>
            <button class="shop-add-btn" onclick="directAdd('nowhere-hoodie',event)">Add to cart</button>
          </div>
          <div class="shop-card-info">
            <span class="shop-card-name">Nowhere hoodie</span>
            <span class="shop-card-sub">Heavyweight fleece</span>
            <span class="shop-card-price">&pound;55</span>
          </div>
        </div>
        <div class="shop-card" onclick="openProductDetail('pressure-print')">
          <div class="shop-img">
            <div class="shop-img-inner mi3"></div>
            <span class="shop-badge sold">Sold out</span>
          </div>
          <div class="shop-card-info">
            <span class="shop-card-name">Pressure print</span>
            <span class="shop-card-sub">A3 risograph</span>
            <span class="shop-card-price">&pound;18</span>
          </div>
        </div>
        <div class="shop-card" onclick="openProductDetail('tote-bag')">
          <div class="shop-img">
            <div class="shop-img-inner mi4"></div>
            <button class="shop-add-btn" onclick="directAdd('tote-bag',event)">Add to cart</button>
          </div>
          <div class="shop-card-info">
            <span class="shop-card-name">Tote bag</span>
            <span class="shop-card-sub">Natural canvas</span>
            <span class="shop-card-price">&pound;14</span>
          </div>
        </div>
      </div>
    `
  },

  tbd: {
    name: '?',
    html: `
      <div class="tbd-hero">
        <div class="tbd-mark">?</div>
        <p class="tbd-note">Coming soon</p>
      </div>
    `
  }

};


/* ═══════════════════════════════════
   CMS RENDER FUNCTIONS
   Called by loadContent() after fetch.
═══════════════════════════════════ */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function ytThumb(url) {
  const m = String(url).match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
}

/* Releases index — powers album routing (#world/<slug>). */
let RELEASES = [];
const albumBySlug = {};
function slugify(s) {
  return String(s || '').toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'untitled';
}
function indexReleases(list) {
  RELEASES = list || [];
  for (const k in albumBySlug) delete albumBySlug[k];
  RELEASES.forEach(r => {
    let slug = slugify(r.title);
    while (albumBySlug[slug]) slug += '-' + (r.year || 'x');
    r._slug = slug;
    albumBySlug[slug] = r;
  });
}

/* Full detail block for one release (reused on its own album page). */
function renderReleaseBlock(r) {
  const quotes = (r.release_quotes || [])
    .sort((a,b) => (a.sort_order||0)-(b.sort_order||0))
    .map(q => `<div><p class="proj-quote">"${esc(q.quote)}"</p><p class="proj-quote-src">${esc(q.source)}</p></div>`)
    .join('');

  const trackRows = (r.release_tracks || [])
    .sort((a,b) => (a.sort_order||0)-(b.sort_order||0))
    .map(t => `<a class="track-row" href="${esc(t.stream_url)}" target="_blank">
      <div class="track-left">
        <span class="track-name">${esc(t.name)}</span>
        ${t.feat ? `<span class="track-feat">${esc(t.feat)}</span>` : ''}
      </div>
      <span class="track-stream">&#9654; Stream</span>
    </a>`).join('');
  const trackCount = (r.release_tracks||[]).length;
  const tlId = `tl-${r.id}`;
  const trackSection = trackRows ? `<p class="tl-label">Tracklist</p>
    <div class="tl-wrap" id="${tlId}">
      <div class="track-list">${trackRows}</div>
    </div>
    <button class="tl-toggle" onclick="toggleTracks('${tlId}',${trackCount})"><span class="tl-count">${trackCount} tracks +</span></button>` : '';

  const videos = Array.isArray(r.videos) ? r.videos : [];
  const videoThumbs = videos.map(v => {
    const thumb = ytThumb(v.url);
    return `<a class="video-thumb" href="${esc(v.url)}" target="_blank">
      ${thumb ? `<img src="${esc(thumb)}" alt="${esc(v.title)}">` : ''}
      <span class="video-thumb-label">${esc(v.title)}</span>
    </a>`;
  }).join('');
  const videoSection = videos.length ? `<div class="video-grid">${videoThumbs}</div>` : '';

  const artInner = r.cover_art_url ? `<img src="${esc(r.cover_art_url)}" alt="${esc(r.title)}">` : '';
  const pLinks = Array.isArray(r.platform_links) && r.platform_links.length ? r.platform_links : null;
  const btns = pLinks
    ? pLinks.map((l, i) => `<a href="${esc(l.url)}" target="_blank" class="${i===0?'btn-cream':'btn-outline'}">&#9654; ${esc(l.platform)}</a>`)
    : [
        r.spotify_url  ? `<a href="${esc(r.spotify_url)}" target="_blank" class="btn-cream">&#9654; Stream on Spotify</a>` : '',
        r.bandcamp_url ? `<a href="${esc(r.bandcamp_url)}" target="_blank" class="btn-outline">Buy on Bandcamp</a>` : '',
      ].filter(Boolean);

  return `<div class="project">
    <p class="proj-year">${esc(r.year)}</p>
    <h3 class="proj-title">${esc(r.title)}</h3>
    <p class="proj-type">${esc(r.type)}</p>
    <div class="proj-art">${artInner}</div>
    <p class="proj-desc">${esc(r.description).replace(/\n/g,'<br>')}</p>
    ${quotes ? `<div class="proj-quotes">${quotes}</div>` : ''}
    ${trackSection}
    ${videoSection}
    ${btns.length ? `<div class="proj-actions">${btns.join('')}</div>` : ''}
  </div>`;
}

/* Scroll-reveal the World feature spreads as they enter the viewport. */
function initWorldReveal() {
  const root = document.getElementById('overlay');
  const els = Array.from(document.querySelectorAll('#section-content .wf'));
  if (!els.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { root, threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  // Reveal whatever's already on screen immediately (after layout settles);
  // observe the rest so they reveal on scroll. Never leave content invisible.
  requestAnimationFrame(() => {
    const vh = root ? root.clientHeight : window.innerHeight;
    els.forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('in');
      else io.observe(el);
    });
  });
}

/* First-sentence (or trimmed) lead for the World feature spreads. */
function leadOf(desc) {
  desc = (desc || '').trim().replace(/\s+/g, ' ');
  if (!desc) return '';
  const m = desc.match(/^[\s\S]*?[.!?](\s|$)/);
  let lead = m ? m[0].trim() : desc;
  if (lead.length > 230) {
    lead = desc.slice(0, 210);
    lead = lead.slice(0, lead.lastIndexOf(' ')).trim() + '…';
  }
  return lead;
}

/* World landing = an editorial retrospective: one alternating spread per
   release (year stamp, cover, lead, pull-quote), each opening its own page. */
function renderWorld(releases) {
  const list = releases.filter(r => r.visible !== false);
  const features = list.map(r => {
    const slug  = esc(r._slug);
    const open  = `openAlbum('${slug}')`;
    const cover = r.cover_art_url
      ? `<img src="${esc(r.cover_art_url)}" alt="${esc(r.title)}">` : '';
    const tracks = (r.release_tracks || []).length;
    const eyebrow = [
      esc(r.type || ''),
      tracks ? `${tracks} track${tracks !== 1 ? 's' : ''}` : '',
    ].filter(Boolean).join(' &middot; ');
    const lead = leadOf(r.description);
    const q = (r.release_quotes || [])
      .slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))[0];
    const quote = q
      ? `<blockquote class="wf-quote">&ldquo;${esc(q.quote)}&rdquo;<cite>${esc(q.source)}</cite></blockquote>`
      : '';
    return `<article class="wf">
      <div class="wf-media" onclick="${open}">
        <span class="wf-year">${esc(r.year)}</span>
        <div class="wf-cover">${cover}</div>
      </div>
      <div class="wf-text">
        ${eyebrow ? `<span class="wf-eyebrow">${eyebrow}</span>` : ''}
        <h3 class="wf-title" role="button" tabindex="0" onclick="${open}"
            onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${open}}">${esc(r.title)}</h3>
        ${lead ? `<p class="wf-lead">${esc(lead)}</p>` : ''}
        ${quote}
        <button class="wf-open" onclick="${open}">Explore the record <span class="wf-arrow">&rarr;</span></button>
      </div>
    </article>`;
  }).join('');
  return `<header class="world-masthead">
      <span class="wm-eyebrow">Mau from Nowhere</span>
      <h2 class="world-title">World</h2>
      <p class="wm-dek">The catalogue in order — every record and the era it belongs to, traced from the early Nairobi singles outward.</p>
    </header>
    <div class="world-features">${features}</div>`;
}

/* One album's own page — reuses the existing release detail block. */
function renderAlbum(r) {
  return `<button class="album-back" onclick="openSection('world')">&larr; All releases</button>
    ${renderReleaseBlock(r)}`;
}

function renderAbout(d) {
  const names = Array.isArray(d.press_names) ? d.press_names : [];
  const marquee = [...names, ...names].map(n => `<span class="press-name">${esc(n)}</span>`).join('');
  const ach = (Array.isArray(d.achievements) ? d.achievements : [])
    .map(a => `<div class="achievement"><div class="ach-dot"></div><p class="ach-text">${esc(a)}</p></div>`).join('');
  const email = esc(d.contact_email || 'mgmt.mfn@gmail.com');
  return `<div class="about-wrap">
    <div id="about-circle-zone" data-portrait-url="${esc(d.portrait_url||'')}" data-bio="${esc(d.bio||'')}"></div>
    <div class="about-lower">
      <blockquote class="about-quote">"${esc(d.quote)}"</blockquote>
      <span class="about-quote-src">${esc(d.quote_source)}</span>
      <div class="press-marquee-wrap"><div class="press-marquee-track">${marquee}</div></div>
      <div class="achievements">${ach}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;padding-bottom:40px">
        <a href="mailto:${email}?subject=EPK%20Request" target="_blank" class="btn-cream">&#8595; Download EPK</a>
        <a href="mailto:${email}" class="btn-outline">Get in touch</a>
      </div>
    </div>
  </div>`;
}

function initAbout() {
  const zone = document.getElementById('about-circle-zone');
  if (!zone) return;

  const portraitUrl = zone.dataset.portraitUrl || '';
  const bioText     = zone.dataset.bio || '';

  const vw     = window.innerWidth;
  const isTiny = vw < 400;

  // Portrait: proportion of available width, clamped to reasonable range
  const contentW  = Math.min(vw - 56, 800);
  const diam      = Math.max(180, Math.min(Math.round(contentW * 0.42), 340));
  const portraitR = diam / 2;

  const gap        = 3;                              // portrait edge → first ring
  const step       = isTiny ? 13 : 14;
  const r0         = portraitR + gap;
  const b          = step / (2 * Math.PI);
  const AVG_CHAR_W = 8.3;                            // 13px Jost + 0.06em
  const totalPx    = bioText.length * AVG_CHAR_W;
  const maxR       = contentW / 2 - 6;

  // Count turns outward from portrait until text fits, capped at available width
  let numTurns = 0, arcLen = 0;
  while (arcLen < totalPx * 1.05) {
    const avgR = r0 + step * (numTurns + 0.5);
    if (avgR > maxR) break;
    arcLen += 2 * Math.PI * avgR;
    numTurns++;
  }
  numTurns = Math.max(1, numTurns);

  // SVG sized to fit exactly — portrait + text rings + small margin
  const rMax    = Math.min(r0 + step * numTurns, maxR);
  const svgSize = Math.min(Math.round((rMax + 16) * 2), contentW);
  const cx = svgSize / 2;
  const cy = svgSize / 2;

  zone.style.width  = svgSize + 'px';
  zone.style.height = svgSize + 'px';

  // Portrait (centred, non-interactive)
  const portrait = document.createElement('div');
  portrait.className = 'about-portrait-circle';
  portrait.style.width  = diam + 'px';
  portrait.style.height = diam + 'px';
  const img = document.createElement('img');
  img.alt = 'mau from nowhere';
  img.src = portraitUrl || 'Brand Assets/MFN graded/DSCF3822.jpg';
  portrait.appendChild(img);
  zone.appendChild(portrait);

  // Build Archimedean spiral: r = rMax - b·θ, outer→inner like a record
  const NS       = 'http://www.w3.org/2000/svg';
  const thetaMax = numTurns * 2 * Math.PI;
  const numPts   = Math.max(300, numTurns * 120);
  const pts      = [];
  for (let i = 0; i <= numPts; i++) {
    const theta = (i / numPts) * thetaMax;
    const r     = rMax - b * theta;
    const x     = cx + r * Math.cos(theta - Math.PI / 2);
    const y     = cy + r * Math.sin(theta - Math.PI / 2);
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`);
  }

  const svg = document.createElementNS(NS, 'svg');
  svg.id = 'about-rings-svg';
  svg.setAttribute('width',   svgSize);
  svg.setAttribute('height',  svgSize);
  svg.setAttribute('viewBox', `0 0 ${svgSize} ${svgSize}`);

  const g = document.createElementNS(NS, 'g');
  g.id = 'about-rings-g';

  const spiralPath = document.createElementNS(NS, 'path');
  spiralPath.id = 'about-spiral-path';
  spiralPath.setAttribute('d', pts.join(' '));
  spiralPath.setAttribute('fill',   'none');
  spiralPath.setAttribute('stroke', 'none');

  const text = document.createElementNS(NS, 'text');
  text.setAttribute('font-family',    "'Jost', sans-serif");
  text.setAttribute('font-size',      '13');
  text.setAttribute('font-weight',    '300');
  text.setAttribute('letter-spacing', '0.06em');
  text.setAttribute('fill',           'rgba(232,224,204,0.6)');

  const tp = document.createElementNS(NS, 'textPath');
  tp.setAttribute('href', '#about-spiral-path');
  tp.setAttribute('startOffset', '0%');
  tp.textContent = bioText;

  text.appendChild(tp);
  g.appendChild(spiralPath);
  g.appendChild(text);
  svg.appendChild(g);
  zone.appendChild(svg);

  // Rotation state
  let angle    = 0;
  let lastA    = 0;
  let vel      = 0;
  let lastT    = 0;
  let dragging = false;
  let raf      = null;

  function ptrAngle(e) {
    const r = zone.getBoundingClientRect();
    return Math.atan2(e.clientY - (r.top  + r.height / 2),
                      e.clientX - (r.left + r.width  / 2)) * 180 / Math.PI;
  }

  function applyAngle() {
    g.setAttribute('transform', `rotate(${angle},${cx},${cy})`);
  }

  function coast() {
    if (Math.abs(vel) < 0.02) { vel = 0; return; }
    angle += vel;
    vel   *= 0.96;
    applyAngle();
    raf = requestAnimationFrame(coast);
  }

  function applyDelta(e) {
    const a   = ptrAngle(e);
    let delta = a - lastA;
    if (delta >  180) delta -= 360;
    if (delta < -180) delta += 360;
    const now = performance.now();
    const dt  = now - lastT;
    // EMA-smooth velocity to kill per-frame noise
    vel   = vel * 0.5 + (dt > 0 ? delta / dt * 16 : 0) * 0.5;
    angle += delta;
    lastA  = a;
    lastT  = now;
    applyAngle();
  }

  // Fine pointer (mouse): rotate from anywhere on screen
  if (window.matchMedia('(pointer: fine)').matches) {
    let seeded    = false;
    let idleTimer = null;

    document.addEventListener('mousemove', e => {
      if (idleTimer) clearTimeout(idleTimer);
      if (raf) { cancelAnimationFrame(raf); raf = null; }

      if (!seeded) {
        seeded = true;
        lastA  = ptrAngle(e);
        lastT  = performance.now();
        return;
      }

      applyDelta(e);

      // Coast briefly after mouse stops
      idleTimer = setTimeout(() => { raf = requestAnimationFrame(coast); }, 120);
    });
  } else {
    // Touch / pen: drag to rotate
    svg.addEventListener('pointerdown', e => {
      dragging = true;
      lastA = ptrAngle(e);
      lastT = performance.now();
      vel   = 0;
      if (raf) cancelAnimationFrame(raf);
      svg.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    svg.addEventListener('pointermove', e => {
      if (!dragging) return;
      applyDelta(e);
    });
    svg.addEventListener('pointerup',     () => { dragging = false; raf = requestAnimationFrame(coast); });
    svg.addEventListener('pointercancel', () => { dragging = false; });
  }
}

function renderShows(shows, bookingEmail) {
  const rows = shows.map(s => `<div class="show-row${s.sold_out ? ' sold-out' : ''}">
    <div class="show-l"><span class="show-date">${esc(s.date)}</span></div>
    <div class="show-meta"><span class="show-city">${esc(s.city)}</span><span class="show-venue">${esc(s.venue)}</span></div>
    ${s.sold_out
      ? `<a href="#" class="show-tk out">Sold out</a>`
      : `<a href="${esc(s.ticket_url||'#')}" target="_blank" class="show-tk">Tickets</a>`}
  </div>`).join('');
  const email = esc(bookingEmail || 'mgmt.mfn@gmail.com');
  return `<div class="shows-hero"><h2 class="shows-title">Shows</h2></div>
    <div class="show-list">${rows}</div>
    <p class="booking-note">Booking — <a href="mailto:${email}">${email}</a></p>`;
}

function renderShop(products) {
  const cards = products.map(p => {
    const soldOut = !!p.sold_out;
    const imgContent = p.image_url
      ? `<img src="${esc(p.image_url)}" alt="${esc(p.name)}" style="width:100%;height:100%;object-fit:cover;">`
      : `<div class="shop-img-inner" style="width:100%;height:100%;background:rgba(232,224,204,0.06)"></div>`;
    const badge = soldOut
      ? `<span class="shop-badge sold">Sold out</span>`
      : (p.badge ? `<span class="shop-badge">${esc(p.badge)}</span>` : '');
    const addBtn = !soldOut
      ? `<button class="shop-add-btn" onclick="quickBuy('${esc(p.slug)}',event)">Add to cart</button>` : '';
    return `<div class="shop-card" onclick="openProductDetail('${esc(p.slug)}')">
      <div class="shop-img">${imgContent}${badge}${addBtn}</div>
      <div class="shop-card-info">
        <span class="shop-card-name">${esc(p.name)}</span>
        <span class="shop-card-sub">${esc(p.description||'')}</span>
        <span class="shop-card-price">&pound;${esc(p.price)}</span>
      </div>
    </div>`;
  }).join('');
  return `<div class="shop-hero"><h2 class="shop-title">Shop</h2></div>
    <div class="shop-grid">${cards}</div>`;
}

function updateStreamLinks(links) {
  const modal = document.getElementById('stream-modal');
  if (!modal || !links.length) return;
  const ls = `font-family:'Playfair Display',serif;font-style:italic;font-size:22px;color:var(--cream);opacity:.8;transition:opacity .2s`;
  modal.innerHTML =
    `<p style="font-size:9px;letter-spacing:.2em;text-transform:uppercase;opacity:.4;margin-bottom:8px">Stream / Follow</p>` +
    links.map(l => `<a href="${esc(l.url)}" target="_blank" style="${ls}" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.8">${esc(l.platform)}</a>`).join('') +
    `<button onclick="closeStream()" style="margin-top:20px;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--cream);opacity:.35;background:none;border:none;cursor:pointer;transition:opacity .2s" onmouseover="this.style.opacity=.8" onmouseout="this.style.opacity=.35">Close</button>`;
}

function rebuildProducts(products) {
  products.forEach(p => {
    PRODUCTS[p.slug] = {
      name:     p.name,
      price:    Number(p.price),
      sub:      p.description || '',
      imgUrl:   p.image_url   || '',
      imgClass: '',
      sizes:    Array.isArray(p.sizes)        ? p.sizes        : [],
      unavail:  Array.isArray(p.unavail_sizes) ? p.unavail_sizes : [],
      colors:   Array.isArray(p.colors)        ? p.colors        : [],
      payLink:  p.payment_link_url || '',
    };
  });
}

async function loadContent() {
  if (!sb) return;
  try {
    const [relR, abtR, shwR, prdR, stmR, setR] = await Promise.all([
      sb.from('releases').select('*, release_quotes(*), release_tracks(*)').order('sort_order'),
      sb.from('about').select('*').limit(1).single(),
      sb.from('shows').select('*').order('sort_order'),
      sb.from('products').select('*').eq('active', true).order('sort_order'),
      sb.from('stream_links').select('*').order('sort_order'),
      sb.from('settings').select('key, value'),
    ]);
    const get = (key) => (setR.data || []).find(s => s.key === key)?.value || '';
    if (relR.data?.length) { indexReleases(relR.data); sections.world.html = renderWorld(relR.data); }
    if (abtR.data)          sections.about.html = renderAbout(abtR.data);
    if (shwR.data?.length)  sections.shows.html = renderShows(shwR.data, get('booking_email'));
    if (prdR.data?.length) {
      sections.shop.html = renderShop(prdR.data);
      rebuildProducts(prdR.data);
    }
    if (stmR.data?.length)  updateStreamLinks(stmR.data);
  } catch {
    /* Supabase unavailable — fallback content stays */
  }
}
loadContent().finally(() => {
  window.addEventListener('hashchange', applyRoute);
  applyRoute();   // honour a deep link (#world/<slug>) once content is in
});


/* ═══════════════════════════════════
   NAVIGATION
═══════════════════════════════════ */
const home    = document.getElementById('home');
const overlay = document.getElementById('overlay');
const content = document.getElementById('section-content');

/* ─── Petal photo-fill controller ───────────────────────────
   One code path + one timing for the petal photos in every state, so the
   visual is consistent and never blinks mid-transition. The open section's
   fill PERSISTS (rides menu → corner); hover previews others; leaving reverts
   to the open section's fill (or to empty on the home menu). */
let activePetalFill = null;
function paintPetalFill(section) {
  document.querySelectorAll('#petal-fills image, #petal-fills .petal-fill-ovl').forEach(el => {
    const on = el.dataset.section === section;
    // Quick fade-in, slow smooth fade-out (the original feel).
    el.style.transition = on
      ? 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'opacity 0.7s ease-out 0.2s';
    el.style.opacity = on ? '1' : '0';
  });
}
function setActivePetalFill(section) { activePetalFill = section; paintPetalFill(section); }
function previewPetalFill(section)   { paintPetalFill(section); }            // hover, doesn't change active
function revertPetalFill()           { paintPetalFill(activePetalFill); }    // back to the open section

function openSection(id, fromRoute) {
  if (id === 'stream') { openStream(); return; }

  const sec = sections[id];
  if (!sec) return;

  content.innerHTML = sec.html;
  if (id === 'about') initAbout();
  if (id === 'world') initWorldReveal();
  overlay.classList.add('open');
  home.classList.add('hidden');
  document.body.classList.add('section-open');   // retract flower → corner
  overlay.scrollTop = 0;

  document.getElementById('cart-trigger').style.display = id === 'shop' ? 'flex' : 'none';
  const gb = document.getElementById('gyro-btn');
  if (gb) gb.style.display = 'none';

  // Persist the open section's photo fill (rides menu → corner, no blink).
  // No cream tint — the maintained image itself indicates the active page.
  document.querySelectorAll('.petal-path').forEach(p => { p.style.fill = 'transparent'; });
  setActivePetalFill(id);
  applySectionBg(id);
  pauseHomeVideo();
  if (!fromRoute) setRoute(id);
}

function closeSection(fromRoute) {
  overlay.classList.remove('open');
  home.classList.remove('hidden');
  document.body.classList.remove('section-open');   // expand flower → centre
  document.getElementById('cart-trigger').style.display = 'none';
  document.querySelectorAll('.petal-path').forEach(p => { p.style.fill = 'transparent'; });
  setActivePetalFill(null);
  const gb = document.getElementById('gyro-btn');
  if (gb && gb.textContent !== '') gb.style.display = 'block';
  clearSectionBg();
  resumeHomeVideo();
  if (!fromRoute) setRoute('');
}

/* ─── Albums + hash routing ─────────────────────────────────
   Hash URLs (#world, #shop, #world/<album-slug>) so views are shareable and
   the browser Back button works. UI actions set the hash via setRoute; the
   hashchange listener + a load-time pass apply it (with a no-op guard so a
   UI action doesn't re-run itself). */
let currentRoute = '';

function setRoute(route) {
  currentRoute = route;
  const target = route ? '#' + route : '';
  if ((location.hash || '') === target) return;
  if (target) location.hash = target;
  else history.replaceState(null, '', location.pathname + location.search);
}

function openAlbum(slug, fromRoute) {
  const r = albumBySlug[slug];
  if (!r) { openSection('world', fromRoute); return; }   // unknown slug → grid
  content.innerHTML = renderAlbum(r);
  overlay.classList.add('open');
  home.classList.add('hidden');
  document.body.classList.add('section-open');
  overlay.scrollTop = 0;
  document.getElementById('cart-trigger').style.display = 'none';
  const gb = document.getElementById('gyro-btn');
  if (gb) gb.style.display = 'none';
  document.querySelectorAll('.petal-path').forEach(p => { p.style.fill = 'transparent'; });
  setActivePetalFill('world');   // still the World petal in the corner
  applySectionBg('world');
  pauseHomeVideo();
  if (!fromRoute) setRoute('world/' + slug);
}

function applyRoute() {
  const h = decodeURIComponent((location.hash || '').replace(/^#\/?/, ''));
  if (h === currentRoute) return;
  currentRoute = h;
  const [sec, sub] = h.split('/');
  if (!sec)                                   closeSection(true);
  else if (sec === 'world' && sub)            openAlbum(sub, true);
  else if (sections[sec] || sec === 'stream') openSection(sec, true);
  else                                        closeSection(true);
}

/* ═══════════════════════════════════
   STREAM MODAL
═══════════════════════════════════ */
const streamModal = document.getElementById('stream-modal');

function openStream() {
  streamModal.style.display = 'flex';
  const gb = document.getElementById('gyro-btn');
  if (gb) gb.style.display = 'none';
}
function closeStream() {
  streamModal.style.display = 'none';
  const gb = document.getElementById('gyro-btn');
  if (gb && gb.textContent !== '') gb.style.display = 'block';
}

/* Close overlay on bg tap (mobile) */
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeSection();
});


/* ═════════ block 2 of 5 ═════════ */

/* ═══════════════════════════════════
   SHOP & STRIPE
═══════════════════════════════════ */
const PRODUCTS = {
  'garden-tee':    { name: 'Garden tee',     price: 28, sub: '100% organic cotton', imgClass: 'mi1', sizes: ['XS','S','M','L','XL','XXL'], unavail: [], colors: [], payLink: '' },
  'nowhere-hoodie':{ name: 'Nowhere hoodie', price: 55, sub: 'Heavyweight fleece',  imgClass: 'mi2', sizes: ['XS','S','M','L','XL'],       unavail: ['XS'], colors: [], payLink: '' },
  'pressure-print':{ name: 'Pressure print', price: 18, sub: 'A3 risograph',        imgClass: 'mi3', sizes: [],                             unavail: [], colors: [], payLink: '' },
  'tote-bag':      { name: 'Tote bag',       price: 14, sub: 'Natural canvas',      imgClass: 'mi4', sizes: [],                             unavail: [], colors: [], payLink: '' },
};

const COLOR_HEX = {
  black:'#111111', white:'#f0ece0', cream:'#e8e0cc', navy:'#1a2640',
  forest:'#2a3828', sage:'#8aad70', sand:'#c8b89a', red:'#b83020',
  pink:'#d49090', blue:'#405a8a', brown:'#6a4020', grey:'#888888',
  gray:'#888888', olive:'#6a7040', burgundy:'#6a1828', orange:'#c8601a',
  yellow:'#d4b040', purple:'#6a4080', teal:'#305858', green:'#3a6020',
};
function colorHex(name) {
  if (name.startsWith('#')) return name;
  return COLOR_HEX[name.toLowerCase()] || '#888888';
}

let sizeModalProduct = null;
let selectedSize     = null;
let selectedColor    = null;

function openProductDetail(productId) {
  const p = PRODUCTS[productId];
  if (!p) return;
  sizeModalProduct = productId;
  selectedSize  = p.sizes.length  === 0 ? 'One size' : null;
  selectedColor = p.colors.length === 0 ? 'default'  : null;

  document.getElementById('size-modal-name').textContent  = p.name;
  document.getElementById('size-modal-price').textContent = '£' + p.price;
  const img = document.getElementById('detail-img');
  img.className = p.imgClass || '';
  if (p.imgUrl) { img.style.backgroundImage = `url(${p.imgUrl})`; img.style.backgroundSize = 'cover'; }
  document.getElementById('detail-sub').textContent = p.sub;

  // Colors
  const colorSection = document.getElementById('color-section');
  const colorOpts    = document.getElementById('color-options');
  colorOpts.innerHTML = '';
  if (p.colors.length > 0) {
    colorSection.style.display = 'block';
    p.colors.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch';
      btn.style.background = colorHex(c);
      btn.title = c;
      btn.onclick = () => selectColor(c);
      colorOpts.appendChild(btn);
    });
  } else {
    colorSection.style.display = 'none';
  }

  // Sizes
  const opts = document.getElementById('size-options');
  opts.innerHTML = '';
  if (p.sizes.length > 0) {
    opts.style.display = 'flex';
    p.sizes.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'size-opt' + (p.unavail.includes(s) ? ' unavail' : '');
      btn.textContent = s;
      if (!p.unavail.includes(s)) btn.onclick = () => selectSize(s);
      opts.appendChild(btn);
    });
  } else {
    opts.style.display = 'none';
  }

  updateBuyBtn();
  document.getElementById('size-modal').classList.add('open');
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-opt').forEach(b => b.classList.toggle('selected', b.textContent === size));
  updateBuyBtn();
}

function selectColor(color) {
  selectedColor = color;
  document.querySelectorAll('.color-swatch').forEach(b => b.classList.toggle('selected', b.title === color));
  updateBuyBtn();
}

function updateBuyBtn() {
  const p   = PRODUCTS[sizeModalProduct];
  const btn = document.getElementById('size-confirm-btn');
  const needsSize  = p && p.sizes.length  > 0 && !selectedSize;
  const needsColor = p && p.colors.length > 0 && !selectedColor;
  if (needsSize)       { btn.textContent = 'Select a size';   btn.disabled = true; }
  else if (needsColor) { btn.textContent = 'Select a colour'; btn.disabled = true; }
  else                 { btn.textContent = 'Add to cart';     btn.disabled = false; }
}

function confirmSelection() {
  const p = PRODUCTS[sizeModalProduct];
  if (!p) return;
  const needsSize  = p.sizes.length  > 0 && !selectedSize;
  const needsColor = p.colors.length > 0 && !selectedColor;
  if (needsSize || needsColor) return;
  addToCart(sizeModalProduct, selectedSize || 'One size', selectedColor || 'default');
  closeSizeModal();
}

function closeSizeModal() {
  document.getElementById('size-modal').classList.remove('open');
  sizeModalProduct = null;
  selectedSize = null;
  selectedColor = null;
}

function quickBuy(productId, event) {
  if (event) event.stopPropagation();
  const p = PRODUCTS[productId];
  if (!p) return;
  if (p.sizes.length > 0 || p.colors.length > 0) openProductDetail(productId);
  else addToCart(productId, 'One size', 'default');
}

/* ═══════════════════════════════════
   CART
═══════════════════════════════════ */
let cart = [];

function variantLabel(it) {
  const parts = [];
  if (it.size  && it.size  !== 'One size') parts.push(it.size);
  if (it.color && it.color !== 'default')  parts.push(it.color);
  return parts.join(' · ') || 'One size';
}

function addToCart(productId, size, color) {
  const p = PRODUCTS[productId];
  if (!p) return;
  const line = cart.find(i => i.productId === productId && i.size === size && i.color === color);
  if (line) line.qty++;
  else cart.push({ productId, name: p.name, price: Number(p.price) || 0,
                   size, color, qty: 1, imgClass: p.imgClass || '', imgUrl: p.imgUrl || '' });
  renderCart();
  openCart();
}

// Card "Add to cart": products with size/colour options open the picker first.
function directAdd(productId, event) {
  if (event) event.stopPropagation();
  const p = PRODUCTS[productId];
  if (!p) return;
  if (p.sizes.length > 0 || p.colors.length > 0) openProductDetail(productId);
  else addToCart(productId, 'One size', 'default');
}

function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  renderCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cart-items');
  const footer  = document.getElementById('cart-footer');
  const count   = cart.reduce((n, i) => n + i.qty, 0);
  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('cart-badge').textContent = count;
  const trigCount = document.getElementById('cart-trigger-count');
  if (trigCount) trigCount.textContent = count;
  document.getElementById('cart-total').textContent = '£' + total;

  if (!cart.length) {
    itemsEl.innerHTML =
      '<div class="cart-empty"><div class="cart-empty-icon">○</div>' +
      '<span class="cart-empty-text">Nothing here yet</span></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = '';
  itemsEl.innerHTML = cart.map((it, idx) => `
    <div class="cart-item">
      <div class="cart-item-img ${esc(it.imgClass)}"${it.imgUrl ? ` style="background-image:url(${esc(it.imgUrl)});background-size:cover;background-position:center"` : ''}></div>
      <div class="cart-item-body">
        <span class="cart-item-name">${esc(it.name)}</span>
        <span class="cart-item-variant">${esc(variantLabel(it))}</span>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeQty(${idx},-1)">&minus;</button>
          <span class="cart-qty">${it.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${idx},1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="cart-item-price">£${it.price * it.qty}</span>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})">Remove</button>
      </div>
    </div>`).join('');
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
}

// Petal photos — loaded from Supabase petal_media table, with static fallbacks
const PETAL_FALLBACKS = {
  world:  'Brand Assets/MFN web/DSCF4045.jpg',
  about:  'Brand Assets/MFN web/DSCF3822.jpg',
  shows:  'Brand Assets/MFN web/DSCF4060.jpg',
  shop:   'Brand Assets/MFN web/DSCF3831.jpg',
  tbd:    'Brand Assets/MFN web/DSCF3858.jpg',
  stream: 'Brand Assets/MFN web/DSCF4077.jpg',
};

function setPetalPhoto(section, src) {
  const img = new Image();
  img.onload = () => {
    const el = document.querySelector(`#petal-fills image[data-section="${section}"]`);
    if (el) {
      el.setAttribute('href', img.src);
      el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', img.src);
    }
  };
  img.src = src;
}

async function loadPetalPhotos() {
  // Always load local fallbacks immediately so petals are never blank
  Object.entries(PETAL_FALLBACKS).forEach(([section, src]) => setPetalPhoto(section, src));
  // Then replace with Supabase photos if available
  if (sb) {
    try {
      const { data } = await sb.from('petal_media').select('section, photo_url');
      if (data) {
        data.forEach(({ section, photo_url }) => {
          if (photo_url) setPetalPhoto(section, photo_url);
        });
      }
    } catch {}
  }
}
loadPetalPhotos();

/* ═══════════════════════════════════
   MEDIA SLOTS — per-page backgrounds + home video + home logos
   Uploaded via admin (media_slots / stream_links). Local fallbacks where we
   already have art (per-page backgrounds); video/logos degrade to the gradient
   / text links until the client uploads them.
═══════════════════════════════════ */
const MEDIA = {};   // media_slots key -> url (per-page backgrounds, home video, etc.)

// No image until the client uploads one — sections keep the existing green
// overlay background by default (his backgrounds will be a different style).
function sectionBgUrl(id) { return MEDIA[id + '_bg'] || ''; }
function applySectionBg(id) {
  const bg = document.getElementById('overlay-bg');
  if (!bg) return;
  const url = sectionBgUrl(id);
  if (url) { bg.style.backgroundImage = `url("${url}")`; bg.style.opacity = '1'; }
  else { bg.style.opacity = '0'; }
}
function clearSectionBg() {
  const bg = document.getElementById('overlay-bg');
  if (bg) bg.style.opacity = '0';
}

function applyHomeVideo() {
  const v = document.getElementById('bg-video');
  if (!v) return;
  const src = MEDIA['home_bg_video'];
  if (src) {
    if (v.getAttribute('src') !== src) v.src = src;
    if (MEDIA['home_bg_poster']) v.poster = MEDIA['home_bg_poster'];
    v.style.display = 'block';
    if (!document.body.classList.contains('section-open')) v.play?.().catch(() => {});
  } else {
    v.style.display = 'none';   // fall back to the #bg-fall gradient
  }
}
function pauseHomeVideo()  { const v = document.getElementById('bg-video'); if (v && v.getAttribute('src')) v.pause?.(); }
function resumeHomeVideo() { const v = document.getElementById('bg-video'); if (v && v.getAttribute('src')) v.play?.().catch(() => {}); }

async function loadMediaSlots() {
  if (!sb) return;
  try {
    const { data } = await sb.from('media_slots').select('key, url');
    if (data) data.forEach(m => { if (m.url) MEDIA[m.key] = m.url; });
  } catch {}
  applyHomeVideo();
}
loadMediaSlots();

/* Home streaming links → render uploaded logos when present, else keep text. */
async function loadHomeLogos() {
  if (!sb) return;
  try {
    const { data } = await sb.from('stream_links').select('*').order('sort_order');
    if (!data || !data.length) return;                      // keep static text fallback
    const el = document.getElementById('stream-links');
    if (!el) return;
    el.innerHTML = data.map(l => {
      const inner = l.image_url
        ? `<img class="stream-logo-img" src="${esc(l.image_url)}" alt="${esc(l.platform)}">`
        : `<span class="stream-link-line"></span><span class="stream-link-name">${esc(l.platform)}</span>`;
      return `<a href="${esc(l.url)}" target="_blank" rel="noopener" class="stream-link" aria-label="${esc(l.platform)}">${inner}</a>`;
    }).join('');
  } catch {}
}
loadHomeLogos();

function toggleTracks(wrapId, total) {
  const wrap = document.getElementById(wrapId);
  const btn = wrap.nextElementSibling;
  const isOpen = wrap.classList.contains('open');
  wrap.classList.toggle('open');
  btn.querySelector('.tl-count').textContent = isOpen ? total + ' tracks +' : 'Collapse −';
}


async function startCheckout() {
  const btn = document.getElementById('checkout-btn');
  btn.disabled = true;
  btn.textContent = 'Redirecting…';

  // In production: call your backend to create a Stripe Checkout session
  // then redirect to session.url
  // For now: show a placeholder message
  setTimeout(() => {
    btn.textContent = 'Connect Stripe backend to complete';
    btn.disabled = false;
  }, 1500);

  // Production implementation:
  // const res = await fetch('/api/create-checkout', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ items: cart })
  // });
  // const { url } = await res.json();
  // window.location.href = url;
}


/* ═════════ block 3 of 5 ═════════ */
/* ═══════════════════════════════════
   On touch devices, tilt the phone to
   highlight the petal in that direction.
   Centre = no selection.
═══════════════════════════════════ */

(function() {
  if (!window.DeviceOrientationEvent) return;

  const inIframe = window.self !== window.top;

  // Petal directions in degrees (0 = up, clockwise)
  // Mapped from their SVG position relative to centre (280,280)
  const PETALS = [
    { section: 'world',  angle: 315 },  // top-left
    { section: 'about',  angle: 45  },  // top-right
    { section: 'shows',  angle: 90  },  // right
    { section: 'shop',   angle: 135 },  // bottom-right
    { section: 'tbd',    angle: 225 },  // bottom-left
    { section: 'stream', angle: 270 },  // left
  ];

  const DEADZONE = 4;      // degrees tilt before activation
  const SPREAD   = 45;     // degrees either side of petal angle that maps to it
  let activeSection = null;
  let permissionGranted = false;

  function angleDiff(a, b) {
    let d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  }

  let baseGamma = null;
  let baseBeta  = null;

  function calibrate(gamma, beta) {
    baseGamma = gamma;
    baseBeta  = beta;
  }

  function getTiltAngle(gamma, beta) {
    const g = gamma - (baseGamma || 0);
    const b = -(beta  - (baseBeta  || 0));
    return (Math.atan2(g, b) * 180 / Math.PI + 360) % 360;
  }

  function getTiltMagnitude(gamma, beta) {
    const g = gamma - (baseGamma || 0);
    const b = beta  - (baseBeta  || 0);
    return Math.sqrt(g * g + b * b);
  }

  let gyroReady = false;
  setTimeout(() => { gyroReady = true; }, 700);

  function setActive(section) {
    if (!gyroReady) return;
    if (section === activeSection) return;
    activeSection = section;

    if (!document.getElementById('home').classList.contains('hidden')) {
      previewPetalFill(section);
    }
  }

  function handleOrientation(e) {
    const gamma = e.gamma || 0;
    const beta  = e.beta  || 0;

    // Calibrate on first reading
    if (baseGamma === null) calibrate(gamma, beta);

    const magnitude = getTiltMagnitude(gamma, beta);
    if (magnitude < DEADZONE) {
      setActive(null);
      return;
    }

    const tiltAngle = getTiltAngle(gamma, beta);
    let closest = null;
    let closestDiff = Infinity;

    PETALS.forEach(p => {
      const diff = angleDiff(tiltAngle, p.angle);
      if (diff < SPREAD && diff < closestDiff) {
        closestDiff = diff;
        closest = p.section;
      }
    });

    setActive(closest);
  }

  function startGyro() {
    window.addEventListener('deviceorientation', handleOrientation, true);
  }

  const BTN_STYLE = 'position:fixed;bottom:40px;left:50%;transform:translateX(-50%);z-index:200;background:rgba(42,56,40,0.9);border:0.5px solid rgba(232,224,204,0.2);border-radius:99px;padding:12px 24px;font-family:Jost,sans-serif;font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:#e8e0cc;opacity:0.7;cursor:pointer;white-space:nowrap;display:none;';

  // Create button once, never remove it
  const gyroBtn = document.createElement('div');
  gyroBtn.id = 'gyro-btn';
  gyroBtn.style.cssText = BTN_STYLE;
  document.body.appendChild(gyroBtn);

  function showGyroBtn() { gyroBtn.style.display = 'block'; }
  function hideGyroBtn() { gyroBtn.style.display = 'none'; }

  function makeRecenterBtn() {
    gyroBtn.textContent = 'Recenter';
    gyroBtn.onclick = () => {
      const h = (e) => {
        calibrate(e.gamma || 0, e.beta || 0);
        window.removeEventListener('deviceorientation', h, true);
      };
      window.addEventListener('deviceorientation', h, true);
    };
    showGyroBtn();
  }

  function checkGyroAvailable(cb) {
    const h = (e) => {
      window.removeEventListener('deviceorientation', h, true);
      cb(e.gamma !== null && e.beta !== null);
    };
    window.addEventListener('deviceorientation', h, true);
    setTimeout(() => {
      window.removeEventListener('deviceorientation', h, true);
      cb(false);
    }, 1000);
  }

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // iOS — show Enable button first
    gyroBtn.textContent = 'Enable motion';
    gyroBtn.onclick = () => {
      if (inIframe) window.open(window.location.href, '_blank');
      DeviceOrientationEvent.requestPermission()
        .then(state => {
          if (state === 'granted') {
            startGyro();
            makeRecenterBtn();
          } else {
            hideGyroBtn();
          }
        })
        .catch(() => hideGyroBtn());
    };

    window.addEventListener('message', e => {
      if (e.data?.type === 'GYRO_GRANTED') {
        makeRecenterBtn();
      }
    });
    showGyroBtn();
  } else {
    // Android / other — check for gyro silently
    checkGyroAvailable((hasGyro) => {
      if (hasGyro) {
        startGyro();
        makeRecenterBtn();
      }
    });
  }
})();


/* ═════════ block 4 of 5 ═════════ */
/* ═══════════════════════════════════
   POINTER-UP NAVIGATION
   Highlight petal on pointerdown/move,
   open on pointerup — works on all devices.
═══════════════════════════════════ */
(function() {
  const flower = document.getElementById('flower');
  if (!flower) return;

  // Wiggle the corner flower (left/right rotate) as click feedback when a
  // petal navigates. Uses the independent `rotate` property so it composes
  // with the hover-grow scale instead of overwriting it.
  const flowerWrap = document.getElementById('flower-wrap');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function wiggleFlower() {
    if (!flowerWrap || reduceMotion.matches || !flowerWrap.animate) return;
    flowerWrap.animate(
      { rotate: ['0deg', '-9deg', '7deg', '-4deg', '0deg'] },
      { duration: 480, easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)' }
    );
  }

  flower.style.pointerEvents = 'none';
  setTimeout(() => { flower.style.pointerEvents = ''; }, 700);

  let pressing = false;

  function petalUnder(x, y) {
    // Use elementFromPoint to find which petal-path is under the pointer
    const el = document.elementFromPoint(x, y);
    if (!el) return null;
    if (el.classList.contains('petal-path')) return el.dataset.section;
    return null;
  }

  function highlightSection(section) {
    previewPetalFill(section);
  }

  function clearHighlight() {
    revertPetalFill();
  }

  flower.addEventListener('pointerdown', (e) => {
    pressing = true;
    flower.setPointerCapture(e.pointerId);
    highlightSection(petalUnder(e.clientX, e.clientY));
  });

  flower.addEventListener('pointermove', (e) => {
    if (!pressing && e.pointerType !== 'mouse') return;
    highlightSection(petalUnder(e.clientX, e.clientY));
  });

  flower.addEventListener('pointerleave', (e) => {
    if (!pressing) clearHighlight();
  });

  flower.addEventListener('pointerup', (e) => {
    if (!pressing) return;
    pressing = false;
    const section = petalUnder(e.clientX, e.clientY);
    if (document.body.classList.contains('section-open')) {
      // Corner flower. Petals navigate only with a mouse, where the hover
      // state is visible first. On touch/pen there's no hover — any tap,
      // petal or not, returns to the full-screen menu.
      if (e.pointerType === 'mouse' && section) { wiggleFlower(); openSection(section); }
      else closeSection();
      return;
    }
    if (section) openSection(section);   // menu state: open the petal
    else revertPetalFill();              // released on no petal → back to active fill
  });

  flower.addEventListener('pointercancel', () => {
    pressing = false;
    clearHighlight();
  });

  // Corner flower: tap the flower body (between petals) → return to centred menu.
  const returnHit = document.getElementById('flower-return-hit');
  if (returnHit) {
    returnHit.addEventListener('click', () => {
      if (document.body.classList.contains('section-open')) closeSection();
    });
    returnHit.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') &&
          document.body.classList.contains('section-open')) {
        e.preventDefault();
        closeSection();
      }
    });
  }
})();


/* ═════════ block 5 of 5 ═════════ */
/* ═══════════════════════════════════
   FLOWER PARALLAX + BREATHING
   Applies to #flower-wrap so it doesn't
   conflict with the bloom animation on #flower.
   Mouse: opposite-direction translate + 3D rotate.
   Gyro: same, when motion is enabled.
   Breathing: sine-wave scale pulse.
═══════════════════════════════════ */
(function() {
  const wrap = document.getElementById('flower-wrap');
  if (!wrap) return;

  wrap.style.willChange = 'transform';

  const TRANS   = 14;    // px max translation (mouse)
  const TRANS_G = 20;    // px max translation (gyro)
  const ROT     = 6;     // deg max rotation (mouse)
  const ROT_G   = 9;     // deg max rotation (gyro)
  const LERP_M  = 0.08;  // mouse smoothing
  const LERP_G  = 0.048; // gyro smoothing (slower = silkier)
  const BREATHE = 0.015; // scale amplitude (1.5%)
  const PERIOD  = 3800;  // ms per breath cycle
  const PERSP   = 900;   // perspective depth in px

  let tmx = 0, tmy = 0; // mouse targets, normalised –1 to 1
  let tgx = 0, tgy = 0; // gyro targets
  let cmx = 0, cmy = 0; // lerped mouse
  let cgx = 0, cgy = 0; // lerped gyro

  // ── Mouse ──────────────────────────────────────
  window.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    tmx = (e.clientX - cx) / cx;
    tmy = (e.clientY - cy) / cy;
  });
  document.documentElement.addEventListener('mouseleave', () => { tmx = 0; tmy = 0; });

  // ── Gyro (separate from petal-highlight listener) ──
  let baseGx = null, baseGy = null;
  window.addEventListener('deviceorientation', e => {
    const g = e.gamma || 0, b = e.beta || 0;
    if (baseGx === null) { baseGx = g; baseGy = b; return; }
    const norm = (v, max) => Math.max(-1, Math.min(1, v / max));
    // negative = opposite direction to tilt
    tgx = -norm(g - baseGx, 28);
    tgy = -norm(b - baseGy, 28);
  }, true);

  // ── rAF loop ───────────────────────────────────
  function tick() {
    // Freeze parallax while collapsed: corner button stays still and CSS
    // (hover-grow) owns the wrap transform. Resumes when back in the menu.
    if (document.body.classList.contains('section-open')) {
      if (wrap.style.transform !== '') wrap.style.transform = '';
      requestAnimationFrame(tick);
      return;
    }
    cmx += (tmx - cmx) * LERP_M;
    cmy += (tmy - cmy) * LERP_M;
    cgx += (tgx - cgx) * LERP_G;
    cgy += (tgy - cgy) * LERP_G;

    // Translation: opposite to input direction
    const tx = -cmx * TRANS  + cgx * TRANS_G;
    const ty = -cmy * TRANS  + cgy * TRANS_G;

    // Rotation: near-side leans toward input, giving 3D depth
    // rotateX: mouse/gyro up → top tilts toward viewer
    // rotateY: mouse/gyro right → right face toward viewer
    const rx =  cmy * ROT  - cgy * ROT_G;
    const ry = -cmx * ROT  + cgx * ROT_G;
    // Subtle z-roll for extra organic dimensionality
    const rz = (-cmx + cgx) * 1.8;

    // Breathing: slow sine pulse on scale
    const breathe = 1 + Math.sin(Date.now() * Math.PI * 2 / PERIOD) * BREATHE;

    wrap.style.transform =
      `perspective(${PERSP}px) ` +
      `translate3d(${tx}px,${ty}px,0) ` +
      `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) ` +
      `scale(${breathe})`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
