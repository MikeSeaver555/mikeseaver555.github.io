"use strict";(self.webpackChunkmy_hack_notes=self.webpackChunkmy_hack_notes||[]).push([[563],{5669:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=t(4848),i=t(8453);const o={sidebar_position:6},a=void 0,l={id:"Lame/vsftpd exploit",title:"vsftpd exploit",description:"From searchsploit",source:"@site/docs/Lame/vsftpd exploit.md",sourceDirName:"Lame",slug:"/Lame/vsftpd exploit",permalink:"/Lame/vsftpd exploit",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Lame/vsftpd exploit.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"SMB",permalink:"/Lame/SMB"},next:{title:"samba exploit",permalink:"/Lame/samba exploit"}},d={},r=[{value:"From searchsploit",id:"from-searchsploit",level:3},{value:"Downloading the exploit",id:"downloading-the-exploit",level:3},{value:"About CVE-2011-2523",id:"about-cve-2011-2523",level:3},{value:"Understanding what the exploit does",id:"understanding-what-the-exploit-does",level:3},{value:"Manual exploitation (no success)",id:"manual-exploitation-no-success",level:3},{value:"Using metasploit (no success)",id:"using-metasploit-no-success",level:3},{value:"The port 6200 looks filtered",id:"the-port-6200-looks-filtered",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"from-searchsploit",children:"From searchsploit"}),"\n",(0,n.jsx)(s.p,{children:"vsftpd 2.3.4 - Backdoor Command Execution"}),"\n",(0,n.jsx)(s.h3,{id:"downloading-the-exploit",children:"Downloading the exploit"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"searchsploit -m unix/remote/49757.py\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(9978).A+"",width:"661",height:"202"})}),"\n",(0,n.jsx)(s.h3,{id:"about-cve-2011-2523",children:"About CVE-2011-2523"}),"\n",(0,n.jsxs)(s.p,{children:["From ",(0,n.jsx)(s.a,{href:"https://github.com/padsalatushal/CVE-2011-2523",children:"https://github.com/padsalatushal/CVE-2011-2523"})]}),"\n",(0,n.jsx)(s.admonition,{title:"CVE-2011-2523 - vsftpd 2.3.4 Exploit",type:"warning",children:(0,n.jsxs)(s.p,{children:["In July 2011, it was discovered that vsftpd version 2.3.4 downloadable from the master site had been compromised. Users logging into a compromised vsftpd-2.3.4 server may issue a\xa0",(0,n.jsx)(s.code,{children:":)"}),"\xa0smileyface as the username and gain a command shell on port\xa0",(0,n.jsx)(s.code,{children:"6200"}),". This was not an issue of a security hole in vsftpd, instead, someone had uploaded a different version of vsftpd which contained a backdoor. Since then, the site was moved to Google App Engine."]})}),"\n",(0,n.jsx)(s.h3,{id:"understanding-what-the-exploit-does",children:"Understanding what the exploit does"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(6573).A+"",width:"763",height:"386"})}),"\n",(0,n.jsx)(s.h3,{id:"manual-exploitation-no-success",children:"Manual exploitation (no success)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(5444).A+"",width:"603",height:"228"})}),"\n",(0,n.jsx)(s.h3,{id:"using-metasploit-no-success",children:"Using metasploit (no success)"}),"\n",(0,n.jsx)(s.p,{children:"We expect the same result but we could be wrong. Let's give it a try."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"msfconsole\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"> color false\r\n> search vsftpd 2.3.4\r\n> use 0\r\n> show options\r\n> set RHOSTS 10.10.10.3\r\n> run\n"})}),"\n",(0,n.jsx)(s.p,{children:"I tried it twice with no success:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(1018).A+"",width:"632",height:"256"})}),"\n",(0,n.jsx)(s.h3,{id:"the-port-6200-looks-filtered",children:"The port 6200 looks filtered"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"sudo nmap -p6200 lame.htb\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"PORT     STATE    SERVICE\r\n6200/tcp filtered lm-x\n"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9978:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/lame-007-13ec6fb300ae120bc93234e497437fa5.png"},6573:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/lame-008-33a3964d7fe1a4dfef0da7b22c4ebee8.png"},5444:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/lame-009-409ad61512454a62ed5a7e003b6865e6.png"},1018:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/lame-010-bfb600492c29cba24c512363430c8c15.png"},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(6540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);