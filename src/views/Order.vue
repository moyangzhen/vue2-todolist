<template>
  <div>
    <div class="left">
      下单
      <ul>
        <li v-for="(item,index) in lists" :key="'order'+index">
          <span>
            {{item.name}}-{{item.price}}
          </span>
          <span class="btn" @click="minus(item,index)">-</span>
          {{typeof item.num==='undefined'?0:item.num}}
          <span class="btn" @click="add(item,index)">+</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in orders" :key="'order'+index">
          菜品名称:{{item.name}}-菜品单价{{item.price}}-单项总价{{(item.price*item.num)}}
        </li>
      </ul>
      <p>菜单总价:{{total}}</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'OrderView',
  data () {
    return {
      lists: this.$store.state.lists
    }
  },
  // mounted () {
  //   const test = _.filter([1, 2, 3], (item) => item > 1)
  //   console.log(test)
  // },
  computed: {
    orders () {
      return _.filter(this.lists, (item) => {
        return item.num !== 'undefine' && item.num > 0
      })
    },
    total () {
      let sum = 0
      _.each(this.orders, (item) => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    minus (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      } else {
        item.num--
        if (item.num < 0) {
          item.num = 0
        }
        this.$set(this.lists, index, item)
      }
    },
    add (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      } else {
        item.num++
        if (item.num > 100) {
          item.num = 100
        }
        this.$set(this.lists, index, item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  background: #ccc;
  width: 50px;
  height: 50px;
  color: black;
}
</style>
