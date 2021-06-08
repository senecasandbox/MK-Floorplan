function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ptjmuk10gT":
        Script1();
        break;
  }
}

function Script1()
{
  var sWidth = screen.width;
console.log("sWidth "+sWidth);
var ComputedStyle = getComputedStyle(document.body);
console.log("CS "+ComputedStyle);
var divW = ComputedStyle.width;
var w = divW.replace(/[^0-9]/g,'');
var wN = Number(w);
console.log("Width "+wN);
if (w > 1000) { 
var styles = `@media print {
body, * { visibility: hidden; }
html, body { overflow: hidden; transform: translateZ(0); }
#slide {
transform: scale(0.5) !important;
}
#wrapper {
transform: scale(0.5) !important;
}
#slide,
#wrapper {
width: 100% !important;
height: 100% !important;
overflow: visible !important;
}
#frame {
overflow: visible !important;
}
.slide-transition-container {
overflow: visible !important;
}
@page {size: A4 portrait;max-height:80%; max-width:80%}
.slide-container, .slide-container * {
visibility: visible !important;
margin-top: 0px !important;
margin-left: 0px !important;
}
#outline-panel {
display: none !important;
}
}
}`
var stylesheet = document.createElement('style');
stylesheet.type = 'text/css';
stylesheet.innerText = styles;
document.head.appendChild(stylesheet);
} else {
var styles = `@media print {
body, * { visibility: hidden; }
html, body { overflow: hidden; transform: translateZ(0); }
#slide {
transform: scale(1.0) !important;
}
#wrapper {
transform: scale(1.0) !important;
}
#slide,
#wrapper {
width: 100% !important;
height: 100% !important;
overflow: visible !important;
}
#frame {
overflow: visible !important;
}
.slide-transition-container {
overflow: visible !important;
}
@page {size: A4 landscape;max-height:99%; max-width:99%}
.slide-container, .slide-container * {
visibility: visible !important;
margin-top: 0px !important;
margin-left: 0px !important;
}
#outline-panel {
display: none !important;
}
}
}`
var stylesheet = document.createElement('style');
stylesheet.type = 'text/css';
stylesheet.innerText = styles;
document.head.appendChild(stylesheet);
}

window.print();
}

