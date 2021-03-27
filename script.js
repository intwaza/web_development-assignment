var kiosk = new Proxy({
  FRUIT: 'Mango',
 },{
 get:function(target,key){
  return target[key]
 },
 set:function(target,key,val){
   console.log(`${target[key]} ${val}`)
   target[key] = val;
   return true;
 }
})
console.log(kiosk.FRUIT);
kiosk.FRUIT = "Banana";




