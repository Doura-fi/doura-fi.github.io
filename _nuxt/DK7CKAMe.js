import{f as c,k as o,o as l,al as m}from"./8Y8auOHY.js";import{u as i}from"./VEC1CSfE.js";const f=c({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(n){const t=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${i().packageManagers.value.map(a=>{const e=n.name?`${a.command}${a.install}${n.saveDev?a.saveDev:""}${n.name}`:`${a.command}${a.installEmpty}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const s=m;return l(),o(s,{value:t,class:"[&:not(:first-child)]:mt-5"})}}}),d=Object.assign(f,{__name:"PmInstall"});export{d as default};
