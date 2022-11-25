<template>
  <div class="border-2 border-gray-800 p-6 mt-10 w-full mx-auto text-left">
    <div
      v-for="(item, i) in this.$props"
      :key="i"
      class="my-2"
      style="font-family: 'Courier New'"
    >
      <NewsItemField
        v-if="i !== 'id'"
        :type="i"
        :origin-value="item"
        :edit-lock="!editing"
        @editing="editItem"
        @update="setNew(i, $event)"
      />
    </div>
    <div class="flex justify-center mt-10">
      <div>
        <ButtonComponent
          v-if="!editing"
          text="Edit"
          @click="editItem"
          class="border-green-400 hover:opacity-60 rounded-lg"
        />
        <ButtonComponent
          v-else
          text="Update"
          @click="updateItem"
          class="border-green-400 hover:opacity-60 rounded-lg"
        />
      </div>
      <ButtonComponent
        class="border-red-400 hover:opacity-60 rounded-lg"
        text="delete"
        @click="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import NewsItemField from "@/components/newsfeed/NewsItemField";
import ButtonComponent from "@/components/shared/Button";
export default {
  name: "NewsCard",
  components: { ButtonComponent, NewsItemField },
  props: {
    title: { type: String, default: "" },
    body: { type: String, default: "" },
    author: { type: String, default: "" },
    id: { type: String, default: "" },
  },
  data() {
    return {
      editing: false,
      editLock: true,
      newProps: {},
    };
  },
  methods: {
    editItem() {
      this.editing = true;
    },
    deleteItem() {
      this.$store.dispatch("deleteNewsItem", { id: this.$props.id });
      this.$emit("itemDeleted");
    },
    setNew(index, value) {
      this.newProps[index] = value;
    },
    updateItem() {
      this.editing = false;
      this.$store.dispatch("updateNewsItem", {
        id: this.$props.id,
        title: this.newProps["title"]
          ? this.newProps["title"]
          : this.$props.title,
        author: this.newProps["author"]
          ? this.newProps["author"]
          : this.$props.author,
        body: this.newProps["body"] ? this.newProps["body"] : this.$props.body,
      });
      this.$emit("itemUpdated");
    },
  },
};
</script>
