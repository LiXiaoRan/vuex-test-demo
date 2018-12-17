<template>
  <div id="childA">
    <h1>我是A组件</h1>
    <button @click="transform">点我让B组件接收到数据</button>
    <button @click="modifyArray">点击修改数组</button>
    <p>因为你点了B，所以我的信息发生了变化：{{BMessage}}</p>
    <p>监听生效了吗：{{messArray_get}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data() {
      return {
        ...mapState(["messArray"]),
        AMessage: 'Hello，B组件，我是A组件',
      }
    },
    computed: {
      ...mapGetters(['messArray_get']),
      BMessage() {
        // 这里存储从store里获取的B组件的数据
        return this.$store.state.BMsg
      },
      messArray_c(){
        return this.messArray;
      }

    },
    methods: {
      ...mapMutations(['receiveAMsg']),
      ...mapActions(['receiveAMsgA','modifyArrayA']),
      transform() {
        // 触发receiveAMsg，将A组件的数据存放到store里去
        this.receiveAMsgA({
          AMsg: this.AMessage
        })
      },

    randomArray (length) {
    let i = 0
    let index = 0
    let temp = null
    let arr = [length]
    length = typeof(length) === 'undefined' ? 9 : length
    for(i=1; i<=length; i++) {
        arr[i - 1] = i
    }
    for(i = 1; i<=length; i++) {
        index = window.parseInt(Math.random() * (length - i)) + i
        if (index != i) {
        temp = arr[i-1]
        arr[i-1] = arr[index-1]
        arr[index-1] = temp
        }
    }
    return arr
    } ,

      modifyArray(){
        let self=this
        let ranInt=Math.random()*100
        let my_array=self.randomArray(ranInt)
        this.modifyArrayA({
            messArray:my_array
        })
      }
    },
    watch:{
      // messArray: function(val){
      //   console.log("watch ChildA.vue "+val)

      // }
/*      messArray_c: {
        handler(newValue, oldValue) {
　       for (let i = 0; i < newValue.length; i++) {
　　　　　　　　if (oldValue[i] != newValue[i]) {
                  console.log(newValue)　　　　　　　　
                }
　           }

          },
          deep:true
      }*/
    
/*       messArray:function(val){

       }*/

       messArray_get : function(val){
          console.log("messArray_get "+val)
       }

    }
  }
</script>

<style>
  div#childA {
    border: 1px solid black;
  }
</style>
