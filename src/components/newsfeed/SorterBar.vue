<template>
  <div class="flex items-center">
    <ButtonComponent
      v-for="(item, i) in sorters"
      :key="i"
      :active="item === activeSorter"
      :text="item"
      :filter-b="true"
      @click="setSorting(item)"
    />
    <div :class="sorting ? 'visible' : 'invisible'" class="flex flex-col mx-4">
      <button
        class="transition duration-400"
        :class="`${sortingDirection === 'desc' ? 'opacity-50' : ''}`"
      >
        <img
          src="@/assets/img/arrow-232.svg"
          height="20"
          width="20"
          alt="arrow up"
          class="-rotate-90"
          @click="setSortingDirection('asc')"
        />
      </button>
      <button
        class="transition duration-400"
        :class="`${sortingDirection === 'asc' ? 'opacity-50' : ''}`"
      >
        <img
          src="@/assets/img/arrow-232.svg"
          height="20"
          width="20"
          alt="arrow down"
          class="rotate-90"
          @click="setSortingDirection('desc')"
        />
      </button>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/shared/Button";
export default {
  name: "SorterBar",
  components: { ButtonComponent },
  props: {
    sorters: { type: Array, default: () => [] },
    sorting: { type: Boolean, default: false },
  },
  data() {
    return {
      activeSorter: "",
      sortingDirection: "asc",
    };
  },
  methods: {
    setSorting(item) {
      this.activeSorter = item;
      this.$emit("sorted", item);
    },
    setSortingDirection(direction) {
      this.sortingDirection = direction === "desc" ? "desc" : "asc";
      this.$emit("sortingDirectionChanged", this.sortingDirection);
    },
  },
};
</script>

<style scoped></style>
