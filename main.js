(()=>{"use strict";document.getElementById("homebutton").addEventListener("click",(()=>{document.body.childElementCount>1&&document.getElementById("content").remove(),(()=>{let e=document.createElement("div");e.setAttribute("id","content"),document.body.append(e);let t=document.createElement("h1");t.innerText="Restaurant Homepage",e.append(t);let n=document.createElement("p");n.innerText="The best restaurant for miles and miles and miles around.",e.append(n);let d=document.createElement("img");d.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg"),d.setAttribute("alt","The inside of a revolving restaurant"),e.append(d)})()})),document.getElementById("menubutton").addEventListener("click",(()=>{document.body.childElementCount>1&&document.getElementById("content").remove(),(()=>{let e=document.createElement("div");e.setAttribute("id","content"),document.body.append(e);let t=document.createElement("h1");t.innerText="MENU NEW TEST",e.append(t);const n=["STARTERS","MAIN COURSE","DESSERT"],d=[["Cheese bread","Crackers","Lettuce"],["Spaghetti","Chicken","Fish and chips"],["Ice cream","Chocolate","Sweets"]];for(let t=0;t<n.length;t++){let c=document.createElement("h2");c.innerText=n[t];let m=d[t],o=document.createElement("ul");for(let e=0;e<m.length;e++){let t=document.createElement("li");t.innerText=m[e],o.append(t)}e.append(c),e.append(o)}})()})),document.getElementById("aboutbutton").addEventListener("click",(()=>{document.body.childElementCount>1&&document.getElementById("content").remove(),(()=>{let e=document.createElement("div");e.setAttribute("id","content"),document.body.append(e);let t=document.createElement("h1");t.innerText="ABOUT",e.append(t);let n=document.createElement("h2");n.innerText="Address",e.append(n);let d=document.createElement("p");d.innerText="742 Evergreen Street, Sprungfeld, Texas, TX0986",e.append(d);let c=document.createElement("h2");c.innerText="Phone number",e.append(c);let m=document.createElement("p");m.innerText="+01 789 345 4000",e.append(m)})()}))})();