// 完成记分牌
class Score {
  score: number = 0
  level: number = 0
  ScoreEle: HTMLElement
  LevelEle: HTMLElement
  upScore: number
  maxLevel: number

  constructor(maxLevel = 10, upScore = 10) {
    this.ScoreEle = document.querySelector('.score')!
    this.LevelEle = document.querySelector('.level')!
    this.upScore = upScore
    this.maxLevel = maxLevel
  }

  addScore() {
    this.ScoreEle.innerHTML = `score${this.score}`
    // 每达到upScore就将level加一
    if (this.score % this.upScore === 0) {
      // TODO  改变等级
      this.changeLevel()
    }
  }

  changeLevel() {
    if (this.maxLevel > this.level) {
      this.ScoreEle.innerHTML = `score${++this.level}`
    }
  }
}

export default Score
