document.querySelectorAll(".field-text").forEach(function(e){var t=e.getAttribute("name"),l=document.createElement("label"),r=e.getAttribute("id");l.className="field-label",l.setAttribute("for",r),l.textContent=t,e.after(l),e.placeholder=t.slice(0,1).toUpperCase()+t.slice(1)});
//# sourceMappingURL=index.55952409.js.map
