<script setup lang="ts">
const config = useRuntimeConfig()
const srcUrl = `https://www.google.com/maps/embed/v1/place?key=${config.MAPS_EMBED_API}&q=東京都千代田区1-1-1`
</script>

<template>
  <iframe class="embed-map" loading="lazy" allowfullscreen :src="srcUrl" />
</template>

<style scoped>
.embed-map {
  width: 100%;
  height: 100%;
}
</style>
