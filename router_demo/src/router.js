import { createRouter, createWebHashHistory } from "vue-router";
import List from "./components/List.vue";
import Blog from "./components/Blog.vue";
import Login from "./components/Login.vue";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:List
        },
        {
            path:'/Blog/:id',
            component:Blog
        },
        {
            path:'/Login',
            component:Login
        },
    ]
});

router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem('token');
    if(token || to.path === '/Login'){
        next();
    }else{
        next('/Login');
    }
})

export default router;