"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[1811],{1811:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var o=n(655),r=n(7294),i=0;const c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iframeNode=null,e.id="react-embed-gist-"+i++,e}return(0,o.__extends)(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,n=t.file,o=n?"?file=".concat(n):"";return"https://gist.github.com/".concat(e,".js").concat(o)},e.prototype._updateIframeContent=function(){var t=this.iframeNode,e=t.document;t.contentDocument?e=t.contentDocument:t.contentWindow&&(e=t.contentWindow.document);var n=this._defineUrl(),o='<script type="text/javascript" src="'.concat(n,'"><\/script>'),r="<style>*{font-size:".concat(12,"px;}</style>"),i="onload=\"parent.document.getElementById('".concat(this.id,"').style.height=document.body.scrollHeight + 'px'\""),c='<html><head><base target="_parent">'.concat(r,'</head><body style="margin:0" ').concat(i,">").concat(o,"</body></html>");e.open(),e.writeln(c),e.close()},e.prototype.render=function(){var t=this;return(0,this.props.renderWrap)(r.createElement("iframe",{id:this.id,ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,style:{margin:"0 0 -".concat(12,"px")}}))},e}(r.PureComponent)}}]);