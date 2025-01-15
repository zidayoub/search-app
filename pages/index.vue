<template>
  <div class="search-page">
    <h1 class="search-page-title">Search Page</h1>
    <div class="search-page-card">
      <SearchBar @search="handleSearch" />
      
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const handleSearch = (query) => {
  // Navigate to the Results page with the search query
  router.push({ path: '/results', query: { q: query } });
};
</script>