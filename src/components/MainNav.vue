/* eslint-disable prettier/prettier */
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- Website title -->
        <!-- le href du <a> est lie au script data() par une directive appelle le binding (v-bind) a mettre avant le href -->
        <a
          :href="url"
          class="flex items-center h-full text-xl font-bold"
          data-test="main-nav-link-item"
          >{{ company }}</a
        >
        <!-- Nav menu -->
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <!-- button sign in -->
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="main-nav-pfp-item" />
          <action-button
            v-else
            text="Sign In"
            type="secondary"
            data-test="main-nav-button-item"
            @click="loginUser"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav", // Le nom du composant qui apparaitra sur App.vue
  // Les donnees qui apparaitront sur le template via l'interpolation {{ donnee a afficher :good:}}
  components: {
    ActionButton,
    ProfileImage,
  },
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
      menuItems: [
        "Teams",
        "Locations",
        "Life at SenClient",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
