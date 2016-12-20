
require("./js/compatibility.js");
require("./js/l10n.js");
require("./js/pdf.js");
window.PDFJS.workerSrc = require("./js/pdf.worker.js");
// Weird stuff that just works. This serves to demonstrate that:
// (A) Martin doesn't understand PDFJS, and 
// (B) Martin doesn't understand node.require()
window.pdfjsDistBuildPdf = window.PDFJS;
window.PDFJS.PDFJS = window.PDFJS;
require("./js/viewer.js");
