 /**
 * Author: zh
 * Date: 2020-07-16
 * Description: 二叉树排序
 * @LastEditors: zh
 * @LastEditTime: 2020-07-17 
**/


// tree定义
var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
} 
// 前序遍历(根左右)：[ '-', '+', 'a', '*', 'b', 'c', '/', 'd', 'e' ]
// 中序遍历(左根右)：[ 'a', '+', 'b', '*', 'c', '-', 'd', '/', 'e' ]
// 后序遍历(左右根)：[ 'a', 'b', 'c', '*', '+', 'd', 'e', '/', '-' ]
// 广度遍历(按层遍历)：[ '-', '+', '/', 'a', '*', 'd', 'e', 'b', 'c' ]



// 先序遍历
// 1、递归
var preListRec = []; //定义保存先序遍历结果的数组
var preOrderRec = function(node) {
    if (node) { //判断二叉树是否为空
        preListRec.push(node.value); //将结点的值存入数组中
        preOrderRec(node.left); //递归遍历左子树
        preOrderRec(node.right); //递归遍历右子树
    }
}
preOrderRec(tree);
console.log(preListRec);

// 2、非递归(借用栈的先进后出的特性完成遍历)
var preListUnRec = []; //定义保存先序遍历结果的数组
var preOrderUnRecursion = function(node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        while (stack.length !== 0) { //如果栈不为空，则循环遍历
            node = stack.pop(); //从栈中取出一个结点
            preListUnRec.push(node.value); //将取出结点的值存入数组中
            if (node.right) stack.push(node.right); //如果存在右子树，将右子树压入栈
            if (node.left) stack.push(node.left); //如果存在左子树，将左子树压入栈
        }
    }
}
preOrderUnRecursion(tree);
console.log(preListUnRec);



// 中序遍历
// 1、递归(略)
// 2、非递归(借用栈的先进后出的特性完成遍历)
// 2.1、方法一
var inListUnRec = []; //定义保存中序遍历结果的数组
var inOrderUnRec = function(node) {
    if (node) { //判断二叉树是否为空
        var stack = []; //建立一个栈
        while (stack.length !== 0 || node) { //如果栈不为空或结点不为空，则循环遍历
            if (node) { //如果结点不为空
                stack.push(node); //将结点压入栈
                node = node.left; //将左子树作为当前结点
            } else { //左子树为空，即没有左子树的情况
                node = stack.pop(); //将结点取出来
                inListUnRec.push(node.value); //将取出结点的值存入数组中
                node = node.right; //将右结点作为当前结点
            }
        }
    }
}
inOrderUnRec(tree);
console.log(inListUnRec);

// 2.2、方法二
var inListUnRec=[];
function inOrderUnRec(node){
    let stack = [node];
    while(stack.length){
        let _cur = stack.pop();
        if(!_cur.left&&!_cur.right){            
            inListUnRec.push(_cur.value)
        }else{
            stack.push(_cur.right);
            stack.push({value:_cur.value});
            stack.push(_cur.left);
        };
    }
}
inOrderUnRec(tree);
console.log('inListUnRec',inListUnRec);



// 后续遍历
// 1、递归(略)
// 2、非递归(借用栈的先进后出的特性完成遍历)
// 2.1、方法一
var postListUnRec = []; //定义保存后序遍历结果的数组
var postOrderUnRec = function(node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        var tmp = null; //定义缓存变量
        while (stack.length !== 0) { //如果栈不为空，则循环遍历
            tmp = stack[stack.length - 1]; //将栈顶的值保存在tmp中
            if (tmp.left && node !== tmp.left && node !== tmp.right) { //如果存在左子树
                stack.push(tmp.left); //将左子树结点压入栈
            } else if (tmp.right && node !== tmp.right) { //如果结点存在右子树
                stack.push(tmp.right); //将右子树压入栈中
            } else {
                postListUnRec.push(stack.pop().value);
                node = tmp;
            }
        }
    }
}
postOrderUnRec(tree);
console.log(postListUnRec);

// 2.2、方法二
var list=[];
function preOrderRec(node){
    let stack = [node];
    while(stack.length){
        let _cur = stack.pop();
        if(!_cur.left&&!_cur.right){
            list.push(_cur.value)
        }else{
            stack.push({value:_cur.value})
            stack.push(_cur.right)
            stack.push(_cur.left)
        }
    }
}
preOrderRec(tree);
console.log('list',list);



// 深度遍历
// 1、递归(略)
// 2、非递归(借用队列的先先进出的特性完成遍历)
var list=[];
function orderNode(node){
    let queue=[node];
    while(queue.length){
        let _cur = queue.shift();
        if(_cur){
            list.push(_cur.value);
            _cur.left&&queue.push(_cur.left);
            _cur.right&&queue.push(_cur.right);
        }
    }
}
orderNode(tree);
console.log('list',list);