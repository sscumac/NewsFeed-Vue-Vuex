<template>
  <textarea
    ref="input"
    v-if="text === 'body'"
    @input="updateInput"
    :placeholder="text"
    class="w-full p-2"
  />
  <div class="w-full" v-else>
    <input
      v-if="cardField"
      class="w-full p-2"
      ref="input"
      :type="type"
      :value="value"
      :placeholder="text"
      @input="updateInput"
    />
    <input
      v-else
      :class="type === 'search' ? 'search-bar text-center' : ''"
      ref="input"
      class="w-full p-2"
      :type="type"
      :placeholder="text"
      @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    cardField: { type: Boolean, default: false },
    text: { type: String, default: "" },
    value: { type: String, default: "" },
    type: { type: String, default: "" },
    typing: { type: Boolean, default: false },
  },
  updated() {
    if (this.typing === false) {
      this.$refs.input.value = "";
    }
  },
  methods: {
    updateInput(e) {
      this.$emit("update", e.target.value);
    },
  },
};
</script>
