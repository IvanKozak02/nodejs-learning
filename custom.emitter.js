class CustomEmitter {
    events = new Map();

    registerEvent(event, cb){
        if (this.events.has(event)){
            this.events.get(event).push(cb);
        }else {
            this.events.set(event, [cb]);
        }
    }


    emit(event){
        if (this.events.has(event)){
            const eventsCBS = this.events.get(event);
            eventsCBS.forEach(cb=>{
                cb();
            })
            return true;
        }
        else {
            return false;
        }
    }
}

const customEmitter = new CustomEmitter();

customEmitter.registerEvent('response', ()=>{
    console.log('Hello from response event!!!');
})


customEmitter.registerEvent('request', ()=>{
    console.log('Hello from request event!!!');
})

customEmitter.registerEvent('joke', ()=>{
    console.log('Hello from joke event!!!');
})

customEmitter.registerEvent('joke', ()=>{
    console.log('Hahahahaah!!!');
})

customEmitter.emit('joke');
customEmitter.emit('response');

