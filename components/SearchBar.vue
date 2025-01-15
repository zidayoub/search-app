<template>
  <div class="search-container">
    <input
      v-model="query"
      type="text"
      placeholder="Enter search query (name or ID)"
      class="search-input"
    />
    <button
      @click="emitSearch"
      class="search-button"
    >
      Search
    </button>
  </div>
</template>

<script setup>
const query = ref('');

const emit = defineEmits(['search']);

const emitSearch = () => {
  if (query.value.trim()) {
    emit('search', query.value);
  }
};
</script>