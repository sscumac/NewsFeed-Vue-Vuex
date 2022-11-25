<template>
  <HeaderComponent />
  <main class="mt-10">
    <router-view />
  </main>
</template>

<script>
import HeaderComponent from "@/components/header/Header";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.router-link-exact-active {
  @apply text-red-400;
}
</style>
