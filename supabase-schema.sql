-- MFN Site — Supabase Schema
-- Run this in the Supabase SQL editor (Dashboard → SQL editor → New query)


-- ─── TABLES ───────────────────────────────────────────────

create table if not exists shows (
  id          uuid primary key default gen_random_uuid(),
  date        text not null,
  city        text not null,
  venue       text not null,
  ticket_url  text,
  sold_out    boolean default false,
  sort_order  int default 0,
  created_at  timestamptz default now()
);

create table if not exists products (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  name          text not null,
  price         numeric not null,
  description   text,
  badge         text,
  image_url     text,
  sizes         jsonb default '[]',
  unavail_sizes jsonb default '[]',
  sold_out      boolean default false,
  active        boolean default true,
  sort_order    int default 0,
  created_at    timestamptz default now()
);

create table if not exists releases (
  id            uuid primary key default gen_random_uuid(),
  year          text not null,
  title         text not null,
  type          text,
  description   text,
  cover_art_url text,
  spotify_url   text,
  bandcamp_url  text,
  sort_order    int default 0,
  created_at    timestamptz default now()
);

create table if not exists release_quotes (
  id          uuid primary key default gen_random_uuid(),
  release_id  uuid references releases(id) on delete cascade,
  quote       text not null,
  source      text not null,
  sort_order  int default 0
);

create table if not exists release_tracks (
  id          uuid primary key default gen_random_uuid(),
  release_id  uuid references releases(id) on delete cascade,
  name        text not null,
  feat        text,
  stream_url  text not null,
  sort_order  int default 0
);

create table if not exists about (
  id            uuid primary key default gen_random_uuid(),
  bio           text,
  quote         text,
  quote_source  text,
  portrait_url  text,
  contact_email text,
  achievements  jsonb default '[]',
  press_names   jsonb default '[]',
  updated_at    timestamptz default now()
);

create table if not exists stream_links (
  id          uuid primary key default gen_random_uuid(),
  platform    text not null,
  url         text not null,
  sort_order  int default 0
);

create table if not exists settings (
  key    text primary key,
  value  text
);


-- ─── STORAGE BUCKET ───────────────────────────────────────
-- Create a public bucket called "media" in the Supabase dashboard:
-- Storage → New bucket → Name: media → Public: true
-- Or run this via the Supabase management API / dashboard UI.


-- ─── ROW LEVEL SECURITY ───────────────────────────────────
-- Public reads on all content tables (site visitors see content)
-- Authenticated writes (admin only)

alter table shows          enable row level security;
alter table products       enable row level security;
alter table releases       enable row level security;
alter table release_quotes enable row level security;
alter table release_tracks enable row level security;
alter table about          enable row level security;
alter table stream_links   enable row level security;
alter table settings       enable row level security;

-- Public SELECT
create policy "public read shows"          on shows          for select using (true);
create policy "public read products"       on products       for select using (true);
create policy "public read releases"       on releases       for select using (true);
create policy "public read release_quotes" on release_quotes for select using (true);
create policy "public read release_tracks" on release_tracks for select using (true);
create policy "public read about"          on about          for select using (true);
create policy "public read stream_links"   on stream_links   for select using (true);
create policy "public read settings"       on settings       for select using (true);

-- Authenticated INSERT / UPDATE / DELETE
create policy "auth write shows"          on shows          for all using (auth.role() = 'authenticated');
create policy "auth write products"       on products       for all using (auth.role() = 'authenticated');
create policy "auth write releases"       on releases       for all using (auth.role() = 'authenticated');
create policy "auth write release_quotes" on release_quotes for all using (auth.role() = 'authenticated');
create policy "auth write release_tracks" on release_tracks for all using (auth.role() = 'authenticated');
create policy "auth write about"          on about          for all using (auth.role() = 'authenticated');
create policy "auth write stream_links"   on stream_links   for all using (auth.role() = 'authenticated');
create policy "auth write settings"       on settings       for all using (auth.role() = 'authenticated');


-- ─── SEED — initial settings ──────────────────────────────
insert into settings (key, value) values
  ('booking_email', 'mgmt.mfn@gmail.com')
on conflict (key) do nothing;
