import{f as t,k as s,o as m,al as l}from"./h6Avs_Ig.js";import{u as r}from"./DR-k6krl.js";const i=t({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${r().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const o=l;return m(),s(o,{value:c,class:"[&:not(:first-child)]:mt-5"})}}}),d=Object.assign(i,{__name:"PmX"});export{d as default};
