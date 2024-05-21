class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
    }
}

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    if (!root) return null

    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    if (!root.left && !root.right && root.val === target) {
        return null
    }

    return root
};