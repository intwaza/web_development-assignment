var kiosk = new Proxy({
  FRUIT: "banana",
 },{
 get:function(target,key){
  return target[key]
 },
 set:function(target,key,val){
   console.log(`${target[key]} ${val}`)
   target[key] = val;
  
 }
})
console.log(kiosk.FRUIT);
kiosk.FRUIT = "Mango";




