class Group {
    constructor(){
        this.m = []
    }
    from ([x,y]) {
        for(let i = x;i<= y;i++){
            this.m.push(i);
        }
        return this.m
    }
    add(newele){
    if(!(this.m.includes(newele))){
        this.m.push(newele)
    }
    }
    has(num){
        if (this.m.includes(num)){
            return true
        }
        else return false

    }
    delete(number){
        if(this.m.includes(number)) {
            this.m = this.m.filter(n => n!==number)
        }
    }
    }
    let group = new Group()
    group.from([10,20]);
    // group.from([10,20]);
    console.log(group.from([10,20]));
    console.log(group.has(30));
    console.log(group.has(10));
    group.add(21);
    console.log(group.m);
    group.add(10)
    console.log(group.m)
    group.delete(21)
    console.log(group.m)
    

