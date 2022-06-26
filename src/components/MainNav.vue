/* eslint-disable prettier/prettier */
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- le href du <a> est lie au script data() par une directive appelle le binding (v-bind) a mettre avant le href -->
        <a :href="url" class="flex items-center h-full text-xl font-bold">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li class="h-full">
              <a href="" class="flex items-center h-full py-2.5">Teams</a>
            </li>
            <li class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5">Locations</a>
            </li>
            <li class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5"
                >Life at SenClient</a
              >
            </li>
            <li class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5">How we hire</a>
            </li>
            <li class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5">Students</a>
            </li>
            <li class="h-full ml-9">
              <a href="" class="flex items-center h-full py-2.5">Jobs</a>
            </li>
          </ul>
        </nav>
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
      url: "https://careers.google.com",
    };
  },
};
</script>
