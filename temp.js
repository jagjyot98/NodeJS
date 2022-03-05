var obj={
add:function add(a,b){
    return a+b;
},

sub:function subtract(a,b){
    return a-b;
},
hello:123
}
console.log(obj+"\tby temp.js");

module.exports=obj; //exported
// module.exports=obj.hello;