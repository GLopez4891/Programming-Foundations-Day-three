class grandParent {
    constructor(hairColor, eyeColor) {
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
    }
    vertical() {
        console.log("Grandma can jump 10 inches");
    }
}

class mother extends grandParent {
    vertical() {
        console.log("Mom can jump 15 inches");
    }
}

class child extends grandParent {
    vertical() {
        console.log("My son can jump 25 inches");
    }

}

let familyTree = [];

let grandma = new grandParent("white", "blue");
let mom = new mother("blonde", "brown");
let son = new child("brown", "green");

familyTree.push(grandma, mom, son);

for (let i = 0; i < familyTree.length; i++) {
    familyTree[i].vertical();
}
