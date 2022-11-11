<template>
    <h1>博客详情：{{$route.params.id}}</h1>
    <p>{{blogContent}}</p>
</template>

<script>
    export default {
        data(){
            return{
                blogContent:''
            }
        },
        created(){
            let id = this.$route.params.id;
            this.getContentById(id);           
        },
        methods:{
            getContentById(id){
                switch(id){
                    case "1": this.blogContent = '1';break;
                    case "2": this.blogContent = '2';break;
                    case "3": this.blogContent = '3';break;
                    case "4": this.blogContent = '4';break;
                }
            }
        }

    }
</script>