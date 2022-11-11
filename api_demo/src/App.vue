<template>
  <h1>苹果五块一斤</h1>
  <button @click="decrease">-</button>
  <span>{{num}}</span>
  <button @click="increase">+</button>
  <h1>总价：{{totalPrice}}</h1>
</template>

<script>
import{ref, reactive, computed} from 'vue'
import counter from './components/counter.js'

export default {
  setup(){
    const num = ref(0);
    const {decrease, increase} = counter(num);
    const totalPrice = computed(()=>{
      return num.value * 5;
    })
    
    return{
      num,
      decrease,
      increase,
      totalPrice
    }
  } 
}
</script>
