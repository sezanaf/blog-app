<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <div>{{ post.text }}</div>
      <div>
        <span>Posted at {{ post.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from "../services/PostsService";
export default {
  data() {
    return {
      data: {},
    };
  },

  async created() {
    const post = await postsService.getPost();
    this.data = post;
  },
};
</script>
