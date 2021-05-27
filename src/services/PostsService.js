import axios from "axios";

class PostsService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:3000/api/",
    });

    this.client = instance;
  }

  async getAll() {
    const { data } = await this.client.get("posts");
    return data;
  }

  async getPost(id) {
    const { data } = await this.client.get(`posts/${id}`);
    return data;
  }
}

export default new PostsService();
