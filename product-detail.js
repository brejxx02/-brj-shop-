document.addEventListener("DOMContentLoaded", async()=>{
 const db=window.brjDb, box=document.getElementById("productDetail");
 const cartCount=document.getElementById("cartCount"); const cart=JSON.parse(localStorage.getItem("brj_cart")||"[]");if(cartCount)cartCount.textContent=cart.reduce((n,x)=>n+Number(x.qty||0),0);
 const id=new URLSearchParams(location.search).get("id");
 if(!id||!db){box.textContent="Product not found.";return;}
 const {data:p,error}=await db.from("products").select("id,name,description,price,image_url,category,stock,is_active").eq("id",id).eq("is_active",true).maybeSingle();
 if(error||!p){box.textContent="Product not found or unavailable.";return;}
 box.replaceChildren();const panel=document.createElement("section");panel.className="panel";
 if(p.image_url){const img=document.createElement("img");img.src=p.image_url;img.alt=p.name;img.style="width:min(100%,460px);max-height:460px;object-fit:contain;float:left;margin:0 24px 18px 0";panel.append(img);}
 const h=document.createElement("h1");h.textContent=p.name;
 const price=document.createElement("h2");price.textContent="₹"+Number(p.price).toFixed(2);
 const desc=document.createElement("p");desc.textContent=p.description||"";
 const stock=document.createElement("p");stock.textContent=p.stock>0?"In stock: "+p.stock:"Currently out of stock";
 const qty=document.createElement("input");qty.type="number";qty.min="1";qty.max=String(Math.max(1,p.stock));qty.value="1";qty.style.maxWidth="120px";
 const btn=document.createElement("button");btn.className="button";btn.textContent="Add to cart";btn.disabled=Number(p.stock)<=0;
 btn.onclick=()=>{let c=JSON.parse(localStorage.getItem("brj_cart")||"[]");const n=Number(qty.value);if(!Number.isInteger(n)||n<1||n>p.stock){alert("Please enter a valid quantity.");return;}const old=c.find(x=>String(x.id)===String(p.id));if(old){if(old.qty+n>p.stock){alert("Quantity exceeds currently displayed stock.");return;}old.qty+=n;}else c.push({id:p.id,name:p.name,price:Number(p.price),image_url:p.image_url,qty:n});localStorage.setItem("brj_cart",JSON.stringify(c));alert("Added to cart. Final stock and price must be validated at checkout.");};
 panel.append(h,price,desc,stock,qty,btn);box.append(panel);
});