-- MFN Site — Stripe migration
-- Run in Supabase SQL editor after the initial schema.
-- Adds columns needed for Stripe product sync.

alter table products add column if not exists payment_link_url text;
alter table products add column if not exists colors jsonb default '[]';
alter table products add column if not exists stripe_product_id text;
