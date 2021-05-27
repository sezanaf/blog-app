<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <div>{{ post.text.substr(0, 40) }}...</div>
      <!-- <div>
        <span>Posted at {{ post.createdAt }}</span>
      </div> -->
      <div>
        <router-link :to="{ name: 'view', params: { id: post.id } }"
          >View Post</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import postsService from "../services/PostsService";

export default {
  data() {
    return {
      posts: null,
    };
  },

  async created() {
    const posts = await postsService.getAll();
    this.posts = posts;
  },
};
</script>
