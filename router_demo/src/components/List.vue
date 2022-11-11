<template>
    <h1>列表</h1>
    <ul>
        <li v-for="item in blogList">
            <router-link :to="'/Blog/' + item.id">{{item.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default{
    data(){
        return{
            blogList:[
                {id:1, title:'js入门'},
                {id:2, title:'node入门'},
                {id:3, title:'ajax入门'},
                {id:4, title:'css入门'},
            ]
        }
    }
}
</script>
