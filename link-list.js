 /**
 * Author: zh
 * Date: 2020-07-17
 * Description: 单项链表/双项链表的添加、查找、删除
 * 原文:https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
**/


/**
 * 一、单项链表 
 * */

// 节点
function Node(data) {
    this.data = data;//存储数据
    this.next = null;//指向链表中下一个节点的指针
}

// 链表
function SinglyList() {
    this._length = 0;//用于表示链表中的节点数量
    this.head = null;//分配一个节点作为链表的头
}

// 新增
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    if(!currentNode) {
        this.head = node;
        this._length++;
        return ;
    }
    while (currentNode.next) {
        currentNode = currentNode.next; 
    }
    currentNode.next = node;
    this._length++;

    return ;
};

// 查询
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
    
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
    
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

// 删除
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        prevDelNode = null,//删除节点的前面节点
        delNode = null,//删除节点
        deletedNode = null;//删除的节点
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        this._length--;
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        prevDelNode = currentNode;
        delNode = currentNode.next;
        count++;
    }
 
    prevDelNode.next = delNode.next;
    deletedNode = delNode;
    this._length--;
 
    return deletedNode;
};

var list = new SinglyList();
    list.add(1);
    list.add(2);
    list.remove(1);
    console.log(list);
    list.searchNodeAt(1);






/**
 * 二、双项链表 
 * */
function Node(value){
    this.data = value;
    this.previous = null;
    this.next = null;
}
function DoublyList(){
    this._length = 0;
    this.head = null;
    this.tail = null;
}
// 新增
DoublyList.prototype.add = function(value) {
    var node = new Node(value);
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node;
};

// 查找
DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

// 删除
DoublyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
 
        // 2nd use-case: there is a second node
        if (this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }
 
    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4th use-case: a middle node is removed
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
 
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
 
    this._length--;
 
    return message.success;
};



var list = new DoublyList();
    list.add(1);
    list.add(2);
    console.log('add',list);
    list.remove(1);
    console.log('remove',list);
    list.searchNodeAt(1);
