(function(){
  const cfg = window.BRJ_CONFIG;
  if (!window.supabase || !cfg || !cfg.SUPABASE_URL || !cfg.SUPABASE_PUBLISHABLE_KEY) {
    console.error("BRJ SHOP configuration or Supabase library is missing.");
    return;
  }
  window.brjDb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_PUBLISHABLE_KEY);
})();
