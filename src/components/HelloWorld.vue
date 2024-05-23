<template>
  <div class="hello">
    <div class="greetings">
      <h1>{{ msg }}</h1>
      <h3>
        <!-- Bagian ini bisa diisi dengan konten tambahan atau slot jika diperlukan -->
        <slot></slot>
      </h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: #42b983;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
