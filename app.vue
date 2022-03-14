<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import SearchBar from './components/SearchBar.vue'
import EmbedMap from './components/EmbedMap.vue'
</script>

<template>
  <TheNavbar />
  <div class="columns">
    <div class="column is-one-quarter">
      <SearchBar />
    </div>
    <div class="column">
      <EmbedMap />
    </div>
  </div>
</template>
