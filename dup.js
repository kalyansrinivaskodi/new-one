// console.log(global);

console.log("heill")
const arr1=[1,1,2,3,2,3,4,5];
let se=new Set(arr1);
let da=Array.from(se);
let c=[];
var res={};
arr1.forEach(
    (ele)=>{
        res[ele]=typeof(res[ele])==="undefined"?1:res[ele]+1;
    }
)
// console.log(res);
let dup=[];
let dis=[];
for(let key in res){
    if(res[key]>1)
    {
        dup.push(key);

    }
    else
    {
        dis.push(key);
    }
}
console.log(dis);