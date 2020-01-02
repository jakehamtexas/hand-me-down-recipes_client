<template>
  <div class="recipes">
    <h1>This is the recipes page.</h1>
    <h2>The recipes are below</h2>
    <RecipesMain />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipesMain from "@/components/RecipesMain.vue";
export default {
  name: "dashboard",
  components: {
    RecipesMain
  }
};
</script>
