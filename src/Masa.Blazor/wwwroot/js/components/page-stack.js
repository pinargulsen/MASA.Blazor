class e{constructor(e){this.handle=e,document.addEventListener("click",this._onDocumentClick)}_onDocumentClick(e){const t=e.target;if("A"!==t.tagName)return;const n=t.getAttribute("href");if(!n)return;let c=t.getAttribute("data-page-stack-strategy");c=c?c.toLowerCase():null,""===c||"true"===c||"push"===c?this.handle.invokeMethodAsync("Push",n):"replace"===c?this.handle.invokeMethodAsync("replace",n):"popAndReplace"===c&&this.handle.invokeMethodAsync("PopAndReplace",n)}dispose(){document.removeEventListener("click",this._onDocumentClick)}}function t(t){return new e(t)}export{t as init};
//# sourceMappingURL=page-stack.js.map