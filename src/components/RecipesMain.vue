<template>
  <div class="wrapper">
    <div v-for="recipe of recipes" :key="recipe.id">
      {{ JSON.stringify(recipe) }}
    </div>
  </div>
</template>
<script>
import { http } from "../common/http";
import { routes } from "../common/routes";
console.log(http);
export default {
  name: "RecipesMain",
  data: () => ({
    recipes: {
      default: () => [],
      type: Array
    }
  }),
  async created() {
    const { data } = await http.get(routes.recipe);
    this.recipes = data;
    console.log(this.recipes);
  }
};
</script>
<style lang="scss"></style>
