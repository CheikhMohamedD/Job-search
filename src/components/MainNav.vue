/* eslint-disable prettier/prettier */
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- le href du <a> est lie au script data() par une directive appelle le binding (v-bind) a mettre avant le href -->
        <a
          v-bind:href="url"
          class="flex items-center h-full text-xl font-bold"
          >{{ company }}</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav", // Le nom du composant qui apparaitra sur App.vue
  // Les donnees qui apparaitront sur le template via l'interpolation {{ donnee a afficher :good:}}
  data() {
    return {
      company: "SenClient",
      //pour acceder aux sous elements via la syntaxe element.sous-element
      // author: {
      //   nickname: "ZamZam",
      //   firstname: "Cheikh Mohamed",
      //   lastname: "Diack",
      // },
      url: "https://carrers.google.com",
    };
  },
};
</script>
