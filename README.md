# BRJ SHOP — GitHub Pages + Supabase starter

This repository is a multi-page starter for a small online shop.

## Setup
1. Upload the whole folder contents to your GitHub repository, preserving directories.
2. Enable GitHub Pages from the repository settings.
3. `assets/js/config.js` already contains the supplied Supabase project URL and publishable key.
4. Run/reconcile `supabase/schema.sql` in the Supabase SQL Editor after backing up existing data.
5. Create an admin account in Supabase Authentication, then add its Auth UUID to `public.admin_users` using the SQL in `supabase/README_SETUP.md`.
6. Open `https://YOUR-USERNAME.github.io/brj-shop/` and `/admin.html`.

## Pages included
Store home, product listing/detail, login/register, account, cart, checkout information, order history placeholder, referrals placeholder, wallet/withdrawal placeholders, seller placeholder, admin product manager, and admin section placeholders.

## Important current limitations
- Product catalogue reads from Supabase and admin product CRUD is implemented subject to correct RLS policies.
- Cart uses localStorage and is not a secure order record.
- Checkout does not process payments yet.
- Order creation, payment webhooks, stock locking, seller payouts, referral commissions and withdrawal processing are not yet implemented as secure server-side functions.
- Referral rates in config are display/config placeholders, not an operational payout engine.
- This is not ready for real-money production until server-side functions, security policies, payment verification, delivery operations, legal review and testing are complete.

## Security
Only use the Supabase publishable key in the frontend. Never put service-role keys, payment secrets, passwords, or private API tokens in GitHub.
