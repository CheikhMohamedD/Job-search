<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",

  props: ["text", "type"],

  //la proprietes Computed permet d'avoir des donnees dynamiques comme sur notre exemple de la surface
  /** Primary est une donnee qui switch dans le data() mais dans le computed il prendra la modification du changement d'etat. false or true */
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
        // primary: this.type === "primary", // true
        // secondary: this.type === "secondary", // false if primary is true and visa versa
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
