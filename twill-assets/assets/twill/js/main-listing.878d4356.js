(function(){"use strict";var t={7766:function(t,e,a){var n=a(538),s=a(3511),l=a(4622),i=a(3145),o=a(2357),r=(a(1138),a(2405)),u=a(4670),d=a(2835),c=a(9341),h=a(629),b=a(6809),m=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"datatable",attrs:{"data-sticky-id":"thead","data-sticky-offset":"0"}},[e("div",{staticClass:"datatable__sticky",attrs:{"data-sticky-top":"thead"}},[e("div",{staticClass:"datatable__stickyHead",attrs:{"data-sticky-target":"thead"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"datatable__stickyInner"},[e("div",{staticClass:"datatable__setup"},[t.hideableColumns.length?e("a17-dropdown",{ref:"setupDropdown",staticClass:"datatable__setupDropdown",attrs:{position:"bottom-right",title:t.$trans("listing.columns.show"),clickable:!0,offset:-10}},[e("button",{staticClass:"datatable__setupButton",on:{click:function(e){return t.$refs.setupDropdown.toggle()}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"preferences"}})]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("a17-checkboxgroup",{attrs:{name:"visibleColumns",options:t.checkboxesColumns,selected:t.visibleColumnsNames,min:2},on:{change:t.updateActiveColumns}})],1)]):t._e()],1),e("div",{staticClass:"datatable__stickyTable"},[e("a17-table",{attrs:{columnsWidth:t.columnsWidth,xScroll:t.xScroll},on:{scroll:t.updateScroll}},[e("thead",[e("a17-tablehead",{attrs:{columns:t.visibleColumns},on:{sortColumn:t.updateSort}})],1)])],1)])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"datatable__table",class:t.isEmptyDatable},[e("a17-table",{attrs:{xScroll:t.xScroll},on:{scroll:t.updateScroll}},[e("thead",[e("a17-tablehead",{ref:"thead",attrs:{columns:t.visibleColumns}})],1),t.draggable?[e("draggable",{staticClass:"datatable__drag",attrs:{tag:"tbody",options:t.dragOptions},model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}},[t._l(t.rows,(function(a,n){return[e("a17-tablerow",{key:a.id,attrs:{row:a,index:n,columns:t.visibleColumns}})]}))],2)]:e("tbody",[t._l(t.rows,(function(a,n){return[e("a17-tablerow",{key:a.id,attrs:{row:a,index:n,columns:t.visibleColumns}})]}))],2)],2),t.rows.length<=0?[e("div",{staticClass:"datatable__empty"},[e("h4",[t._v(t._s(t.emptyMessage))])])]:t._e(),t.maxPage>1||t.initialMaxPage>t.maxPage&&!t.isEmpty?e("a17-paginate",{attrs:{max:t.maxPage,value:t.page,offset:t.offset,availableOffsets:[t.initialOffset,3*t.initialOffset,6*t.initialOffset]},on:{changePage:t.updatePage,changeOffset:t.updateOffset}}):t._e()],2)]),t.loading?e("a17-spinner",[t._v("Loading…")]):t._e()],1)},f=[],p=a(3279),_=a.n(p),g=a(9980),v=a.n(g),A=a(9082),k=a(4690),D=a(2992),y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table__scroller",on:{scroll:t.updateScroll}},[e("table",{staticClass:"table",class:{"table--sized":t.columnsWidth.length}},[t.columnsWidth.length?e("colgroup",t._l(t.columnsWidth,(function(a,n){return e("col",{key:n,style:t.colWidths[n]})})),0):t._e(),t._t("default")],2)])},T=[],w={name:"A17Table",props:{xScroll:{type:Number,default:1},columnsWidth:{type:Array,default:function(){return[]}}},data:function(){return{currentScroll:this.xScroll}},computed:{colWidths:function(){return this.columnsWidth.map((function(t){return{width:t?t+"px":""}}))}},watch:{xScroll:function(t){this.currentScroll!==t&&(this.currentScroll=t,this.$el.scrollLeft=t)}},methods:{updateScroll:function(){const t=this.$el.scrollLeft;this.currentScroll!==t&&(this.currentScroll=t,this.$emit("scroll",t))}}},E=w,C=a(1001),P=(0,C.Z)(E,y,T,!1,null,"87d7c0f6",null),L=P.exports,S=function(){var t=this,e=t._self._c;return e("tr",{staticClass:"tablehead"},[t._l(t.columns,(function(a){return e("td",{key:a.name,staticClass:"tablehead__cell f--small",class:t.cellClasses(a),on:{click:function(e){return t.sortColumn(a)}}},[t.isDisplayedColumn(a)?e("span",[t._v(t._s(a.label)+" "),e("span",{staticClass:"tablehead__arrow"},[t._v("↓")])]):t._e(),"bulk"===a.name?e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleBulkSelect()}}},[e("span",[e("a17-checkbox",{class:{"checkbox--minus":t.checkboxMinus},attrs:{name:"bulkAll",value:1,initialValue:t.bulkValue}})],1)]):t._e()])})),e("td",{staticClass:"tablehead__spacer"},[t._v(" ")])],2)},$=[],x={name:"A17Tablehead",props:{sortable:{type:Boolean,default:!0},columns:{type:Array,default:function(){return[]}}},data:function(){return{currentSort:"name",currentDirection:"asc"}},computed:{bulkValue:function(){return this.bulkIds.length?1:0},checkboxMinus:function(){return this.bulkIds.length>0&&this.bulkIds.length!==this.dataIds.length},...(0,h.rn)({bulkIds:t=>t.datatable.bulk,sortKey:t=>t.datatable.sortKey,sortDir:t=>t.datatable.sortDir}),...(0,h.Se)(["dataIds"])},methods:{cellClasses:function(t){return["featured"===t.name||"published"===t.name?"tablehead__cell--icon":"","thumbnail"===t.name?"tablehead__cell--thumb":"","thumbnail"===t.name&&t.variation&&"rounded"===t.variation?"tablehead__cell--thumb-rounded":"","draggable"===t.name?"tablehead__cell--draggable":"","nested"===t.name?"tablehead__cell--nested":"","bulk"===t.name?"tablehead__cell--bulk":"",t.sortable&&this.sortable?"tablehead__cell--sortable":"",t.name===this.sortKey?"tablehead__cell--sorted":"",t.name===this.sortKey&&this.sortDir?"tablehead__cell--sorted".concat(this.sortDir):"",!0===t.shrink?"tablehead__cell--shrink":""]},isDisplayedColumn:function(t){return"draggable"!==t.name&&"featured"!==t.name&&"nested"!==t.name&&"bulk"!==t.name&&"published"!==t.name&&"thumbnail"!==t.name},sortColumn:function(t){t.sortable&&this.sortable&&this.$emit("sortColumn",t)},toggleBulkSelect:function(){const t=this.bulkIds.length?[]:this.dataIds;this.$store.commit(l.yY.REPLACE_DATATABLE_BULK,t)}}},I=x,O=(0,C.Z)(I,S,$,!1,null,"6b55db17",null),U=O.exports,B=function(){var t=this,e=t._self._c;return e("tr",{staticClass:"tablerow"},[t._l(t.columns,(function(a){return e("td",{key:a.name,staticClass:"tablecell",class:t.cellClasses(a,"tablecell"),style:t.nestedStyle(a)},[t.isSpecificColumn(a)?[e(t.currentComponent(a),t._b({tag:"component",attrs:{row:t.row},on:{update:t.tableCellUpdate,editInPlace:t.editInPlace}},"component",t.currentComponentProps(a),!1))]:e("a17-table-cell-generic",t._b({attrs:{row:t.row},on:{editInPlace:t.editInPlace,update:t.tableCellUpdate}},"a17-table-cell-generic",t.currentComponentProps(a),!1))],2)})),e("td",{staticClass:"tablecell tablecell--spacer"},[t._v(" ")]),e("td",{staticClass:"tablecell tablecell--sticky"},[t.row.edit?e("a17-table-cell-actions",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate,restoreRow:t.restoreRow,destroyRow:t.destroyRow,deleteRow:t.deleteRow,duplicateRow:t.duplicateRow}},"a17-table-cell-actions",t.currentComponentProps(),!1)):t._e()],1)],2)},R=[],M=a(1095),Z={name:"A17Tablerow",mixins:[k.xY],components:{...M.ZP},props:{draggable:{type:Boolean,default:!1},nestedDepth:{type:Number,default:0},rowType:{type:String,default:""}},computed:{nestedOffset(){return this.columns.find((t=>"draggable"===t.name))?10:0}},methods:{nestedStyle(t){return this.columns.find((t=>"nested"===t.name))&&"draggable"===t.name?{"webkit-transform":"translateX(-"+80*this.nestedDepth+"px)",transform:"translateX(-"+80*this.nestedDepth+"px)"}:""}}},F=Z,Y=(0,C.Z)(F,B,R,!1,null,"de97889a",null),N=Y.exports,W={name:"A17Datatable",components:{"a17-table":L,"a17-tablehead":U,"a17-tablerow":N,"a17-paginate":D.Z,"a17-spinner":A.Z,draggable:v()},mixins:[k.BN,k.tD],data:function(){return{handle:".tablecell__handle",reorderable:!this.draggable,xScroll:0,columnsWidth:[]}},computed:{checkboxesColumns:function(){const t=[];return this.hideableColumns.length&&this.hideableColumns.forEach((function(e){t.push({value:e.name,label:e.label})})),t},...(0,h.rn)({page:t=>t.datatable.page,offset:t=>t.datatable.offset,maxPage:t=>t.datatable.maxPage,initialOffset:t=>t.datatable.defaultOffset,initialMaxPage:t=>t.datatable.defaultMaxPage,loading:t=>t.datatable.loading})},methods:{getColumnWidth:function(){const t=this,e=[],a=t.$refs.thead.$el.children;for(let n=0;n<a.length;n++)e.push(a[n].offsetWidth);t.columnsWidth=e},updateScroll:function(t){this.xScroll=t},resize:_()((function(){this.getColumnWidth()}),100),initEvents:function(){const t=this;window.addEventListener("resize",(()=>t.resize())),t.resize()},disposeEvents:function(){const t=this;window.removeEventListener("resize",t.resize())},updateSort:function(t){t.sortable&&(this.reorderable&&(this.reorderable=!1,this.$store.commit(l.yY.REMOVE_DATATABLE_COLUMN,"draggable")),this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.yY.UPDATE_DATATABLE_SORT,t),this.$store.dispatch(i.ZP.GET_DATATABLE))},updateOffset:function(t){this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.yY.UPDATE_DATATABLE_OFFSET,t),this.$store.dispatch(i.ZP.GET_DATATABLE)},updatePage:function(t){t!==this.page&&(this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,t),this.$store.dispatch(i.ZP.GET_DATATABLE))},updateActiveColumns:function(t){this.$store.commit(l.yY.UPDATE_DATATABLE_VISIBLITY,t),this.$nextTick((function(){this.getColumnWidth()})),this.$store.dispatch(i.ZP.GET_DATATABLE)}},watch:{loading:function(){this.$nextTick((function(){this.getColumnWidth()}))}},beforeMount:function(){function t(t){return"bulk"===t.name}function e(t){return"draggable"===t.name}this.bulkeditable&&(this.columns.find(t)||this.$store.commit(l.yY.ADD_DATATABLE_COLUMN,{index:0,data:{name:"bulk",label:"",visible:!0,optional:!1,sortable:!1}})),this.draggable&&(this.columns.find(e)||this.$store.commit(l.yY.ADD_DATATABLE_COLUMN,{index:0,data:{name:"draggable",label:"",visible:!0,optional:!1,sortable:!1}}))},mounted:function(){this.initEvents()},beforeDestroy:function(){this.disposeEvents()}},K=W,G=(0,C.Z)(K,m,f,!1,null,"2393d05f",null),j=G.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nested-datatable"},[e("div",{staticClass:"container"},[e("div",{staticClass:"datatable__table"},[e("a17-table",[e("thead",[e("a17-tablehead",{ref:"thead",attrs:{columns:t.visibleColumns}})],1)])],1)]),e("div",{staticClass:"container"},[e("div",{staticClass:"nested-datatable__table"},[e("a17-nested-list",{attrs:{nested:!0,maxDepth:t.maxDepth,draggable:t.draggable}})],1)])])},z=[],H=function(){var t=this,e=t._self._c;return e("draggable",{staticClass:"nested__dropArea",class:t.nestedDropAreaClasses,attrs:{options:t.draggableOptions,tag:"ul","component-data":t.draggableGetComponentData},model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}},t._l(t.rows,(function(a,n){return e("li",{key:t.depth+"-"+a.id,staticClass:"nested-datatable__item",class:t.haveChildren(a.children)},[e("a17-nested-item",{attrs:{index:n,row:a,columns:t.columns}}),a.children&&t.depth<t.maxDepth?e("a17-nested-list",{attrs:{maxDepth:t.maxDepth,depth:t.depth+1,parentId:a.id,items:a.children,nested:!0,draggable:!0}}):t._e()],1)})),0)},X=[],q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nested-item"},[t._l(t.columns,(function(a){return e("span",{key:a.name,staticClass:"nested-item__cell",class:t.cellClasses(a,"nested-item__cell")},[t.isSpecificColumn(a)?[e(t.currentComponent(a),t._b({tag:"component",on:{update:t.tableCellUpdate,editInPlace:t.editInPlace}},"component",t.currentComponentProps(a),!1))]:e("a17-table-cell-generic",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate}},"a17-table-cell-generic",t.currentComponentProps(a),!1))],2)})),e("span",{staticClass:"nested-item__cell nested-item__cell--actions"},[e("a17-table-cell-actions",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate,restoreRow:t.restoreRow,deleteRow:t.deleteRow,destroyRow:t.destroyRow,duplicateRow:t.duplicateRow}},"a17-table-cell-actions",t.currentComponentProps(),!1))],1)],2)},J=[],Q={name:"A17-nested-item",mixins:[k.xY],components:{...M.ZP}},tt=Q,et=(0,C.Z)(tt,q,J,!1,null,"b06d7158",null),at=et.exports,nt={name:"a17-nested-list",components:{"a17-nested-item":at,draggable:v()},mixins:[k.BN,k.tD,k.KS],props:{index:{type:Number,default:0},items:{type:Array,default:()=>[]}},data:function(){return{handle:".tablecell__handle"}},computed:{styleDepth:function(){return{marginLeft:0===this.depth?"0px":"60px"}},rows:{get(){return this.parentId>-1?this.items:this.$store.state.datatable.data},set(t){const e={parentId:this.parentId,val:t},a=this.rows.length!==e.val.length;this.parentId>-1?this.$store.commit(l.yY.UPDATE_DATATABLE_NESTED,e):this.$store.commit(l.yY.UPDATE_DATATABLE_DATA,t),this.saveNewTree(a)}},nestedDropAreaClasses:function(){return[0===this.rows.length?"nested__dropArea--empty":"",this.depth?"nested__dropArea--depth nested__dropArea--depth".concat(Math.min(10,this.depth)):""]},draggableOptions:function(){return{...this.dragOptions,fallbackTolerance:5,group:{name:this.name}}}},methods:{haveChildren:function(t){return{"nested-datatable__item--empty":0===(t||[]).length&&this.depth<this.maxDepth}}}},st=nt,lt=(0,C.Z)(st,H,X,!1,null,"8e2c20e6",null),it=lt.exports,ot={name:"A17NestedDatatable",mixins:[k.BN,k.tD,k.KS],data:function(){return{items:this.$store.state.datatable.data}},components:{"a17-table":L,"a17-tablehead":U,"a17-nested-list":it},beforeMount:function(){function t(t){return"bulk"===t.name}function e(t){return"draggable"===t.name}this.bulkeditable&&(this.columns.find(t)||this.$store.commit(l.yY.ADD_DATATABLE_COLUMN,{index:0,data:{name:"bulk",label:"",visible:!0,optional:!1,sortable:!1}})),this.draggable&&(this.columns.find(e)||this.$store.commit(l.yY.ADD_DATATABLE_COLUMN,{index:0,data:{name:"draggable",label:"",visible:!0,optional:!1,sortable:!1}}))}},rt=ot,ut=(0,C.Z)(rt,V,z,!1,null,"10df2f0e",null),dt=ut.exports,ct=a(6550),ht=function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"secondarynav secondarynav--desktop",attrs:{slot:"navigation"},slot:"navigation"},t._l(t.navFilters,(function(a,n){return e("li",{key:n,staticClass:"secondarynav__item",class:{"s--on":t.navActive===a.slug}},[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.filterStatus(a.slug)}}},[e("span",{staticClass:"secondarynav__link"},[t._v(t._s(a.name))]),null!==a.number?e("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(a.number)+")")]):t._e()])])})),0),t.navFilters.length&&t.selectedNav?e("div",{staticClass:"secondarynav secondarynav--mobile secondarynav--dropdown",attrs:{slot:"navigation"},slot:"navigation"},[e("a17-dropdown",{ref:"secondaryNavDropdown",attrs:{position:"bottom-left",width:"full",offset:0}},[e("a17-button",{staticClass:"secondarynav__button",attrs:{variant:"dropdown-transparent",size:"small"},on:{click:function(e){return t.$refs.secondaryNavDropdown.toggle()}}},[e("span",{staticClass:"secondarynav__link"},[t._v(t._s(t.selectedNav.name))]),e("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(t.selectedNav.number)+")")])]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("ul",t._l(t.navFilters,(function(a,n){return e("li",{key:n,staticClass:"secondarynav__item"},[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.filterStatus(a.slug)}}},[e("span",{staticClass:"secondarynav__link"},[t._v(t._s(a.name))]),null!==a.number?e("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(a.number)+")")]):t._e()])])})),0)])],1)],1):t._e()])},bt=[],mt={name:"A17TableFilters",data:function(){return{navFilters:this.$store.state.datatable.filtersNav}},computed:{selectedNav:function(){const t=this.navFilters.filter((t=>t.slug===this.navActive));return t.length>0?t[0]:null},...(0,h.rn)({navActive:t=>t.datatable.filter.status})},methods:{filterStatus:function(t){this.navActive!==t&&(this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.yY.UPDATE_DATATABLE_FILTER_STATUS,t),this.$store.dispatch(i.ZP.GET_DATATABLE))}}},ft=mt,pt=(0,C.Z)(ft,ht,bt,!1,null,null,null),_t=pt.exports,gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bulkEditor"},[t.bulkIds.length?e("div",{staticClass:"bulkEditor__inner"},[e("div",{staticClass:"container"},[e("p",{staticClass:"bulkEditor__infos"},[t._v(" "+t._s(t.bulkIds.length)+" "+t._s(t.bulkIds.length>1?t.$trans("listing.bulk-selected-items"):t.$trans("listing.bulk-selected-item"))+" ")]),e("div",{staticClass:"bulkEditor__dropdown"},[e("a17-dropdown",{ref:"bulkActionsDown",attrs:{position:"bottom-left",width:"full",offset:0}},[e("a17-button",{attrs:{variant:"dropdown",size:"small"},on:{click:function(e){return t.$refs.bulkActionsDown.toggle()}}},[t._v(t._s(t.$trans("listing.bulk-actions")))]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("ul",[e("li",[t.bulkPublishable()?e("button",{on:{click:t.bulkPublish}},[t._v(t._s(t.$trans("listing.dropdown.publish")))]):t._e(),t.bulkPublishable(!0)?e("button",{on:{click:t.bulkUnpublish}},[t._v(t._s(t.$trans("listing.dropdown.unpublish")))]):t._e(),t.bulkFeaturable()?e("button",{on:{click:t.bulkFeature}},[t._v(t._s(t.$trans("listing.dropdown.feature")))]):t._e(),t.bulkFeaturable(!0)?e("button",{on:{click:t.bulkUnFeature}},[t._v(t._s(t.$trans("listing.dropdown.unfeature")))]):t._e(),t.bulkDeletable()?e("button",{on:{click:t.bulkDelete}},[t._v(t._s(t.$trans("listing.dropdown.delete")))]):t._e(),t.bulkRestorable()?e("button",{on:{click:t.bulkRestore}},[t._v(t._s(t.$trans("listing.dropdown.restore")))]):t._e(),t.bulkDestroyable()?e("button",{on:{click:t.bulkDestroy}},[t._v(t._s(t.$trans("listing.dropdown.destroy")))]):t._e()])])])],1)],1),e("a17-button",{attrs:{variant:"ghost"},on:{click:t.clearBulkSelect}},[t._v(t._s(t.$trans("listing.bulk-clear")))])],1)]):t._e()])},vt=[],At={name:"A17BulkEditor",computed:{...(0,h.rn)({bulkIds:t=>t.datatable.bulk,bulkStatus:t=>t.datatable.data.filter((e=>t.datatable.bulk.includes(e.id))).reduce(((t,e)=>({featured:t.featured&&(e.featured||!1),canFeature:t.canFeature&&e.hasOwnProperty("featured"),published:t.published&&(e.published||!1),canPublish:t.canPublish&&e.hasOwnProperty("published"),deleted:t.deleted&&(e.deleted||!1),canDelete:t.canDelete&&null!==e.delete,canDestroy:t.canDestroy&&e.hasOwnProperty("destroyable")})),{featured:!0,canFeature:!0,published:!0,canPublish:!0,deleted:!0,canDelete:!0,canDestroy:!0})})},methods:{bulkPublishable:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return""!==window["TWILL"].CMS_URLS.bulkPublish&&this.bulkStatus.canPublish&&(t?this.bulkStatus.published:!this.bulkStatus.published)&&!this.bulkStatus.deleted},bulkFeaturable:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return""!==window["TWILL"].CMS_URLS.bulkFeature&&this.bulkStatus.canFeature&&(t?this.bulkStatus.featured:!this.bulkStatus.featured)&&!this.bulkStatus.deleted},bulkDeletable:function(){return""!==window["TWILL"].CMS_URLS.bulkDelete&&!this.bulkStatus.deleted&&this.bulkStatus.canDelete},bulkRestorable:function(){return""!==window["TWILL"].CMS_URLS.bulkRestore&&this.bulkStatus.deleted},bulkDestroyable:function(){return""!==window["TWILL"].CMS_URLS.bulkDestroy&&this.bulkStatus.deleted&&this.bulkStatus.canDestroy},clearBulkSelect:function(){this.$store.commit(l.yY.REPLACE_DATATABLE_BULK,[])},bulkPublish:function(){this.$store.dispatch(i.ZP.BULK_PUBLISH,{toPublish:!0})},bulkUnpublish:function(){this.$store.dispatch(i.ZP.BULK_PUBLISH,{toPublish:!1})},bulkFeature:function(){this.$store.dispatch(i.ZP.BULK_FEATURE,{toFeature:!0})},bulkUnFeature:function(){this.$store.dispatch(i.ZP.BULK_FEATURE,{toFeature:!1})},bulkExport:function(){this.$store.dispatch(i.ZP.BULK_EXPORT)},bulkDelete:function(){this.$root.$refs.warningDeleteRow?this.$root.$refs.warningDeleteRow.open((()=>{this.$store.dispatch(i.ZP.BULK_DELETE)})):this.$store.dispatch(i.ZP.BULK_DELETE)},bulkRestore:function(){this.$store.dispatch(i.ZP.BULK_RESTORE)},bulkDestroy:function(){this.$root.$refs.warningDestroyRow?this.$root.$refs.warningDestroyRow.open((()=>{this.$store.dispatch(i.ZP.BULK_DESTROY)})):this.$store.dispatch(i.ZP.BULK_DESTROY)}}},kt=At,Dt=(0,C.Z)(kt,gt,vt,!1,null,"7d9e9022",null),yt=Dt.exports,Tt=a(1779),wt=function(){var t=this,e=t._self._c;return e("a17-modal",{ref:"modal",staticClass:"modal--form",attrs:{title:t.modalTitle,forceClose:!0}},[e("form",{attrs:{action:t.actionForm},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default"),e("a17-modal-validation",{ref:"validation",attrs:{mode:t.mode,"is-disable":t.createMode,"active-publish-state":t.withPublicationToggle,"is-publish":t.published,"published-name":"published",textEnabled:t.publishedLabel,textDisabled:t.draftLabel}})],2)])},Et=[],Ct=a(5512),Pt=a(8801),Lt={name:"A17ModalCreate",mixins:[Ct.Z],props:{formCreate:{type:String,default:"#"},publishedLabel:{type:String,default(){return this.$trans("main.published","Live")}},draftLabel:{type:String,default(){return this.$trans("main.draft","Draft")}}},components:{"a17-modal-validation":Pt.Z},computed:{createMode:function(){return"create"===this.mode},actionForm:function(){return this.createMode?this.formCreate:this.action},modalTitle:function(){return this.createMode?this.$trans("modal.create.title","Add new"):this.$trans("modal.update.title","Update")},published:function(){return!this.createMode&&!!this.fieldValueByName("published")},withPublicationToggle:function(){return void 0!==this.columns.find((t=>"published"===t.name))},...(0,h.rn)({action:t=>t.modalEdition.action,mode:t=>t.modalEdition.mode,columns:t=>t.datatable.columns,language:t=>t.language.active}),...(0,h.Se)(["fieldValueByName"])},watch:{language(){this.$refs.validation&&this.$refs.validation.addListeners()}},methods:{open:function(){this.createMode&&this.$store.commit(l.ad.RESET_LANGUAGES),this.$refs.modal.open()},submit:function(){if(this.isSubmitPrevented)return void(this.shouldRetrySubmitWhenAllowed=!0);if(this._isSubmitting)return;this._isSubmitting=!0;const t=this;this.$store.commit(l.Yc.UPDATE_FORM_LOADING,!0);const e=document.activeElement.name;this.$nextTick((function(){this.$store.dispatch(i.ZP.UPDATE_FORM_IN_LISTING,{endpoint:this.actionForm,method:"create"===this.mode?"post":"put",redirect:"create-another"!==e}).then((()=>{t.$refs.modal&&t.$refs.modal.close(),t.$nextTick((function(){"create-another"===e&&t.$refs.modal&&t.$refs.modal.open(),"create"===this.mode&&this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.Yc.REMOVE_FORM_FIELD,"published"),this.$emit("reload")}))}),(e=>{t.$store.commit(l.qq.SET_NOTIF,{message:"Your submission could not be validated, please fix and retry",variant:"error"})})).finally((()=>{t.$nextTick((function(){t._isSubmitting=!1}))}))}))}}},St=Lt,$t=(0,C.Z)(St,wt,Et,!1,null,null,null),xt=$t.exports,It=a(366),Ot=a(6625),Ut=a(890);const Bt={action:"#",mode:"create"},Rt={},Mt={[l.DF.UPDATE_MODAL_ACTION](t,e){t.action=e},[l.DF.UPDATE_MODAL_MODE](t,e){t.mode=e}};var Zt={state:Bt,getters:Rt,mutations:Mt},Ft=a(7224),Yt=a(1607);n["default"].use(d.Z),n["default"].use(c.Z),s.Z.registerModule("datatable",It.Z),s.Z.registerModule("language",Ot.Z),s.Z.registerModule("form",Ut.Z),s.Z.registerModule("modalEdition",Zt),s.Z.registerModule("attributes",Ft.Z),(0,r.Z)(),window["TWILL"].vm=window.vm=new n["default"]({store:s.Z,el:"#app",components:{"a17-fieldset":b.Z,"a17-filter":ct.Z,"a17-table-filters":_t,"a17-datatable":j,"a17-nested-datatable":dt,"a17-bulk":yt,"a17-langmanager":Tt.Z,"a17-modal-create":xt},mixins:[k.dx],computed:{hasBulkIds:function(){return this.bulkIds.length>0},...(0,h.rn)({localStorageKey:t=>t.datatable.localStorageKey,baseUrl:t=>t.datatable.baseUrl,bulkIds:t=>t.datatable.bulk})},methods:{create:function(){this.$refs.editionModal&&(this.$store.commit(l.DF.UPDATE_MODAL_ACTION,""),this.$store.commit(l.DF.UPDATE_MODAL_MODE,"create"),this.$store.commit(l.Yc.EMPTY_FORM_FIELDS),this.$refs.editionModal.open())},reloadDatas:function(){this.$store.dispatch(i.ZP.GET_DATATABLE)},clearFiltersAndReloadDatas:function(){this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.yY.CLEAR_DATATABLE_FILTER),Object.keys(this.$refs).filter((t=>0===t.indexOf("filterDropdown["))).map((t=>this.$refs[t].updateValue())),this.reloadDatas()},filterListing:function(t){const e=this;this.$store.commit(l.yY.UPDATE_DATATABLE_PAGE,1),this.$store.commit(l.yY.UPDATE_DATATABLE_FILTER,t||{search:""}),this.$nextTick((function(){e.reloadDatas()}))}},mounted:function(){window["TWILL"].openCreate&&this.create()},created:function(){(0,u.Z)();let t=!1;const e=(0,Yt.cF)(this.localStorageKey+"_page-offset");e&&(this.$store.commit(l.yY.UPDATE_DATATABLE_OFFSET,parseInt(e)),t=!0);const a=(0,Yt.cF)(this.localStorageKey+"_columns-visible");a&&(this.$store.commit(l.yY.UPDATE_DATATABLE_VISIBLITY,JSON.parse(a)),t=!0),t&&this.reloadDatas()}}),document.addEventListener("DOMContentLoaded",o.Z)},1607:function(t,e,a){function n(){const t="test";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}}function s(t,e){const a="";window.TWILL.debug||(n()?localStorage.setItem(t,e):document.cookie=t+"="+e+a+"; path=/")}function l(t){if(window.TWILL.debug)return null;if(n())return localStorage.getItem(t);{const e=t+"=",a=document.cookie.split(";");for(let t=0;t<a.length;t++){let n=a[t];while(" "===n.charAt(0))n=n.substring(1,n.length);if(0===n.indexOf(e))return n.substring(e.length,n.length)}return null}}a.d(e,{cF:function(){return l},po:function(){return s}})}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var l=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,l){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],l=t[d][2];for(var o=!0,r=0;r<n.length;r++)(!1&l||i>=l)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(o=!1,l<i&&(i=l));if(o){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[n,s,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.j=236}(),function(){var t={236:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,l,i=n[0],o=n[1],r=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(r)var d=r(a)}for(e&&e(n);u<i.length;u++)l=i[u],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(d)},n=self["webpackChunk_area17_twill"]=self["webpackChunk_area17_twill"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998,64],(function(){return a(7766)}));n=a.O(n)})();