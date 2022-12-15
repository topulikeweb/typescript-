class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  // 蛇的容器
  element: HTMLElement

  constructor() {
    this.head = document.querySelector('#snake>div')!
    this.bodies = document.getElementById('snake')!.getElementsByTagName("div")
    this.element = document.querySelector('#snake')!
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
        value = this.x - 10
        // 如果新值小于旧值,说明想向右转
      } else {
        // 就让其右转
        value = this.x + 10
      }
    }
    // TODO 让除头以外的身体移动
    this.moveBody()
    // 这里要先让身体移动了才移动蛇头，因为第一个身体要代替蛇头的位置，代替了之后蛇头才能移动
    this.head.style.left = value + 'px'
    // TODO 检查是否撞墙
    this.checkHeadBody()
  }

  set y(value: number) {
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 准备向下走
      if (value > this.y) {
        value = this.y - 10
      }
      // 准备向上走
      else {
        value = this.y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }

  // 蛇增长
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    /**
     * 将后面的身体设置为前面的身体的位置，并且一定要从后向前进行修改
     */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 移动
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }

  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      if (this.x === (this.bodies[i] as HTMLElement).offsetLeft && this.y === (this.bodies[i] as HTMLElement).offsetTop) {
        throw new Error("蛇撞到自己了")
      }
    }
  }
}

export default Snake
