<template>
  <div
    class="w-full bg-white border-b-4 flex justify-around py-4 uppercase font-bold"
  >
    <router-link to="/">News</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/surprise">Surprise</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
