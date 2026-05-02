-- MFN Site — Seed
-- Run once in Supabase SQL editor (Dashboard → SQL editor → New query)
-- Safe to re-run: skips if releases table already has data.

-- ─── NEW COLUMNS ──────────────────────────────────────────
alter table releases add column if not exists visible boolean default true;
alter table releases add column if not exists videos  jsonb   default '[]';

-- ─── SEED ─────────────────────────────────────────────────
do $seed$
declare
  p_id uuid; ss_id uuid; ew_id uuid;
begin
  if (select count(*) from releases) > 0 then
    raise notice 'Releases already seeded, skipping.';
    return;
  end if;

  -- PRESSURE ------------------------------------------------
  insert into releases (year, title, type, description, spotify_url, bandcamp_url, platform_links, sort_order, visible)
  values (
    '2025', 'Pressure', 'Album · with hihi',
    'A collaborative album with producer hihi. PRESSURE earned global attention from OkayAfrica, Dead Good Music, Rotate Magazine, and 24 Hip-Hop — mau from nowhere''s most fully realised statement yet.',
    'https://open.spotify.com/artist/7MZ8Hh17R6vfPDn9UCkvuf',
    'https://maufromnowhere.bandcamp.com/album/pressure',
    '[{"platform":"Spotify","url":"https://open.spotify.com/artist/7MZ8Hh17R6vfPDn9UCkvuf"},{"platform":"Bandcamp","url":"https://maufromnowhere.bandcamp.com/album/pressure"}]',
    0, true
  ) returning id into p_id;

  insert into release_quotes (release_id, quote, source, sort_order) values
    (p_id, 'Pressure isn''t just experimental — it''s proof that the future of hip-hop lies in fearless collaboration and cross-cultural dialogue.', '24 Hip-Hop', 0),
    (p_id, 'Pressure is as much a document of survival as it is a celebration of transformation, bold, raw, and entirely its own.', 'Rotate Magazine', 1),
    (p_id, 'More than a collaboration — it''s a conversation, a clash, and a catharsis. If you''re into rap that isn''t afraid to veer left, this one''s for you.', 'Wordplay Magazine', 2);

  insert into release_tracks (release_id, name, feat, stream_url, sort_order) values
    (p_id, 'here we are again',    null, 'https://soundcloud.com/maufromnowhere/here-we-are-again',    0),
    (p_id, 'peace: war',           null, 'https://soundcloud.com/maufromnowhere/peace-war',             1),
    (p_id, 'what''s all this then',null, 'https://soundcloud.com/maufromnowhere/whats-all-this-then-1', 2),
    (p_id, 'E6',                   null, 'https://soundcloud.com/maufromnowhere/e6',                    3),
    (p_id, 'Green Hill Zone',      null, 'https://soundcloud.com/maufromnowhere',                       4),
    (p_id, 'miss you',             null, 'https://soundcloud.com/maufromnowhere/miss-you',              5),
    (p_id, 'silly',                null, 'https://soundcloud.com/maufromnowhere/silly',                 6),
    (p_id, 'hard_drive',           null, 'https://soundcloud.com/maufromnowhere/hard_drive',            7),
    (p_id, 'down_again',           null, 'https://soundcloud.com/maufromnowhere/down_again',            8);

  -- SOFT STEPS ----------------------------------------------
  insert into releases (year, title, type, description, spotify_url, bandcamp_url, platform_links, sort_order, visible)
  values (
    '2024', 'Soft Steps', 'EP',
    'Putting one foot in front of the other in a gentle way. SOFT STEPS is an ode to patience, navigating growth and the trials that come with it with the grace to forgive myself and the calm endurance to press onward into the unknown. Praised by CLASH, Atwood Magazine, and 1883 for its fearless experimentation.',
    '',
    'https://maufromnowhere.bandcamp.com/album/soft-steps',
    '[{"platform":"Bandcamp","url":"https://maufromnowhere.bandcamp.com/album/soft-steps"}]',
    1, true
  ) returning id into ss_id;

  insert into release_quotes (release_id, quote, source, sort_order) values
    (ss_id, 'The creativity is undimmed on his latest project, with ''SOFT STEPS'' epitomising his thirst for collaboration — there''s an urgency to his work, allowing him to step confidently into the unknown.', 'CLASH', 0),
    (ss_id, 'A masterful offering of an authentic and innovative creative journey, rapidly evolving his sonic identity.', 'Mixtape Madness', 1),
    (ss_id, 'Far more than just a rapper, mau displays his ability to create melodies within his hook and bring out a lighter-touch to this bass-heavy, Hip-Hop-inspired single.', 'Forbes', 2);

  insert into release_tracks (release_id, name, feat, stream_url, sort_order) values
    (ss_id, 'don''t pick up', null,               'https://maufromnowhere.bandcamp.com/track/dont-pick-up',           0),
    (ss_id, 'Restore',        'Jay James',        'https://maufromnowhere.bandcamp.com/track/restore-feat-jay-james', 1),
    (ss_id, 'Remind(h)er',    'MAUIMOON',         'https://maufromnowhere.bandcamp.com/',                             2),
    (ss_id, 'By Your Side',   'Sute Iwar, NAiLA', 'https://maufromnowhere.bandcamp.com/',                             3),
    (ss_id, 'Crooked',        null,               'https://maufromnowhere.bandcamp.com/track/crooked',                4);

  -- EARLIER WORK --------------------------------------------
  insert into releases (year, title, type, description, spotify_url, bandcamp_url, platform_links, sort_order, visible)
  values (
    '2019 — 2023', 'Earlier work', 'Albums · Singles · The Nairobi years',
    'Named Apple Music''s East African Up Next Artist (May 2023). Debut album The Universe Is Holding You, the MFN EP, minute-ish mau, and homebound (demos) — the foundations of a borderless sonic identity shaped between Nairobi, the UK, and the Netherlands.',
    '',
    'https://maufromnowhere.bandcamp.com',
    '[{"platform":"Bandcamp","url":"https://maufromnowhere.bandcamp.com"}]',
    2, true
  ) returning id into ew_id;

  insert into release_tracks (release_id, name, feat, stream_url, sort_order) values
    (ew_id, 'The Universe Is Holding You', 'Album · 2022', 'https://maufromnowhere.bandcamp.com/album/the-universe-is-holding-you', 0),
    (ew_id, 'MFN',           'EP · 2020',  'https://maufromnowhere.bandcamp.com/album/mfn',           1),
    (ew_id, 'Zombie Flower', 'Single',     'https://maufromnowhere.bandcamp.com/track/zombie-flower', 2),
    (ew_id, 'Try',           'Single',     'https://maufromnowhere.bandcamp.com/track/try',           3);

  -- ABOUT ---------------------------------------------------
  if (select count(*) from about) = 0 then
    insert into about (bio, quote, quote_source, portrait_url, contact_email, achievements, press_names) values (
      'mau from nowhere blends hip-hop, R&B, and electronic textures into a soulful, genre-bending sound shaped between Nairobi, the UK, and the Netherlands. His music is both urgent and meditative — weaving melodic raps with reflective songwriting, drawing comparisons to Obongjayar, Noname, and Yinka Bernie, with influences spanning Outkast to Bloc Party.

Born Kamau Wainaina in Nairobi, raised between Kenya, the UK and the Netherlands, mau''s music reflects a life spent oscillating between worlds — never quite staying in one place, finding comfort instead in the clarity of his craft. His 2025 collaborative album PRESSURE with producer hihi earned global attention from OkayAfrica, Dead Good Music, and 24 Hip-Hop. His 2024 EP SOFT STEPS was praised by CLASH, Atwood Magazine, and 1883. Named Apple Music''s East African Up Next Artist (May 2023) and spotlighted on COLORS.',
      'mau from nowhere has the innate ability to make you feel seen and validated through his vulnerability. He lets you in and in doing so creates an environment that is real and non-judgmental.',
      'Tangaza Magazine',
      'Brand Assets/MFN graded/DSCF3822.jpg',
      'mgmt.mfn@gmail.com',
      '["Apple Music Up Next Artist — May 2023","PRESSURE (2025) with hihi — global press attention across four continents","Known for intimate yet powerful live performances — from Nairobi club floors to festival stages across the UK and Europe"]'::jsonb,
      '["OkayAfrica","CLASH","1883 Magazine","Atwood Magazine","Wordplay Magazine","Music Crowns","Rotate Magazine","24 Hip-Hop","Kilele Magazine","Tangaza Magazine","Dead Good Music","Forbes","Mixtape Madness","PAM"]'::jsonb
    );
  end if;

end $seed$;
