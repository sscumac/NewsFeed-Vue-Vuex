<template>
  <component
    :is="inputSubmit ? 'input' : 'button'"
    :type="inputSubmit ? 'submit' : ''"
    :value="inputSubmit ? text : ''"
    :class="` ${
      filterB
        ? active
          ? 'text-gray-800 border-gray-800'
          : 'border-white text-gray-500 '
        : ''
    }`"
    class="cursor-pointer px-4 py-2 mx-2 border-2 rounded min-w-[50px] font-bold text-2xl transition duration-400"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: { type: String, default: "" },
    active: { type: Boolean, default: false },
    filterB: { type: Boolean, default: false },
    inputSubmit: { type: Boolean, default: false },
  },
};
</script>

<style scoped></style>
