import { node, node1 } from './items.js'

const linkedList = () => {

    let head = {
        reference: null
    }

    const prepend = val => {
        head.reference = node(val, head.reference)
    }

    const append = val => {

        if(head.reference==null){
            head.reference = node(val)
            return
        }

        let Listnode = head.reference

        while (Listnode) {
            
            if (Listnode.nextNode == null) {
                Listnode.nextNode = node(val)
                return Listnode

            }

            else {
                Listnode = Listnode.nextNode
            }
        }


    }

    const at = index => {
        let listNode = head.reference
        let countOfTraverse = 0;

        while (listNode && countOfTraverse <= index) {
            if (countOfTraverse == index) {
                return listNode
            } else {
                countOfTraverse = countOfTraverse + 1;
                listNode = listNode.nextNode
            }
        }
        return 'Not Found'
    }

    const pop = () => {
        let listNode = head.reference
        while (listNode) {
            if (listNode.nextNode.nextNode == null) {
                listNode.nextNode = null;

            }
            listNode = listNode.nextNode
        }

    }

    const contains = val => {
        let listNode = head.reference;
        while (listNode) {
            if (listNode.value == val) {
                return true
            }
            listNode = listNode.nextNode
        }
        return false
    }

    const find = val => {
        let listNode = head.reference;
        let count = 0;
        while (listNode) {
            if (listNode.value == val) {
                return count
            }
            count = count + 1;
            listNode = listNode.nextNode
        }
    }

    const size = () => {
        let node = head.reference;
        let count = 0
        while (node) {
            count++
            node = node.nextNode
        }
        return count
    }

    const clear = () => {
        head.reference = null
    }

    const getLast = () => {

        let lastNode = head.reference
        let node = head.reference

        while (node) {
            lastNode = node
            node = node.nextNode;
        }

        return lastNode
    }

    const getFirst = () => {
        return head.reference
    }
    const toString = () => {
        let listNode = head.reference
        let listString = ""
        while (listNode) {
            listString += `${listNode.value} ->  `
            listNode = listNode.nextNode
        }
        return listString += 'null';
    }

    const insertAt = (index, val) => {

        let listNode = head.reference;
        let count = 1
        let afterNode = null;
        while (listNode) {

            if(index == 0){
                head.reference = node(val, head.reference)
                return
            }

            if (count == index) {
                afterNode = listNode.nextNode;

                listNode.nextNode = node(val)
                // count = count + 1;
                listNode = listNode.nextNode
                listNode.nextNode = afterNode
                return
            } else {
                count = count + 1;
                listNode = listNode.nextNode
            }


            // console.log(listNode);

        }

    }

    const removeAt = (index) => {

       let listNode = head.reference;
       let count = 0;

       while(listNode){

        count = count + 1;

          if(index == 0 ){
            head.reference = listNode.nextNode
            return 
        }

       else if (count == index){
        let toBeRemovedNode = listNode.nextNode;
        listNode.nextNode = toBeRemovedNode.nextNode
        return  
       }
          
          listNode = listNode.nextNode;
        
}


        }

    

    return { head, size, clear, getLast, getFirst, prepend, append, at, pop, contains, find, toString, insertAt, removeAt }
}

let firstLinkedList = linkedList()



firstLinkedList.prepend(2)
firstLinkedList.prepend(3)
firstLinkedList.append(4)
console.log(firstLinkedList.toString());



console.log(firstLinkedList.head.reference);