class Food {
  element: HTMLElement

  constructor() {
    this.element = document.querySelector('.food')
  }

  // 获取食物的坐标
  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  // 随机改变食物的位置
  change() {
    // Math.round四舍五入
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.top = top + 'px'
    this.element.style.left = left + 'px'
  }
}

export default Food
