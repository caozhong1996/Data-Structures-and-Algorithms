深度遍历核心模型
void dfs (step) {
  // 判断边界
  // 尝试每一种可能
  for (let i = 0; i< n; i++) {
    // 继续下一步
    dsf (step + 1)
  }
  // 返回
}