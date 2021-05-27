<template>
  <div>
    <form @submit.prevent="submitForm" @reset="resetForm">
      <div>
        <label>Title</label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          type="text"
          required="required"
          v-model="post.title"
        />
      </div>
      <div>
        <label>Content</label>
        <input
          id="text"
          name="text"
          placeholder="Your content here"
          type="text"
          v-model="post.text"
        />
      </div>
      <div>
        <button name="submit" type="submit" class="btn btn-primary">
          Submit
        </button>
        <button name="reset" type="reset" class="btn btn-secondary">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import postsService from "../services/PostsService";

export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
      },
    };
  },

  async created() {
    if (this.$route.params.id) {
      const post = await postsService.getPost(this.$route.params.id);
      this.post = post;
    }
  },

  methods: {
    submitForm() {
      const post = postsService.addPost(this.post);
      this.post = post;

      this.redirectToPosts();
    },

    resetForm() {
      this.post.title = "";
      this.post.text = "";
    },

    redirectToPosts() {
      this.$router.push({ name: "posts" });
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 10px;
}

div {
  margin-bottom: 20px;
}

input {
  width: 300px;
  height: 30px;
}
</style>
