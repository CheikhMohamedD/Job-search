<template>
  <img
    :src="imageLink"
    alt="Profile Picture"
    class="w-8 h-8 object-cover rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://telegra.ph/file/5c9d4b1702c38b5fc224c.jpg",
    };
  },
};
</script>
