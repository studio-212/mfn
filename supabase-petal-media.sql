-- MFN Site — Petal Media migration
-- Run in Supabase SQL editor.
-- Creates the petal_media table used by the admin Home tab.

create table if not exists petal_media (
  section    text primary key,
  label      text not null,
  photo_url  text,
  updated_at timestamptz default now()
);

insert into petal_media (section, label) values
  ('world',  'World'),
  ('about',  'About'),
  ('shows',  'Shows'),
  ('shop',   'Shop'),
  ('tbd',    'TBD'),
  ('stream', 'Stream')
on conflict (section) do nothing;
