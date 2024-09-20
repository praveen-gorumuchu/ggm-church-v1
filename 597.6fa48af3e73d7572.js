"use strict";(self.webpackChunkggm_church=self.webpackChunkggm_church||[]).push([[597],{6597:(Bt,R,l)=>{l.r(R),l.d(R,{BibleModule:()=>Dt});var m=l(177),M=l(7062),G=l(5717),K=l(6464),b=l(7760),e=l(3953),F=l(9553),U=l(3783);let E=(()=>{class i{fontSize=42;constructor(){}zoomIn(){this.fontSize+=2,this.updateFontSize()}zoomOut(){this.fontSize>10&&(this.fontSize-=2,this.updateFontSize())}reset(){this.fontSize=42,this.updateFontSize()}updateFontSize(){const t=document.getElementById("zoom-container");t&&t.setAttribute("style",`font-size: ${this.fontSize}px`)}static \u0275fac=function(o){return new(o||i)};static \u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$=(()=>{class i{zoomService;toggleDrawer=new e.bkB;constructor(t){this.zoomService=t}shortcuts={zoomIn:t=>{t.preventDefault(),this.zoomService.zoomIn()},zoomOut:t=>{t.preventDefault(),this.zoomService.zoomOut()},undo:t=>{},toggleMenu:t=>{t.preventDefault(),this.toggleDrawer.emit()}};onKeydown(t){const{ctrlKey:o,metaKey:n,key:s}=t;!o&&!n||"+"!==s&&"="!==s?(o||n)&&"-"===s?this.shortcuts.zoomOut(t):(o||n)&&"z"===s?this.shortcuts.undo(t):(o||n)&&"m"===s&&this.shortcuts.toggleMenu(t):this.shortcuts.zoomIn(t)}getSelectedTextData(){const t=window.getSelection();if(t&&t.rangeCount>0){const o=t.getRangeAt(0),s=o.endContainer;return{startIndex:this.getElementIndex(o.startContainer),endIndex:this.getElementIndex(s)}}return null}getElementIndex(t){t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);let o=t.parentNode;for(;o&&"P"!==o.nodeName&&(o=(t=o).parentNode,o););return t&&t.parentNode?Array.from(t.parentNode.children).indexOf(t):-1}static \u0275fac=function(o){return new(o||i)(e.KVO(E))};static \u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var B=l(8834),L=l(9183),w=l(5596);const Y=i=>({active:i});function H(i,c){if(1&i){const t=e.RV6();e.j41(0,"li",3)(1,"button",4),e.bIt("click",function(){const n=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.onChapterClick(n))}),e.j41(2,"span"),e.EFF(3),e.k0s()()()}if(2&i){const t=c.$implicit,o=c.index,n=e.XpG();e.R7$(),e.Y8G("ngClass",e.eq3(2,Y,n.isActive(t))),e.R7$(2),e.SpI(" ",o+1," ")}}let Q=(()=>{class i{bibleService;currentBook;currentChapterIndex=1;currentChapter=new e.bkB;isActiveChapter;constructor(t){this.bibleService=t}ngOnInit(){}ngOnChanges(t){this.isActiveChapter=this.currentBook.chapters[this.currentChapterIndex-1]}isActive(t){return this.isActiveChapter.id.toLowerCase()===t.id.toLowerCase()}onChapterClick(t){this.isActiveChapter=t;let o=t.name.match(/\d+$/);this.bibleService.setChapterIndex(o?parseInt(o[0]):1),this.currentChapter.emit(t)}static \u0275fac=function(o){return new(o||i)(e.rXU(F.c))};static \u0275cmp=e.VBU({type:i,selectors:[["app-chapters"]],inputs:{currentBook:"currentBook",currentChapterIndex:"currentChapterIndex"},outputs:{currentChapter:"currentChapter"},features:[e.OA$],decls:5,vars:1,consts:[[1,"chapter-list"],[1,"m-0","p-0"],["class"," book-list",4,"ngFor","ngForOf"],[1,"book-list"],["mat-icon-button","",1,"chapter-num",3,"click","ngClass"]],template:function(o,n){1&o&&(e.j41(0,"section",0)(1,"mat-card")(2,"mat-card-content")(3,"ul",1),e.DNE(4,H,4,4,"li",2),e.k0s()()()()),2&o&&(e.R7$(4),e.Y8G("ngForOf",n.currentBook.chapters))},dependencies:[m.YU,m.Sq,B.iY,w.RN,w.m2],styles:[".chapter-list mat-card{background:#e1e1e1}  .chapter-list mat-card mat-card-content ul{list-style:none;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:stretch;align-content:stretch}  .chapter-list mat-card mat-card-content ul li{padding:0;margin:5px}  .chapter-list mat-card mat-card-content ul li .chapter-num{font-size:14px;font-weight:600}  .chapter-list mat-card mat-card-content ul li .chapter-num.active{background-color:#1c222e;color:#e3e3e3}  .chapter-list mat-card mat-card-content ul li .mat-mdc-icon-button .mat-mdc-button-touch-target{width:28px;height:28px}"]})}return i})();function Z(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",4)(1,"button",5),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onChangeChapter(n.action.PREV))}),e.j41(2,"span",6),e.EFF(3," arrow_back_ios "),e.k0s()()()}2&i&&(e.R7$(),e.Y8G("disabled",!1))}function W(i,c){if(1&i){const t=e.RV6();e.j41(0,"div",7)(1,"button",5),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onChangeChapter(n.action.NEXT))}),e.j41(2,"span",6),e.EFF(3," arrow_forward_ios "),e.k0s()()()}2&i&&(e.R7$(),e.Y8G("disabled",!1))}let J=(()=>{class i{ngZone;changeChapter=new e.bkB;disableNext=!1;disablePrev=!1;action=b.R;showLeftArrow;showRightArrow;constructor(t){this.ngZone=t}ngOnInit(){this.ngZone.runOutsideAngular(()=>{window.addEventListener("keydown",this.handleKeyDown.bind(this))})}onMouseMove(t){const{clientX:o}=t,n=window.innerWidth;this.showLeftArrow=o<60,this.showRightArrow=o>n-60}handleKeyDown(t){"ArrowRight"===t.key?this.ngZone.run(()=>{this.onChangeChapter(b.R.NEXT)}):"ArrowLeft"===t.key&&this.ngZone.run(()=>{this.onChangeChapter(b.R.PREV)})}onChangeChapter(t){this.changeChapter.emit(t)}ngOnDestroy(){window.removeEventListener("keydown",this.handleKeyDown.bind(this))}static \u0275fac=function(o){return new(o||i)(e.rXU(e.SKi))};static \u0275cmp=e.VBU({type:i,selectors:[["app-quick-access"]],hostBindings:function(o,n){1&o&&e.bIt("mousemove",function(a){return n.onMouseMove(a)},!1,e.EBC)},inputs:{disableNext:"disableNext",disablePrev:"disablePrev"},outputs:{changeChapter:"changeChapter"},decls:4,vars:2,consts:[[1,"quick-access",3,"mousemove"],[1,"navigation"],["class","previous-chapter",4,"ngIf"],["class","next-chapter",4,"ngIf"],[1,"previous-chapter"],["mat-icon-button","",3,"click","disabled"],[1,"material-symbols-outlined"],[1,"next-chapter"]],template:function(o,n){1&o&&(e.j41(0,"section",0),e.bIt("mousemove",function(a){return n.onMouseMove(a)}),e.j41(1,"section",1),e.DNE(2,Z,4,1,"div",2)(3,W,4,1,"div",3),e.k0s()()),2&o&&(e.R7$(2),e.Y8G("ngIf",n.showLeftArrow),e.R7$(),e.Y8G("ngIf",n.showRightArrow))},dependencies:[m.bT,B.iY],styles:[".quick-access .previous-chapter button,   .quick-access .next-chapter button,   .quick-access .bottom-acceess button{width:64px;height:64px;padding:0}  .quick-access .previous-chapter .material-symbols-outlined,   .quick-access .next-chapter .material-symbols-outlined,   .quick-access .bottom-acceess .material-symbols-outlined{color:#fff;font-size:32px;padding:0}  .quick-access .previous-chapter{position:fixed;top:50%;transform:translateY(-50%);left:15px}  .quick-access .next-chapter{position:fixed;top:50%;transform:translateY(-50%);right:15px}  .quick-access .bottom-acceess{position:fixed;bottom:25px;right:25px}  .quick-access .bottom-acceess button{background-color:tan}  .quick-access .bottom-acceess button .material-symbols-outlined{color:#1c222e;font-weight:600}  .mat-mdc-menu-panel{min-width:220px!important;max-width:340px!important;height:240px}"]})}return i})();function q(i,c){1&i&&e.nrm(0,"mat-progress-spinner",2)}function tt(i,c){if(1&i&&(e.qex(0),e.j41(1,"p",20)(2,"span",21),e.EFF(3),e.k0s(),e.j41(4,"span",22),e.EFF(5),e.k0s()(),e.bVm()),2&i){const t=c.$implicit;e.R7$(3),e.SpI(" ",t.id,". "),e.R7$(2),e.SpI(" ",t.des," ")}}function et(i,c){if(1&i){const t=e.RV6();e.j41(0,"section",18),e.bIt("mouseup",function(){e.eBV(t);const n=e.XpG(2);return e.Njj(n.onMouseUp())}),e.DNE(1,tt,6,2,"ng-container",19),e.k0s()}if(2&i){const t=e.XpG(2);e.R7$(),e.Y8G("ngForOf",t.currentChapter.verses)}}function ot(i,c){if(1&i){const t=e.RV6();e.j41(0,"section",3),e.bIt("scroll",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.onScroll(n))}),e.j41(1,"div",4)(2,"div",5)(3,"div",6),e.nrm(4,"div",7),e.k0s()(),e.j41(5,"section",8)(6,"div",9)(7,"button",10),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.zoom("+"))}),e.j41(8,"span",11),e.EFF(9," zoom_in "),e.k0s()(),e.j41(10,"button",10),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.zoom("-"))}),e.j41(11,"span",11),e.EFF(12," zoom_out "),e.k0s()(),e.j41(13,"button",10),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.zoom(""))}),e.j41(14,"span",11),e.EFF(15," restart_alt "),e.k0s()()(),e.j41(16,"app-chapters",12),e.bIt("currentChapter",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.getCurrentChapter(n))}),e.k0s()(),e.j41(17,"section",13)(18,"section",14)(19,"h2",15),e.EFF(20),e.k0s()(),e.DNE(21,et,2,1,"section",16),e.k0s()(),e.j41(22,"app-quick-access",17),e.bIt("changeChapter",function(n){e.eBV(t);const s=e.XpG();return e.Njj(s.changeChapter(n))}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(16),e.Y8G("currentBook",t.currentBook)("currentChapterIndex",t.currentChapterIndex),e.R7$(4),e.SpI("\u0c05\u0c27\u0c4d\u0c2f\u0c3e\u0c2f\u0c02: - ",t.currentChapterIndex," "),e.R7$(),e.Y8G("ngIf",t.currentChapter&&t.currentChapter.verses.length>0),e.R7$(),e.Y8G("disableNext",t.currentChapterIndex>=t.currentBook.chapters.length)("disablePrev",t.currentChapterIndex-1<=0)}}const nt=[{path:"",pathMatch:"full",redirectTo:"chapter"},{path:"chapter",component:(()=>{class i{bibleService;sharedService;zoomService;keyboardShortcutsService;currentBook;type=G.w;currentChapterIndex=1;currentChapter;subscriptions=[];isLoading;constructor(t,o,n,s){this.bibleService=t,this.sharedService=o,this.zoomService=n,this.keyboardShortcutsService=s,this.isLoading=!0,this.bibleService.getBook(K.g.BOOK_1)}ngOnInit(){this.getBibleBooks()}ngAfterViewInit(){}onScroll(t){const o=t.target.scrollTop,n=document.getElementById("app-header");n&&(o>320?(n.classList.add("sticky"),this.bibleService.setBibleState({showBook:!0,showChapter:!0,showVerses:!0})):(n.classList.remove("sticky"),this.bibleService.setBibleState({showBook:!0,showChapter:!1,showVerses:!1})))}zoom(t){"+"===t?this.zoomService.zoomIn():"-"===t?this.zoomService.zoomOut():this.zoomService.reset()}getBibleBooks(){this.subscriptions.push(this.bibleService.currentBookObsCast.subscribe(t=>{this.isLoading=!1,this.currentBook=t,this.currentChapter=this.currentBook.chapters[0],this.bibleService.setBibleState({showBook:!0})},()=>this.isLoading=!1))}changeChapter(t){switch(t){case b.R.NEXT:this.currentChapterIndex>=this.currentBook.chapters.length?this.callToNewBook(t):(this.currentChapter=this.currentBook.chapters[this.currentChapterIndex],this.currentChapterIndex++);break;case b.R.PREV:this.currentChapterIndex>1?(this.currentChapterIndex--,this.currentChapter=this.currentBook.chapters[this.currentChapterIndex-1]):this.callToNewBook(t)}this.bibleService.setChapterIndex(this.currentChapterIndex)}callToNewBook(t){this.resetDefaults(),this.isLoading=!0;const o=this.sharedService.getBookId(this.currentBook.id,t);this.bibleService.getBook(o)}resetDefaults(){this.currentChapterIndex=1,this.bibleService.setChapterIndex(1)}getCurrentChapter(t){this.currentChapter=t,this.bibleService.setBibleState({showBook:!0,showChapter:!1})}onMouseUp(){const t=this.keyboardShortcutsService.getSelectedTextData();if(t){const{startIndex:o,endIndex:n}=t;if(o>=0&&n>=0){const s=Math.min(o,n),a=Math.max(o,n),r=this.currentChapter.verses.slice(s,a+1);console.log("Selected Verses:",r)}else console.warn("Invalid indices")}else console.warn("No text selected")}onKeydown(t){!t.ctrlKey&&!t.metaKey||"+"!==t.key&&"="!==t.key?(t.ctrlKey||t.metaKey)&&"-"===t.key&&(t.preventDefault(),this.zoomService.zoomOut()):(t.preventDefault(),this.zoomService.zoomIn())}ngOnDestroy(){this.bibleService.resetDeafualts(),this.sharedService.destroy(this.subscriptions),window.removeEventListener("keydown",this.onKeydown.bind(this))}static \u0275fac=function(o){return new(o||i)(e.rXU(F.c),e.rXU(U.d),e.rXU(E),e.rXU($))};static \u0275cmp=e.VBU({type:i,selectors:[["app-main"]],hostBindings:function(o,n){1&o&&e.bIt("keydown",function(a){return n.onKeydown(a)},!1,e.tSv)},decls:2,vars:2,consts:[["mode","indeterminate","value","50",4,"ngIf"],["class","main-section mb-5 pb-5",3,"scroll",4,"ngIf"],["mode","indeterminate","value","50"],[1,"main-section","mb-5","pb-5",3,"scroll"],[1,"container","pb-5"],[1,"title"],[1,"row"],[1,"col"],[1,"my-5"],[1,"zoom-features","d-flex","justify-content-end","mb-3"],["mat-icon-button","",3,"click"],[1,"material-symbols-outlined"],[3,"currentChapter","currentBook","currentChapterIndex"],[1,""],[1,"mt-5"],[1,"text-center","chapter-num"],["class","verse-sec","id","zoom-container",3,"mouseup",4,"ngIf"],[3,"changeChapter","disableNext","disablePrev"],["id","zoom-container",1,"verse-sec",3,"mouseup"],[4,"ngFor","ngForOf"],[1,"verses","d-flex"],[1,"verse-index"],[1,"verse-val"]],template:function(o,n){1&o&&e.DNE(0,q,1,0,"mat-progress-spinner",0)(1,ot,23,6,"section",1),2&o&&(e.Y8G("ngIf",n.isLoading),e.R7$(),e.Y8G("ngIf",!n.isLoading))},dependencies:[m.Sq,m.bT,B.iY,L.LG,Q,J],styles:[".verse-sec[_ngcontent-%COMP%]{font-size:42px}.verse-sec[_ngcontent-%COMP%]   .verses[_ngcontent-%COMP%]{font-size:inherit;font-weight:500;margin:0;line-height:1.6;color:#ccc}.verse-sec[_ngcontent-%COMP%]   .verses[_ngcontent-%COMP%]   .verse-index[_ngcontent-%COMP%]{margin-right:10px}.chapter-num[_ngcontent-%COMP%]{font-size:32px;font-weight:500;color:#dcdcdc}.chapter-name[_ngcontent-%COMP%]{font-size:40px;color:#dcdcdc}.main-section[_ngcontent-%COMP%]{height:80vh;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.zoom-features[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}.zoom-features[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:#b3b3b3}"]})}return i})()}];let it=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[M.iI.forChild(nt),M.iI]})}return i})();var st=l(438),f=l(9888),d=l(7987),y=l(6860),u=l(6939),k=l(7336),S=l(1413),at=l(9030),rt=l(7673),j=l(8203),ct=l(9172);function lt(i,c){}class x{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let z=(()=>{class i extends u.lb{constructor(t,o,n,s,a,r,p,v){super(),this._elementRef=t,this._focusTrapFactory=o,this._config=s,this._interactivityChecker=a,this._ngZone=r,this._overlayRef=p,this._focusMonitor=v,this._platform=(0,e.WQX)(y.OD),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=(0,e.WQX)(e.gRc),this._injector=(0,e.WQX)(e.zZn),this._isDestroyed=!1,this.attachDomPortal=T=>{this._portalOutlet.hasAttached();const C=this._portalOutlet.attachDomPortal(T);return this._contentAttached(),C},this._document=n,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){const o=this._ariaLabelledByQueue.indexOf(t);o>-1&&(this._ariaLabelledByQueue.splice(o,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const o=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),o}attachTemplatePortal(t){this._portalOutlet.hasAttached();const o=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),o}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,o){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(o)}_focusByCssSelector(t,o){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,o)}_trapFocus(){this._isDestroyed||(0,e.mal)(()=>{const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}},{injector:this._injector})}_restoreFocus(){const t=this._config.restoreFocus;let o=null;if("string"==typeof t?o=this._document.querySelector(t):"boolean"==typeof t?o=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(o=t),this._config.restoreFocus&&o&&"function"==typeof o.focus){const n=(0,y.vc)(),s=this._elementRef.nativeElement;(!n||n===this._document.body||n===s||s.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(o,this._closeInteractionType),this._closeInteractionType=null):o.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,o=(0,y.vc)();return t===o||t.contains(o)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,y.vc)()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#t=this.\u0275fac=function(o){return new(o||i)(e.rXU(e.aKT),e.rXU(f.GX),e.rXU(m.qQ,8),e.rXU(x),e.rXU(f.Z7),e.rXU(e.SKi),e.rXU(d.yY),e.rXU(f.FN))};static#e=this.\u0275cmp=e.VBU({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(o,n){if(1&o&&e.GBs(u.I3,7),2&o){let s;e.mGM(s=e.lsd())&&(n._portalOutlet=s.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(o,n){2&o&&e.BMQ("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},standalone:!0,features:[e.Vt3,e.aNF],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(o,n){1&o&&e.DNE(0,lt,0,0,"ng-template",0)},dependencies:[u.I3],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return i})();class I{constructor(c,t){this.overlayRef=c,this.config=t,this.closed=new S.B,this.disableClose=t.disableClose,this.backdropClick=c.backdropClick(),this.keydownEvents=c.keydownEvents(),this.outsidePointerEvents=c.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(o=>{o.keyCode===k._f&&!this.disableClose&&!(0,k.rp)(o)&&(o.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=c.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(c,t){if(this.containerInstance){const o=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),o.next(c),o.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(c="",t=""){return this.overlayRef.updateSize({width:c,height:t}),this}addPanelClass(c){return this.overlayRef.addPanelClass(c),this}removePanelClass(c){return this.overlayRef.removePanelClass(c),this}}const N=new e.nKC("DialogScrollStrategy",{providedIn:"root",factory:()=>{const i=(0,e.WQX)(d.hJ);return()=>i.scrollStrategies.block()}}),ht=new e.nKC("DialogData"),dt=new e.nKC("DefaultDialogConfig");let pt=0,V=(()=>{class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,o,n,s,a,r){this._overlay=t,this._injector=o,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=a,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new S.B,this._afterOpenedAtThisLevel=new S.B,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,at.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,ct.Z)(void 0))),this._scrollStrategy=r}open(t,o){(o={...this._defaultOptions||new x,...o}).id=o.id||"cdk-dialog-"+pt++,o.id&&this.getDialogById(o.id);const s=this._getOverlayConfig(o),a=this._overlay.create(s),r=new I(a,o),p=this._attachContainer(a,r,o);return r.containerInstance=p,this._attachDialogContent(t,r,p,o),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){O(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(o=>o.id===t)}ngOnDestroy(){O(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),O(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const o=new d.rR({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(o.backdropClass=t.backdropClass),o}_attachContainer(t,o,n){const s=n.injector||n.viewContainerRef?.injector,a=[{provide:x,useValue:n},{provide:I,useValue:o},{provide:d.yY,useValue:t}];let r;n.container?"function"==typeof n.container?r=n.container:(r=n.container.type,a.push(...n.container.providers(n))):r=z;const p=new u.A8(r,n.viewContainerRef,e.zZn.create({parent:s||this._injector,providers:a}),n.componentFactoryResolver);return t.attach(p).instance}_attachDialogContent(t,o,n,s){if(t instanceof e.C4Q){const a=this._createInjector(s,o,n,void 0);let r={$implicit:s.data,dialogRef:o};s.templateContext&&(r={...r,..."function"==typeof s.templateContext?s.templateContext():s.templateContext}),n.attachTemplatePortal(new u.VA(t,null,r,a))}else{const a=this._createInjector(s,o,n,this._injector),r=n.attachComponentPortal(new u.A8(t,s.viewContainerRef,a,s.componentFactoryResolver));o.componentRef=r,o.componentInstance=r.instance}}_createInjector(t,o,n,s){const a=t.injector||t.viewContainerRef?.injector,r=[{provide:ht,useValue:t.data},{provide:I,useValue:o}];return t.providers&&("function"==typeof t.providers?r.push(...t.providers(o,t,n)):r.push(...t.providers)),t.direction&&(!a||!a.get(j.dS,null,{optional:!0}))&&r.push({provide:j.dS,useValue:{value:t.direction,change:(0,rt.of)()}}),e.zZn.create({parent:a||s,providers:r})}_removeOpenDialog(t,o){const n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,a)=>{s?a.setAttribute("aria-hidden",s):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),o&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const o=t.parentElement.children;for(let n=o.length-1;n>-1;n--){const s=o[n];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#t=this.\u0275fac=function(o){return new(o||i)(e.KVO(d.hJ),e.KVO(e.zZn),e.KVO(dt,8),e.KVO(i,12),e.KVO(d.Sf),e.KVO(N))};static#e=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function O(i,c){let t=i.length;for(;t--;)c(i[t])}let mt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=e.$C({type:i});static#o=this.\u0275inj=e.G2t({providers:[V],imports:[d.z_,u.jc,f.Pd,u.jc]})}return i})();var _=l(6600),g=l(9327),h=l(9969),ft=l(7786),D=l(5964),A=l(6697);function gt(i,c){}const vt={bottomSheetState:(0,h.hZ)("state",[(0,h.wk)("void, hidden",(0,h.iF)({transform:"translateY(100%)"})),(0,h.wk)("visible",(0,h.iF)({transform:"translateY(0%)"})),(0,h.kY)("visible => void, visible => hidden",(0,h.Os)([(0,h.i0)(`${_.ed.COMPLEX} ${_.r5.ACCELERATION_CURVE}`),(0,h.P)("@*",(0,h.MA)(),{optional:!0})])),(0,h.kY)("void => visible",(0,h.Os)([(0,h.i0)(`${_.ed.EXITING} ${_.r5.DECELERATION_CURVE}`),(0,h.P)("@*",(0,h.MA)(),{optional:!0})]))])};let _t=(()=>{class i extends z{constructor(t,o,n,s,a,r,p,v,T){super(t,o,n,s,a,r,p,T),this._animationState="void",this._animationStateChanged=new e.bkB,this._breakpointSubscription=v.observe([g.Rp.Medium,g.Rp.Large,g.Rp.XLarge]).subscribe(()=>{const C=this._elementRef.nativeElement.classList;C.toggle("mat-bottom-sheet-container-medium",v.isMatched(g.Rp.Medium)),C.toggle("mat-bottom-sheet-container-large",v.isMatched(g.Rp.Large)),C.toggle("mat-bottom-sheet-container-xlarge",v.isMatched(g.Rp.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges())}exit(){this._destroyed||(this._animationState="hidden",this._changeDetectorRef.markForCheck())}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_onAnimationDone(t){"visible"===t.toState&&this._trapFocus(),this._animationStateChanged.emit(t)}_onAnimationStart(t){this._animationStateChanged.emit(t)}_captureInitialFocus(){}static#t=this.\u0275fac=function(o){return new(o||i)(e.rXU(e.aKT),e.rXU(f.GX),e.rXU(m.qQ,8),e.rXU(x),e.rXU(f.Z7),e.rXU(e.SKi),e.rXU(d.yY),e.rXU(g.QP),e.rXU(f.FN))};static#e=this.\u0275cmp=e.VBU({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:4,hostBindings:function(o,n){1&o&&e.Kam("@state.start",function(a){return n._onAnimationStart(a)})("@state.done",function(a){return n._onAnimationDone(a)}),2&o&&(e.zvX("@state",n._animationState),e.BMQ("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-label",n._config.ariaLabel))},standalone:!0,features:[e.Vt3,e.aNF],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(o,n){1&o&&e.DNE(0,gt,0,0,"ng-template",0)},dependencies:[u.I3],styles:[".mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;background:var(--mat-bottom-sheet-container-background-color, var(--mat-app-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-app-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-app-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-app-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-app-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-app-body-large-tracking))}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape);border-top-right-radius:var(--mat-bottom-sheet-container-shape)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],encapsulation:2,data:{animation:[vt.bottomSheetState]}})}return i})();const bt=new e.nKC("MatBottomSheetData");class Ct{constructor(){this.data=null,this.hasBackdrop=!0,this.disableClose=!1,this.ariaLabel=null,this.ariaModal=!0,this.closeOnNavigation=!0,this.autoFocus="dialog",this.restoreFocus=!0}}class X{get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}constructor(c,t,o){this._ref=c,this._afterOpened=new S.B,this.containerInstance=o,this.disableClose=t.disableClose,o._animationStateChanged.pipe((0,D.p)(n=>"done"===n.phaseName&&"visible"===n.toState),(0,A.s)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),o._animationStateChanged.pipe((0,D.p)(n=>"done"===n.phaseName&&"hidden"===n.toState),(0,A.s)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),c.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),(0,ft.h)(this.backdropClick(),this.keydownEvents().pipe((0,D.p)(n=>n.keyCode===k._f))).subscribe(n=>{!this.disableClose&&("keydown"!==n.type||!(0,k.rp)(n))&&(n.preventDefault(),this.dismiss())})}dismiss(c){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe((0,D.p)(t=>"start"===t.phaseName),(0,A.s)(1)).subscribe(t=>{this._closeFallbackTimeout=setTimeout(()=>{this._ref.close(this._result)},t.totalTime+100),this._ref.overlayRef.detachBackdrop()}),this._result=c,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}}const yt=new e.nKC("mat-bottom-sheet-default-options");let kt=(()=>{class i{get _openedBottomSheetRef(){const t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}constructor(t,o,n,s){this._overlay=t,this._parentBottomSheet=n,this._defaultOptions=s,this._bottomSheetRefAtThisLevel=null,this._dialog=o.get(V)}open(t,o){const n={...this._defaultOptions||new Ct,...o};let s;return this._dialog.open(t,{...n,disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:_t,scrollStrategy:n.scrollStrategy||this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().global().centerHorizontally().bottom("0"),templateContext:()=>({bottomSheetRef:s}),providers:(a,r,p)=>(s=new X(a,n,p),[{provide:X,useValue:s},{provide:bt,useValue:n.data}])}),s.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===s&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>s.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):s.containerInstance.enter(),this._openedBottomSheetRef=s,s}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static#t=this.\u0275fac=function(o){return new(o||i)(e.KVO(d.hJ),e.KVO(e.zZn),e.KVO(i,12),e.KVO(yt,8))};static#e=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),St=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=e.$C({type:i});static#o=this.\u0275inj=e.G2t({providers:[kt],imports:[mt,_.yE,u.jc,_.yE]})}return i})();var P=l(9417);const xt=[L.D6,St,w.Hu];let Dt=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[m.MD,it,st.G,P.YN,P.X1,xt]})}return i})()}}]);