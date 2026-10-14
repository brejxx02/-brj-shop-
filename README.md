# BRJ SHOP — Starter Prototype

This is a front-end demo only. Product listings and referral links are demo data.
It does not process real orders, payments, user accounts, commission payouts, or shipping.

## Publish a free demo with GitHub Pages

1. Sign in to https://github.com/ or create an account.
2. Click **New repository**.
3. Repository name: `brj-shop`
4. Set it to **Public** for the easiest GitHub Pages setup, then create it.
5. Click **Add file → Upload files**.
6. Upload `index.html` from this folder and click **Commit changes**.
7. Open the repository's **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Choose branch `main` and folder `/(root)`, then click **Save**.
10. After publishing, GitHub will show the demo URL, usually:
    `https://YOUR-USERNAME.github.io/brj-shop/`

It may take a few minutes for the first deployment.

## Important next phase

GitHub Pages hosts static files only. It cannot safely provide an admin login, database, order processing, or commission ledger by itself. Next, connect a backend/database (for example, Supabase) with secure role-based access. Never put service-role keys, payment secrets, or admin passwords inside `index.html`.

Before taking real orders, add product/seller records, inventory controls, order states, returns/refunds, privacy/terms pages, and a compliant payment provider. Do not enable real referral payouts until the commission rules and business model have been legally reviewed.
