var familyTree = [];

// for (var i = 0; i < familyTree.length; i++) {


class grandParent {
    constructor(hairColor, eyeColor, vertical) {
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.vertical = vertical;
    }

    jump() {
        console.log("Grandma can jump " + this.vertical + " inches");
    }

}
let grandma = new grandParent('white', 'blue', 10);
grandma.jump();
class mother extends grandParent {
    constructor(hairColor, eyeColor, vertical) {
        super();
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.vertical = vertical;
    }

    jump() {
        console.log("Mom can jump " + this.vertical + " inches");
    }

}
let mom = new mother('blonde', 'brown', 15);
mom.jump();
class child extends grandParent {
    constructor(hairColor, eyeColor, vertical) {
        super();
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.vertical = vertical;
    }

    jump() {
        console.log("My son can jump " + this.vertical + " inches");
    }

}
let son = new child('brown', 'green', 25);
son.jump();
familyTree.push(grandma, mom, son);
console.log(familyTree);