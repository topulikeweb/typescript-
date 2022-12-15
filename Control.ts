// 游戏控制类
import Snake from "./Snake";
import Score from "./Score";
import Food from "./Food";


class Control {
  snack: Snake
  score: Score
  food: Food
  // 储存按键的方向
  direction: string = "d"
  // 判断蛇的存活
  isLive: boolean = true

  constructor() {
    this.snack = new Snake()
    this.score = new Score(10, 10)
    this.food = new Food()
    this.init()
  }

  // 游戏初始化
  init() {
    this.food.change()
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this.keydownHandle(e);
    });
    this.run();
  }

  // 给方向赋值
  keydownHandle(event: KeyboardEvent) {
    this.direction = event.key
  }

// 检查是否吃到食物
  checkEat(X: number, Y: number) {
    // 坐标相同代表吃到了食物
    if (Boolean(X === this.food.X && Y === this.food.Y)) {
      this.snack.addBody()
      this.score.addScore()
      this.food.change()
    }
  }

  // 根据按的方向移动
  run() {
    let x = this.snack.x
    let y = this.snack.y
    switch (this.direction) {
      case "w":
      case "ArrowUp":
        y -= 10;
        break;
      case "s":
      case "ArrowDown":
        y += 10;
        break;
      case "a":
      case "ArrowLeft":
        x -= 10;
        break;
      case "d":
      case "ArrowRight":
        x += 10;
        break;
      default:
        break;
    }
    // 检查蛇头是否吃到东西
    this.checkEat(x, y)
    try {
      // 将新值赋值回去（新值就是Snake类的value）
      this.snack.x = x
      this.snack.y = y
    } catch (e) {
      console.log(e)
      // alert(e + '游戏结束')
      this.isLive = false
    }
    this.isLive &&
    setTimeout(() => {
      this.run();
    }, 100 - this.score.level * 20);
  }
}
export default Control
