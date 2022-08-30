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
    // 落子
    playChess (x, y) {
      if (this.chessList[x][y] !== 0) {
        this.$message({ message: '已经有棋子了，请重新选择位置', type: 'warning' })
      } else {
        if (this.turn === 1) {
          this.$set(this.chessList[x], y, 1)
          this.turn = 2
        } else {
          this.$set(this.chessList[x], y, -1)
          this.turn = 1
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
