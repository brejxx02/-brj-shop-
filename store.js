document.addEventListener("DOMContentLoaded", async () => {
  const db = window.brjDb;
  const count = document.getElementById("cartCount");
  const cart = JSON.parse(localStorage.getItem("brj_cart") || "[]");
  if (count) count.textContent = cart.reduce((n,x)=>n+Number(x.qty||0),0);
  const year = document.getElementById("year"); if(year) year.textContent = new Date().getFullYear();
  if (!db) return;
  const grid = document.getElementById("productGrid") || document.getElementById("featuredProducts");
  if (!grid) return;
  const search = document.getElementById("searchInput");
  const category = document.getElementById("categoryFilter");
  let products = [];
  const {data,error} = await db.from("products").select("id,name,description,price,image_url,category,stock,is_active,created_at").eq("is_active",true).order("created_at",{ascending:false});
  if(error){grid.replaceChildren(); const p=document.createElement("p");p.className="notice error";p.textContent="Products could not load. Check Supabase products table and public SELECT policy.";grid.append(p);return;}
  products = data || [];
  if(category){
    [...new Set(products.map(p=>p.category).filter(Boolean))].sort().forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c;category.append(o);});
  }
  function render(){
    const q=(search?.value||"").trim().toLowerCase(), c=category?.value||"";
    const list=products.filter(p=>(!q || (p.name+" "+(p.description||"")+" "+(p.category||"")).toLowerCase().includes(q)) && (!c||p.category===c));
    grid.replaceChildren();
    if(!list.length){const p=document.createElement("p");p.className="empty";p.textContent="No products found. Add active products from the admin panel.";grid.append(p);return;}
    list.slice(0,grid.id==="featuredProducts"?8:undefined).forEach(p=>{
      const card=document.createElement("article");card.className="product-card";
      if(p.image_url){const img=document.createElement("img");img.src=p.image_url;img.alt=p.name;img.loading="lazy";img.onerror=()=>img.remove();card.append(img);}
      const content=document.createElement("div");content.className="product-content";
      const h=document.createElement("h3");h.textContent=p.name;
      const price=document.createElement("div");price.className="price";price.textContent="₹"+Number(p.price).toFixed(2);
      const desc=document.createElement("p");desc.textContent=(p.description||p.category||""); 
      const link=document.createElement("a");link.className="button";link.href="product.html?id="+encodeURIComponent(p.id);link.textContent="View product";
      content.append(h,price,desc,link);card.append(content);grid.append(card);
    });
  }
  search?.addEventListener("input",render);category?.addEventListener("change",render);render();
});
