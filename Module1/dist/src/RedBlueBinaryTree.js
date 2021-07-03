import { BinaryTreeBase } from "./BinaryTreeBase.js";
import { InsertWithColorBalancing } from "./InsertWithColorBalancing.js";

export class RedBlueBinaryTree extends BinaryTreeBase {

    constructor(comparator) {
        super(comparator);
        
        this.setInsertBehavior(new InsertWithColorBalancing());
    }

    getNameOfImplementingClass() {
        return this.constructor.name;
    }

    show() {
        console.log("RedBlueBinaryTree.");
    }
}