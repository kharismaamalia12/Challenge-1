class lingkaran {
    constructor(r){
        this.r = r
    }

    luas = () => {
        return 3.14 * (this.r * this.r)
    }

    keliling = () => {
        return 3.14 * (this.r * 2)
    }
}


class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.t = t
    }

    volume = () => {
        return (3.14 * (this.r * this.r)) * this.t
    }

    luaspermukaan = () => {
        return ((3.14 * (this.r * 2) * this.t) + (2 *(3.14 * (this.r * this.r))))
    }

    luasselimut = () => {
        return (3.14 * (this.r * 2)) * this.t
    }
}

let tabung1 = new tabung (7.5,50);
console.log("Volume : " + tabung1.volume());
console.log("Luas Permukaan : " + tabung1.luaspermukaan());
console.log("Luas Selimut : " + tabung1.luasselimut());
console.log("--------------------------------------------");



class kerucut extends lingkaran{
    constructor(r,t,s){      
        super(r)            
        this.t = t
        this.s = s
    }

    volume = () => {
        return 3.14 * (this.r * this.r) * this.t / 3
    }

    luaspermukaan = () => {
        return (3.14 * (this.r * this.r)) + (3.14 * this.r * this.s)
    }

    luasselimut = () => {
        return 3.14 * this.r * this.s
    }

}

let kerucutt = new kerucut (10,40,22.3);
console.log("Volume : " + kerucutt.volume());
console.log("Luas Permukaan : " + kerucutt.luaspermukaan());
console.log("Luas Selimut : " + kerucutt.luasselimut());
console.log("------------------------------------------------");



class bola extends lingkaran{
    constructor(r){
        super(r)
    }

    volume = () => {
        return 4/3 * 3.14 * this.r * this.r * this.r
    }

    luaspermukaan = () => {
        return 4 * 3.14 * (this.r * this.r)
    }
}

let bolaa = new bola (15);
console.log("Volume : " + bolaa.volume());
console.log("Luas Permukaan : " + bolaa.luaspermukaan());