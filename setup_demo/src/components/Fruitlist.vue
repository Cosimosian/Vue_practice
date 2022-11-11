<template>
    <h1>水果计价器</h1>
    <form @submit.prevent="insert">
        <div>
            <span>水果名称：</span>
            <input type="text" v-model="name">
        </div>
        <div>
            <span>价格：</span>
            <input type="text" v-model="price">
        </div>
        <button>加入列表</button>        
    </form>
    <ul>
        <li v-for="item, index in list">
            名称：{{item.name}}
            单价：{{item.price}}
            <button @click="decrease(index)">-</button>
            <span>{{item.count}}</span>
            <button @click="increase(index)">+</button>
        </li>
    </ul>
    <h1>总价：{{totalPrice}}</h1>
</template>

<script>
import{ref, reactive, computed} from 'vue';

export default{
    setup(){
        const name = ref('');
        const price = ref(0);
        const list = reactive([]);
        const totalPrice = computed(()=>{
            let sum = 0;
            list.forEach(v=>{
                sum += v.price * v.count;
            })
            return sum;
        })
        function insert(){
            const fruit = reactive({
                name:name.value,
                price:price.value,
                count:1
            })
            list.push(fruit);
        }
        function decrease(i){
            list[i].count --;
            if(list[i].count === 0 && confirm('要删除吗？')){
                list.splice(i, 1);
            }
        }
        function increase(i){
            list[i].count ++;
        }  

        return{
            name,
            price,
            list,
            totalPrice,
            insert,
            increase,
            decrease
        }
    }
}

</script>