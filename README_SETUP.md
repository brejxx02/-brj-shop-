# Supabase setup for BRJ SHOP

1. Open your Supabase project and go to SQL Editor.
2. Review `schema.sql` before running it, especially if you already have a `products` table.
3. Run the SQL migration. It creates tables and Row Level Security policies.
4. In Authentication, create your admin account or use an existing user.
5. Copy that user's Auth UUID. Then run:
   ```sql
   insert into public.admin_users (user_id)
   values ('PASTE-AUTH-USER-UUID-HERE')
   on conflict (user_id) do nothing;
   ```
6. Do not add an email/password to source files. Do not expose the service-role key.
7. Create a Storage bucket for product images and configure upload policies before adding direct upload support.
8. Configure Supabase Auth redirect URLs for the published GitHub Pages domain.

Important:
- `schema.sql` is a starter migration, not a complete production e-commerce backend.
- Secure order creation, stock decrement, verified payment webhooks, commission accrual/reversal and payouts still need Supabase Edge Functions or reviewed database functions.
- Do not accept frontend totals as authoritative.
- The existing `products` table in your project may differ from this schema. Back up data and reconcile columns before running migration.
