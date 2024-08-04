"use strict";(self.webpackChunkfvuarjs=self.webpackChunkfvuarjs||[]).push([[802],{177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>T,default:()=>A,frontMatter:()=>N,metadata:()=>C,toc:()=>S});var a=n(4848),r=n(8453),s=n(6540),l=n(4164),i=n(3104),o=n(6347),u=n(205),c=n(7485),d=n(1682),h=n(679);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,c]=b({queryString:n,groupId:a}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,h.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=o??d;return f({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,r]),tabValues:r}}var v=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=g(e);return(0,a.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,a.jsx)(x,{...t,...e}),(0,a.jsx)(y,{...t,...e})]})}function I(e){const t=(0,v.A)();return(0,a.jsx)(w,{...e,children:p(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(k.tabItem,r),hidden:n,children:t})}const N={sidebar_position:2},T="Installation",C={id:"installation",title:"Installation",description:"This documentation is currently in early access, information and features may change.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Documentation Introduction",permalink:"/docs/intro"},next:{title:"Basic Usage",permalink:"/docs/basic-usage"}},E={},S=[{value:"Install with package managers",id:"install-with-package-managers",level:2},{value:"Install with CDN",id:"install-with-cdn",level:2}];function q(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.admonition,{title:"Early Access",type:"danger",children:(0,a.jsx)(t.p,{children:"This documentation is currently in early access, information and features may change."})}),"\n",(0,a.jsx)(t.p,{children:"To download Fvuarjs, you can choose the package manager or cdn suitable for your project."}),"\n",(0,a.jsx)(t.h2,{id:"install-with-package-managers",children:"Install with package managers"}),"\n",(0,a.jsx)(t.p,{children:"Fvuarjs is fast, so its installation is just as fast. and it is easily realized.\r\nChoose the package manager you like and copy the code and run it in the terminal of your project directory."}),"\n",(0,a.jsxs)(I,{queryString:"via",children:[(0,a.jsx)(V,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="terminal"',children:"npm i fvuarjs@latest\n"})})}),(0,a.jsx)(V,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="terminal"',children:"yarn add fvuarjs@latest\n"})})}),(0,a.jsx)(V,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="terminal"',children:"pnpm i fvuarjs@latest\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"install-with-cdn",children:"Install with CDN"}),"\n",(0,a.jsx)(t.p,{children:"If you want to include it in your project via cdn, fvuarjs is proud to offer you this option.\r\nPlace this html script tag at the end of your website's body tag."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/fvuarjs@latest/module/fvuar.min.js"><\/script>\n'})}),"\n",(0,a.jsx)(t.p,{children:"It should appear like this in your site file."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:'title="your-html-file.html"',children:'<html>\r\n    \x3c!-- ... --\x3e\r\n    <body>\r\n        \x3c!-- ... --\x3e\r\n        \x3c!-- highlight-next-line --\x3e\r\n        <script src="https://cdn.jsdelivr.net/npm/fvuarjs@latest/module/fvuar.min.js"><\/script>\r\n    </body>\r\n</html>\n'})})]})}function A(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);