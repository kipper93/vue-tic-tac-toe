<template>
   <div id="test-box">
    <!--棋盘-->
    <div class="content">
      <div v-for="(row,i) in chessList"
           :key="'chessList'+i">
        <div v-for="(col,j) in row"
             :key="'row'+j"
             class="cell"
             :value="chessList[i][j]"
             @click="playChess(i,j)">
             <div class="chess"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'test-box',
  data () {
    return {
      msg: 'Tic Tac Toe',
      // 结果
      result: false,
      // 标记
      turn: 1,
      // 棋子信息
      chessList: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
  },
  methods: {
    // 结果弹窗
    resultMessageBox (message) {
      this.$alert(message, '游戏结束', {
        confirmButtonText: '确定',
        callback: action => {
          // 重置
          Object.assign(this.$data, this.$options.data())
        }
      })
    },
    // 游戏规则判断
    chessrRule () {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let list = this.chessList
          console.log(list)
          // 横向3/-3 纵向3/-3 斜下3/-3 斜上3/-3
          let rowCell = list[i][0] + list[i][1] + list[i][2] === 3 || list[i][0] + list[i][1] + list[i][2] === -3
          let colCell = list[0][j] + list[1][j] + list[2][j] === 3 || list[0][j] + list[1][j] + list[2][j] === -3
          let slantUpCell = list[2][0] + list[1][1] + list[0][2] === 3 || list[2][0] + list[1][1] + list[0][2] === -3
          let slantDownCell = list[0][0] + list[1][1] + list[2][2] === 3 || list[0][0] + list[1][1] + list[2][2] === -3
          if (rowCell || colCell || slantUpCell || slantDownCell) {
            let message = this.turn === 2 ? '黑方胜✌️' : '白方胜✌️'
            this.resultMessageBox(message)
          }
          // 平局 全部非0 和是1
          let [a, b, c] = this.chessList
          let arrList = [...a, ...b, ...c]
          let resule = arrList.filter((item) => item)
          if (resule && resule.length === 9) {
            let message = '平局'
            this.resultMessageBox(message)
          }
        }
      }
    },
    // 落子
    playChess (x, y) {
      if (this.chessList[x][y] !== 0) {
        this.$message({ message: '已经有棋子了，请重新选择位置', type: 'warning' })
      } else {
        if (this.turn === 1) {
          this.$set(this.chessList[x], y, 1)
          this.turn = 2
          this.chessrRule()
        } else {
          this.$set(this.chessList[x], y, -1)
          this.turn = 1
          this.chessrRule()
        }
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$blacSkideColor: black ;
$whiteSkideColor : white ;
$checkerboardColor : #e6a23c ;
#test-box {
  margin: 0 auto;
  .content {
    position: relative;
    margin: 0 auto;
    width: 30vw;
    height: 30vw;
    box-sizing: border-box;
    background-color: $checkerboardColor;
    cursor: pointer;
    .cell {
      position: relative;
      float: left;
      width: 10vw;
      height: 10vw;
      box-sizing: border-box;
      border: 1px solid #eee;
    }

    .cell[value="1"] .chess {
      position: absolute;
      width: 8vw;
      height: 8vw;
      top: 50%;
      left: 50%;
      margin: -4vw 0 0 -4vw;
      border-radius: 50%;
      background: $blacSkideColor;
    }

    .cell[value="-1"] .chess {
      position: absolute;
      width: 8vw;
      height: 8vw;
      top: 50%;
      left: 50%;
      margin: -4vw 0 0 -4vw;
      background: $whiteSkideColor;
      border-radius: 50%;
    }
  }
}
</style>
