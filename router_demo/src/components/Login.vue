<template>
    <h1>登录页</h1>
    <form @submit.prevent="getLogin">
        <div>
            <label for="">用户名：</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label for="">密码：</label>
            <input type="text" v-model="password">
        </div>        
        <button>登陆</button>
    </form>
</template>

<script>
    export default{
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            getLogin(){
                if(this.username === 'admin' && this.password === '123'){
                    this.$router.push('/');
                    localStorage.setItem('token','111');
                }else{
                    alert('请输入正确的用户名和密码');
                }
            }
        }
    }
</script>