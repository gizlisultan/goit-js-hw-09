import"./assets/modulepreload-polyfill-ec808ebb.js";const a="feedback-form-state",r=document.querySelector(".feedback-form"),s=r.elements.email,o=r.elements.message;r.addEventListener("submit",l);r.addEventListener("input",m);i();function l(e){e.preventDefault();const t=e.currentTarget.email.value.trim(),n=e.currentTarget.message.value.trim();if(t===""||n===""){alert("Please fill in all the fields!");return}console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),e.currentTarget.reset()}function m(e){const t={};t.email=e.currentTarget.email.value.trim(),t.message=e.currentTarget.message.value.trim(),localStorage.setItem(a,JSON.stringify(t))}function i(){const e=JSON.parse(localStorage.getItem(a));e&&(s.value=e.email,o.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
