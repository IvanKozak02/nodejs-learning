let a = 2;

setTimeout(()=>{
    console.log(a);
    setTimeout(()=>{
        console.log('second hello')
    },4000);
},0)


setTimeout(()=>{
    console.log('first hello')
},3000)


a+=1;
