import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TestTinEyeAPI from "./components/TestTinEyeAPI.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "",
            name: "hello_world",
            component: HelloWorld
        },
        {
            path: "/test",
            name: "TestTinEyeAPI",
            component: TestTinEyeAPI
        }

    ]
});


export default router;
