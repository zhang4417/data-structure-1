const createList = value => {
    return {
        data: value,
        next: null
    }
}
//创建一个原始链表

const appendList = (list, value) => {
    let node = createList(value)
    //这里不能省略变量node
    while (list.next) {
        list = list.next
    }
    list.next = node
    return node
}
//增添原始链表的节点

const removeList = (list, node) => {
    let p = null;
    while (list !== node) {
        p = list;
        list = list.next;
    }
    p.next = list.next;
}
//删除node节点

const travelList = (list, fn) => {
    while (list !== null) {
        fn(list)
        list = list.next
    }
}

list = createList(10)
//调用原始链表函数

node2 = appendList(list, 20)
node3 = appendList(list, 30)
node4 = appendList(list, 40)
//调用增加节点函数，得到node,同时给list.next赋值新的节点

removeList(list, node2)
console.log(list)
travelList(list, node => {
    console.log(node.date)
})