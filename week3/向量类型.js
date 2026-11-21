class vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(p){
        return new vec(this.x+p.x,this.y+p.y)

    }
    minus(q){
        return new vec(this.x-q.x,this.y-q.y)
    }
    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}
console.log(new vec(1,2).plus(new vec(2,3)));
console.log(new vec(1,2).minus(new vec(2,3)));
console.log(new vec(3,4).length)