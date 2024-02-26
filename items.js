

export const node = (value=null,nextNode=null)=> {
    return{value,nextNode}
}

let node1 = node(2);
let node2 = node(14);
let node3 = node(23);
let node4 = node(0);
node1.nextNode = node2
node2.nextNode = node3
node3.nextNode = node4

// console.log(node1);
// console.log(node2);

export {node1}
