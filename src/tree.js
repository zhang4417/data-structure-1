const createTree = value => {
    return {
        data: value,
        children: null,
        parent: null
    }
}
//创建树

const addChild = (tree, value) => {
    const node = {
        data: value,
        children: null,
        parent: tree
    }
    tree.children = tree.children || []
    tree.children.push(node)
    return node
}
//增添节点

const travel = (tree, fn) => {
    fn(tree)
    if (!tree.children) { return; }
    for (let i = 0; i < tree.children.length; i++) {
        travel(tree.children[i], fn)
    }

}
//遍历这个树

const find = (tree, node) => {
    if (tree === node) {
        return tree
    } else if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node)
            if (result) { return result }
        }
        return undefined
    } else {
        return undefined
    }
}
//寻找节点

const removeNode = (tree, node) => {
    const siblings = node.parent.children
    let index = 0
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] === node) {
            index = i
        }
    }
    siblings.splice(index, 1)
}
//删除node节点

const tree = createTree(10)
console.log(tree)

const node2 = addChild(tree, 20)
const node3 = addChild(tree, 30)
addChild(tree, 40)
addChild(tree, 50)
addChild(node2, 200)
addChild(node2, 201)
addChild(node2, 202)
console.log(node2)

const func = tree => {
    console.log(tree.data)
}
travel(tree, func)

console.log(find(tree, node2))

removeNode(tree, node3)
console.log(tree)