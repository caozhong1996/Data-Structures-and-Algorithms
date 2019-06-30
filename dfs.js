let a = [0, 0, 0]
let b = [0, 0, 0]
let n = 3 // 有几个可以遍历的位置

//step 为当前插入到第几个元素
function dfs(step) {
    // 如果触及终点
    if (step === n) {
        console.log(`${a.join(',')}`)
        return
    }
    // 每次从头至尾去尝试
    for (let index = 0; index <n; index++) {
        // 如果当前这个位置没有插入元素
        if (b[index] === 0) {
            // 在这个位置插入元素
            a[step] = index + 1
            // 这个位置标记为已插入
            b[index] = 1
            // 继续下一步遍历
            dfs(step + 1)
            // 退回刚才的插入尝试另外的做法
            b[index] = 0
        }
    }
}

dfs(0)