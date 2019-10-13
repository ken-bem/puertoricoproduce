import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import BlogPost from "@/views/BlogPost";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {
            path: "/",
            component: Home
        },
        {
            path: "/post/:id",
            component: BlogPost
        }
    ]


});


export default router;