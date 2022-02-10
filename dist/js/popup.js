(()=>{"use strict";var e,t={993:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Display=t.ValueFound=t.LookupInput=t.LookupButton=t.LookupWrapper=t.Message=t.Button=t.ButtonContainer=t.TextArea=t.ModalInput=t.Container=void 0;const n=o(r(163));t.Container=n.default.div`
    background: #ffffff;
    padding: 10px;
    color: #2c2a2a;
    display: flex;
    flex-direction:column;
    align-content:stretch;
    font-family:'Ubuntu', sans-serif;
`,t.ModalInput=n.default.input`
    width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background:rgb(245 245 245);
    font-family:'Ubuntu', sans-serif;

    ::placeholder {
       color: #93a8b4;
       font-size:16px;
       font-family:'Ubuntu', sans-serif;
   }
   &:hover {
    border:1px solid #32435e;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`,t.TextArea=n.default.textarea`
   width: calc(100% - 40px);
    margin-bottom: 8px;
    color: rgb(19, 18, 18);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
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
`,t.ButtonContainer=n.default.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`,t.Button=n.default.button`
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    background: rgb(13 16 33);
    color: #ffffff;
    border-radius: 6px;
    border:none;

    &:hover {
    background: #201e2c;
    border:1px solid #22212e;
  }
`,t.Message=n.default.div`
    margin:20px 0;
    font-size:16px;
    font-weight: 400;
    color: ${e=>e.error?"#b44242":"#4ebe61"};
`,t.LookupWrapper=n.default.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-content:stretch;
`,t.LookupButton=n.default.button`
    padding: 10px 18px;
    font-size: 16px;
    font-weight: 600;
    background: rgb(50 62 78);
    color: #ffffff;
    border-radius: 6px;
    border:none;

    &:hover {
    background: #18202e;
    border:1px solid #232b46;
  }
    width: auto;
    padding: 0px 24px;
    font-size: 16px;
`,t.LookupInput=n.default.input`
    width:70%;
    color: rgb(19, 18, 18);
    margin-right:4px;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 4px;
    border:1px solid #32435e;
    background:rgb(245 245 245);
    font-family:'Ubuntu', sans-serif;

    ::placeholder {
        font-size:16px;
        color: #93a8b4;
   }
   &:hover {
    border:1px solid #2a3649;
  }
    &:focus {
            outline: none;
            border:2px solid #162741;
    }
`,t.ValueFound=n.default.div`
    font-size:16px;
`,t.Display=n.default.div`
    background: #efe9ff;
    color:${e=>e.error&&"#b44242"};
    padding: 10px;
    margin-bottom: 10px;
`},548:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(294)),i=a(r(935)),d=r(993);i.default.render(u.default.createElement(u.default.StrictMode,null,u.default.createElement((()=>{const[e,t]=(0,u.useState)([!1,""]),[r,o]=(0,u.useState)({exist:!1,value:""}),[n,l]=(0,u.useState)({innerText:"Copy to clipboard",disabled:!1}),a=u.default.useRef(null),i=u.default.useRef(null),f=u.default.useRef(null);return u.default.createElement(d.Container,null,u.default.createElement("form",{style:{width:"100%"}},u.default.createElement(d.ModalInput,{type:"text",id:"key",ref:a,placeholder:"Shortcut for the snippet"}),u.default.createElement(d.TextArea,{id:"value",ref:i,rows:5,placeholder:"Type the snippet text here"})),u.default.createElement(d.ButtonContainer,null,u.default.createElement(d.Button,{type:"button",onClick:()=>{var e,r;const o=null===(e=a.current)||void 0===e?void 0:e.value,n=null===(r=i.current)||void 0===r?void 0:r.value;(null==o?void 0:o.trim())&&(null==n?void 0:n.trim())?chrome.storage.sync.set({[o]:n},(()=>t([!0,"variable has been set"]))):t([!1,"name or value cannot be empty"])}},"Save"),u.default.createElement(d.Button,{type:"button",onClick:()=>{chrome.tabs.create({url:"variables.html"})}},"Edit Variables")),u.default.createElement(d.Message,{error:!e[0]},""!=e[1]&&e[1]),u.default.createElement("form",null,u.default.createElement(d.LookupWrapper,null,u.default.createElement(d.LookupInput,{type:"text",ref:f,placeholder:"Quick Variable Lookup"}),u.default.createElement(d.LookupButton,{id:"find",type:"button",onClick:()=>{var e;const t=null===(e=f.current)||void 0===e?void 0:e.value;(null==t?void 0:t.trim())&&chrome.storage.sync.get(t,(function(e){var t=Object.entries(e)[0];o(null!=t?{exist:!0,value:t[1]}:{exist:!1,value:"variable not found"})}))}},"Find"))),u.default.createElement("br",null),u.default.createElement(d.ValueFound,null,""!=r.value&&u.default.createElement(u.default.Fragment,null,u.default.createElement(d.Display,{error:!r.exist},r.value),r.exist&&u.default.createElement(d.Button,{onClick:()=>{var e;l({innerText:"Copied.",disabled:!0}),e=r.value,window.navigator.clipboard.writeText(e).then((()=>{})).catch((e=>{console.error("Could not copy text: ",e)}))},disabled:n.disabled},n.innerText))))}),null)),document.getElementById("root"))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e].call(l.exports,l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,n,l)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,l]=e[f],u=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(u=!1,l<a&&(a=l));if(u){e.splice(f--,1);var d=n();void 0!==d&&(t=d)}}return t}l=l||0;for(var f=e.length;f>0&&e[f-1][2]>l;f--)e[f]=e[f-1];e[f]=[r,n,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={42:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[a,u,i]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);if(i)var f=i(o)}for(t&&t(r);d<a.length;d++)l=a[d],o.o(e,l)&&e[l]&&e[l][0](),e[a[d]]=0;return o.O(f)},r=self.webpackChunksnippet_expander_chrome_ext=self.webpackChunksnippet_expander_chrome_ext||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[736],(()=>o(548)));n=o.O(n)})();