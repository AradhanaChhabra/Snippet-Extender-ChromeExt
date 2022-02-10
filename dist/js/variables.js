(()=>{"use strict";var e,t={756:function(e,t,r){var l=this&&this.__createBinding||(Object.create?function(e,t,r,l){void 0===l&&(l=r),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,l){void 0===l&&(l=r),e[l]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&l(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=n(r(294)),i=a(r(935)),u=r(591);i.default.render(d.default.createElement(d.default.StrictMode,null,d.default.createElement((e=>{const[t,r]=(0,d.useState)(!1),[l,o]=(0,d.useState)([d.default.createElement(u.Nothing,null,"No Data Here")]),[n,a]=(0,d.useState)(""),[i,f]=(0,d.useState)(""),p=d.default.useRef(null),c=d.default.useRef(null),[s,x]=(0,d.useState)(!1);var b=0;const g=e=>{e&&chrome.storage.sync.remove(e,(()=>{})),r(!1),window.location.reload()};return(0,d.useEffect)((()=>{chrome.storage.sync.get(null,(e=>{var t,l=Object.keys(e),n=Object.values(e);t=n,o(l.map(((e,l)=>d.default.createElement(u.ValueEditGrid,{key:b++},d.default.createElement(u.Shortcut,null,e),d.default.createElement(u.Value,null,t[l]),d.default.createElement(u.Edit,{onClick:()=>((e,t)=>{a(e),f(t),r((e=>!e))})(e,t[l])},"Edit")))))}))}),[]),d.default.createElement(u.Wrapper,null,d.default.createElement(u.Modal,{show:t},d.default.createElement(u.Overlay,{onClick:()=>r(!1)}),d.default.createElement(u.Container,{show:t},d.default.createElement("form",null,d.default.createElement(u.ModalInput,{ref:p,type:"text",placeholder:"Name",defaultValue:n}),d.default.createElement(u.TextArea,{ref:c,rows:6,placeholder:"Enter Value Here",defaultValue:i})),d.default.createElement(u.ButtonWrapper,null,d.default.createElement(u.Button,{onClick:()=>{var e,t,l;const o=null===(e=p.current)||void 0===e?void 0:e.value,n=null===(t=c.current)||void 0===t?void 0:t.value,d=null===(l=p.current)||void 0===l?void 0:l.defaultValue;(null==n?void 0:n.trim())&&(null==o?void 0:o.trim())?(o!=d&&g(d),chrome.storage.sync.set({[o]:n},(()=>{})),window.location.reload(),r(!1),a(""),f("")):x(!0)}},"Save Changes"),d.default.createElement(u.Button,{delete:!0,onClick:()=>{var e;return g(null===(e=p.current)||void 0===e?void 0:e.defaultValue)}},"Delete")),s&&d.default.createElement(u.Message,null,"Shortcut/Value Can't be Empty"))),d.default.createElement(u.Header,null,"Snippet Expander Plugin"),d.default.createElement(u.About,null,"<","Save customized snippets and use it anywhere in your browser",">"),d.default.createElement(u.GridContainer,null,d.default.createElement(u.TitleRow,null,"Shortcut"),d.default.createElement(u.TitleRow,null,"Value"),d.default.createElement(u.TitleRow,null)),l,d.default.createElement("br",null),d.default.createElement("br",null))}),null)),document.getElementById("editRoot"))},591:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Message=t.Button=t.ButtonWrapper=t.TextArea=t.ModalInput=t.Container=t.Overlay=t.Modal=t.Nothing=t.Edit=t.Value=t.Shortcut=t.ValueEditGrid=t.TitleRow=t.GridContainer=t.About=t.Header=t.Wrapper=void 0;const o=l(r(163));t.Wrapper=o.default.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height: calc(100vh - 20px);
`,t.Header=o.default.div`
    font-size: 44px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    color: #2f353c;
`,t.About=o.default.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 2px 12px 24px;
    color: #2f353c;
    
    
`,t.GridContainer=o.default.div`
    width:80%;
    grid-template-columns:repeat(3,1fr);
    display:grid;
    padding:10px;
`,t.TitleRow=o.default.div`
    background:#1d2227;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    padding: 12px;
    padding-left:30px;
`,t.ValueEditGrid=o.default.div`
    grid-template-columns:repeat(3,1fr);
    display:grid;
    padding:10px;
    width:80%;
    border-bottom:1px solid #dee2e6;
`,t.Shortcut=o.default.div`
    color:#212529;
    font-size:18px;
    padding: 12px;
    padding-left:30px;
`,t.Value=o.default.div`
    color:#212529;
    padding: 12px;
    font-size:16px;
    padding-left:30px;
`,t.Edit=o.default.button`
    color:#007bff;
    padding: 12px;
    padding-left:30px;
    font-size:16px;
    background:none;
    border:none;
    cursor:pointer;
`,t.Nothing=o.default.div`
    font-size:24px;
    padding:20px;
`,t.Modal=o.default.div`
	z-index: auto;
	display: ${({show:e})=>e?"flex":"none"};
    flex-direction: row;
    justify-content: center;
    align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width:100%;
    transition: all 0.4s ease;
`,t.Overlay=o.default.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index:30;
  background-color: rgba(0, 0, 0, 0.5);
`,t.Container=o.default.div`
    display:flex;
    flex-direction:column;
	position:fixed;
    top:30%;
	width: 36%;
	height: auto;
	border-radius: 10px;
	padding: 28px;
    font-size:24px;
    box-shadow: 0 10px 25px 4px rgb(2 2 2 / 50%);
    z-index:40;
    background: #ffffff;
    color: #2c2a2a;
    align-content:stretch;
    @media (max-width: 940px) {
        width:60%;
  }
`,t.ModalInput=o.default.input`
    width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #ffffff;
    background:rgb(245 245 245);

    ::placeholder {
       color: #93a8b4;
       font-size:16px;
   }
   &:hover {
    border:1px solid #32435e;
  }
    &:focus {
            border:2px solid #162741;
    }
`,t.TextArea=o.default.textarea`
    width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border:1px solid #fff;
    background:rgb(245 245 245);

    ::placeholder {
       color: #93a8b4;
       font-size:16px;
   }
   &:hover {
    border:1px solid #32435e;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`,t.ButtonWrapper=o.default.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`,t.Button=o.default.button`
    margin:0 20px;
    font-size:18px;
    padding: 10px 18px;
    font-weight: 600;
    background:  ${e=>e.delete?"rgb(150 23 34)":"rgb(13 16 33)"};
    color: #ffffff;
    border-radius: 6px;
    border:1px solid #fff;

    &:hover {
    background: ${e=>e.delete?"rgb(134 38 46)":"#201e2c"};
    border:${e=>e.delete?"1px solid #8d2828":"1px solid #22212e"};
  }
  @media (max-width: 940px) {
    font-size: 16px;
    padding: 12px 10px;
    font-weight: 500;
  }
`,t.Message=o.default.div`
    color:#499169;
    font-size:20px;
    padding:10px;
`}},r={};function l(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,r,o,n)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,n]=e[f],d=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(d=!1,n<a&&(a=n));if(d){e.splice(f--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={565:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,d,i]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in d)l.o(d,o)&&(l.m[o]=d[o]);if(i)var f=i(l)}for(t&&t(r);u<a.length;u++)n=a[u],l.o(e,n)&&e[n]&&e[n][0](),e[a[u]]=0;return l.O(f)},r=self.webpackChunksnippet_expander_chrome_ext=self.webpackChunksnippet_expander_chrome_ext||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=l.O(void 0,[736],(()=>l(756)));o=l.O(o)})();