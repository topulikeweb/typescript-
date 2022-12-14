class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  // 蛇的容器
  element: HTMLElement

  constructor() {
    this.head = document.querySelector('#snake>div')
    this.bodies = document.getElementById('snake')!.getElementsByTagName("div")
    this.element = document.querySelector('#snake')
  }

// 获取蛇头的坐标
  get x() {
    return this.head.offsetLeft
  }

  get y() {
    return this.head.offsetTop
  }

  set x(value: number) {
    // 如果现在蛇头的坐标和改变的坐标相等
    if (this.x === value) {
      return
    }
    // 如果数据是不合法的
    if (value > 290 || value < 0) {
      alert('蛇撞墙了')
    }
    // 蛇在向左行进的时候不能向右行动
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.x) {
        // 继续向左行驶
        value = this.x + 10
        // 如果新值小于旧值,说明想向右转
      } else {
        // 就让其右转
        value = this.x - 10
      }
      // TODO 让除头以外的身体移动
      // this.moveBody
      // 这里要先让身体移动了才移动蛇头，因为第一个身体要代替蛇头的位置，代替了之后蛇头才能移动
      this.head.style.left = value + 'px'
      // TODO 检查是否撞墙
    }
  }
}

export default Snake
