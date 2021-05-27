import Vue from "vue";
import VueRouter from "vue-router";
import AppPosts from "../components/AppPosts.vue";
import SinglePost from "../components/SinglePost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    name: "posts",
    component: AppPosts,
  },
  {
    path: "/posts/:id",
    name: "post",
    component: SinglePost,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
