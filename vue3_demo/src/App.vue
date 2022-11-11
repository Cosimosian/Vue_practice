<template>
  <component v-for="item in list" :is="item">
  </component>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { computed } from '@vue/reactivity';
import MyTop from './components/MyTop.vue'
import MyBanner from './components/MyBanner.vue'

export default {
  name: 'App',
  data(){
    return{
        list:[
        "MyBanner",
        "MyTop",
      ]
    }

  },
  components: {
    // HelloWorld
    MyTop,
    MyBanner
  },
  computed:{
    num(){
      return sum();
    }
  }
}
</script>
