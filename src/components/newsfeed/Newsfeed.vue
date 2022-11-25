<template>
  <div class="mx-auto mb-40 flex flex-col items-center max-w-[600px]">
    <h1 class="text-5xl tracking-wider my-12">NEWS! NEWS! NEWS!</h1>
    <div class="flex flex-col justify-center items-center">
      <div class="w-full">
        <NewsForm
          v-if="addingNew"
          class="mt-6"
          @itemAdded="addNewItemToStore($event)"
        />
        <ButtonComponent
          class="border-gray-800 hover:opacity-60"
          v-else
          text="Create News"
          @click="addingNew = true"
        />
      </div>
      <InputField
        class="my-10 pb-2 text-center text-4xl border-b-2 border-gray-800 border-b search-bar"
        text="search by title"
        type="search"
        @update="setSearch($event)"
      />
      <SorterBar
        @sorted="setSorting($event)"
        @sortingDirectionChanged="setSortingDirection($event)"
        :sorters="sorters"
        :sorting="sorting"
      />
    </div>
    <div
      v-for="(n, i) in itemsToShow"
      :key="i"
      class="flex justify-center px-10 w-full"
    >
      <NewsCard
        @itemDeleted="setItemsToShow"
        @itemUpdated="setItemsToShow"
        :title="n.title"
        :body="n.body"
        :author="n.author"
        :id="n.id"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewsCard from "@/components/newsfeed/NewsCard";
import NewsForm from "@/components/newsfeed/NewsForm";
import InputField from "@/components/newsfeed/InputField";
import SorterBar from "@/components/newsfeed/SorterBar";
import ButtonComponent from "@/components/shared/Button";

export default {
  name: "NewsfeedComponent",
  components: { ButtonComponent, SorterBar, InputField, NewsForm, NewsCard },
  data() {
    return {
      sorters: ["title", "author", "body"],
      search: "",
      sorting: false,
      sortingProperty: "",
      itemsToShow: [],
      sortingDirection: "asc",
      addingNew: false,
    };
  },
  methods: {
    setSearch(eve) {
      this.search = eve;
      this.itemsToShow = this.filteredNews;
    },
    sort(property) {
      this.itemsToShow = this.$store.getters.sortBy(
        this.search,
        property,
        this.sortingDirection
      );
    },
    setSorting(property) {
      this.sorting = true;
      this.sortingProperty = property;
      this.sort(property);
    },
    setItemsToShow() {
      this.sorting
        ? this.sort(this.sortingProperty)
        : (this.itemsToShow = this.news.reverse());
    },
    addNewItemToStore(item) {
      this.$store.dispatch("addNewNews", item);
      this.setItemsToShow();
      this.addingNew = false;
    },
    setSortingDirection(direction) {
      this.sortingDirection = direction;
    },
  },
  watch: {
    sortingDirection() {
      this.sort(this.sortingProperty);
    },
  },
  mounted() {
    this.itemsToShow = this.news.reverse();
  },
  computed: {
    ...mapState(["news"]),
    filteredNews() {
      return this.$store.getters.filteredByTitle(this.search);
    },
  },
};
</script>
<style>
.search-bar:focus {
  outline: none;
}
</style>
