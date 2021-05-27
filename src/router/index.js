import Vue from "vue";
import VueRouter from "vue-router";
import AppPosts from "../components/AppPosts.vue";
import SinglePost from "../components/SinglePost.vue";
import AddPost from "../components/AddPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/posts",
    name: "home",
  },
  {
    path: "/posts",
    name: "posts",
    component: AppPosts,
  },
  {
    path: "/posts/:id",
    name: "view",
    component: SinglePost,
  },
  {
    path: "/add",
    component: AddPost,
    name: "add",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
