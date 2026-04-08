<script setup>
const response = await fetch("http://localhost:3000/api/ping");
const data = await response.json();
</script>

<template>
  <div>
    <h1>Server API</h1>
    <p>{{ data }}</p>
  </div>
</template>
