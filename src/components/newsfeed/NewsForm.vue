<template>
  <form
    @submit.prevent="addNewNewsItem"
    class="flex flex-col items-center text-2xl"
  >
    <InputField
      class="my-2 border-2 rounded"
      v-for="(_, index) in newsItem"
      :key="index"
      type="text"
      :text="index"
      :typing="typing"
      @update="updateData(index, $event)"
    />
    <ButtonComponent
      text="Add News"
      class="bg-gray-200 my-4"
      :input-submit="true"
    />
  </form>
</template>

<script>
import InputField from "@/components/newsfeed/InputField";
import ButtonComponent from "@/components/shared/Button";
export default {
  name: "NewsForm",
  components: { ButtonComponent, InputField },
  data() {
    return {
      typing: false,
      newsItem: {
        title: "",
        body: "",
        author: "",
      },
    };
  },
  methods: {
    updateData(item, payload) {
      this.typing = true;
      switch (item) {
        case "title":
          this.newsItem.title = payload;
          break;
        case "body":
          this.newsItem.body = payload;
          break;
        case "author":
          this.newsItem.author = payload;
          break;
      }
    },
    addNewNewsItem() {
      this.$emit("itemAdded", this.newsItem);
      this.typing = false;
      this.newsItem = {
        title: "",
        body: "",
        author: "",
      };
    },
  },
};
</script>
