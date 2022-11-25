<template>
  <InputField
    v-if="!editLock"
    @update="editEntry($event)"
    class="border-2 rounded"
    :card-field="true"
    :value="originValue"
  />
  <div v-else>
    <h2
      class="text-2xl font-bold"
      v-if="type === 'title'"
      v-text="originValue"
    />
    <p v-else v-text="originValue" />
  </div>
</template>

<script>
import InputField from "@/components/newsfeed/InputField";
export default {
  name: "NewsItemField",
  components: { InputField },
  props: {
    originValue: { type: String, default: "" },
    editLock: { type: Boolean, default: false },
    type: { type: String, default: "" },
  },
  data() {
    return {
      value: this.originValue,
      edit: false,
    };
  },
  methods: {
    editEntry(eve) {
      this.$emit("update", eve);
      this.edit = true;
    },
  },
  watch: {
    edit() {
      this.$emit("editing");
    },
  },
};
</script>

<style scoped></style>
