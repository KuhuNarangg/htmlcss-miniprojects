let s="hello";
let count=0;
for(let i=0;i<s.length;i++){
    if (s[i] in 
{'a':1,'e':1,'i':1,'o':1,'u':1}
    ){
        count++;
    }
}
console.log(count);