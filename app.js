!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){return t.replace(/[^\-?0-9.]/g,"")}function o(t,e){return t=parseFloat(t),e=parseFloat(e),t=isNaN(t)?0:t,e=isNaN(e)?0:e,t-e}var s=n(1);s.extend("number",function(t){return t.match(/^-?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/)||t.match(/^-?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/)||t.match(/^-?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/)},function(t,e){return t=r(t),e=r(e),o(e,t)}),s(document.getElementById("standings"),{descending:!0});var a=document.querySelector(".all-results");[].forEach.call(document.querySelectorAll(".standings tbody td a"),function(t){t.addEventListener("click",function(t){var e=t.target.parentNode.parentNode,n=e.getAttribute("data-player");[].forEach.call(document.querySelectorAll(".breakdown"),function(t){t.style.display="none"},!1),a.style.display="none";var r=document.querySelector(".breakdown[data-player='"+n+"']");r.style.display="block"},!1)})},function(t,e){!function(){function e(t,n){if(!(this instanceof e))return new e(t,n);if(!t||"TABLE"!==t.tagName)throw new Error("Element must be a table");this.init(t,n||{})}var n=[],r=function(t){var e;return window.CustomEvent&&"function"==typeof window.CustomEvent?e=new CustomEvent(t):(e=document.createEvent("CustomEvent"),e.initCustomEvent(t,!1,!1,void 0)),e},o=function(t){return t.getAttribute("data-sort")||t.textContent||t.innerText||""},s=function(t,e){return t=t.toLowerCase(),e=e.toLowerCase(),t===e?0:t<e?1:-1},a=function(t,e){return function(n,r){var o=t(n.td,r.td);return 0===o?e?r.index-n.index:n.index-r.index:o}};e.extend=function(t,e,r){if("function"!=typeof e||"function"!=typeof r)throw new Error("Pattern and sort must be a function");n.push({name:t,pattern:e,sort:r})},e.prototype={init:function(t,e){var n,r,o,s,a=this;if(a.table=t,a.thead=!1,a.options=e,t.rows&&t.rows.length>0&&(t.tHead&&t.tHead.rows.length>0?(n=t.tHead.rows[t.tHead.rows.length-1],a.thead=!0):n=t.rows[0]),n){var i=function(){a.current&&a.current!==this&&(a.current.classList.remove("sort-up"),a.current.classList.remove("sort-down")),a.current=this,a.sortTable(this)};for(o=0;o<n.cells.length;o++)s=n.cells[o],s.classList.contains("no-sort")||(s.classList.add("sort-header"),s.tabindex=0,s.addEventListener("click",i,!1),s.classList.contains("sort-default")&&(r=s));r&&(a.current=r,a.sortTable(r))}},sortTable:function(t,e){var i,d=this,c=t.cellIndex,l=s,u="",f=[],p=d.thead?0:1,h=t.getAttribute("data-sort-method"),w=t.getAttribute("data-sort-order");if(d.table.dispatchEvent(r("beforeSort")),e?i=t.classList.contains("sort-up")?"sort-up":"sort-down":(i=t.classList.contains("sort-up")?"sort-down":t.classList.contains("sort-down")?"sort-up":"asc"===w?"sort-down":"desc"===w?"sort-up":d.options.descending?"sort-up":"sort-down",t.classList.remove("sort-down"===i?"sort-up":"sort-down"),t.classList.add(i)),!(d.table.rows.length<2)){if(!h){for(;f.length<3&&p<d.table.tBodies[0].rows.length;)u=o(d.table.tBodies[0].rows[p].cells[c]),u=u.trim(),u.length>0&&f.push(u),p++;if(!f)return}for(p=0;p<n.length;p++)if(u=n[p],h){if(u.name===h){l=u.sort;break}}else if(f.every(u.pattern)){l=u.sort;break}for(d.col=c,p=0;p<d.table.tBodies.length;p++){var b,v=[],m={},g=0,x=0;if(!(d.table.tBodies[p].rows.length<2)){for(b=0;b<d.table.tBodies[p].rows.length;b++)u=d.table.tBodies[p].rows[b],u.classList.contains("no-sort")?m[g]=u:v.push({tr:u,td:o(u.cells[d.col]),index:g}),g++;for("sort-down"===i?(v.sort(a(l,!0)),v.reverse()):v.sort(a(l,!1)),b=0;b<g;b++)m[b]?(u=m[b],x++):u=v[b-x].tr,d.table.tBodies[p].appendChild(u)}}d.table.dispatchEvent(r("afterSort"))}},refresh:function(){void 0!==this.current&&this.sortTable(this.current,!0)}},"undefined"!=typeof t&&t.exports?t.exports=e:window.Tablesort=e}()}]);