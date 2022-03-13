<script setup lang="ts">
  onMounted(() => {
    initMap();
  });

  function initMap(): void {
    const centerPosition = { lat: 35.6821873, lng: 139.7490498 };
    const markerPosition = { lat: 35.689278, lng: 139.7600751 }

    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      zoom: 14,
      center: centerPosition,
    });
    new google.maps.Marker({
      position: markerPosition,
      map: map
    });
  }
</script>

<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <span>地域の飲食店充実度を測ろう！</span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span>RestoPinとは？</span>
        </div>
      </div>
    </div>
  </nav>
  <div class="columns">
    <div class="column is-one-quarter">
      <div>
        <h2>検索条件</h2>
        <ul>
          <li>これは</li>
          <li>仮の</li>
          <li>項目</li>
        </ul>
      </div>
      <div>
        <h2>検索結果</h2>
        <ul>
          <li>これは</li>
          <li>仮の</li>
          <li>項目</li>
        </ul>
      </div>
    </div>
    <div class="column">
      <div id="map" class="embed-map"></div>
    </div>
  </div>
</template>

<style scoped>
  .embed-map {
    width: 100%;
    height: 600px;
  }
</style>
