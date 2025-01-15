<template>
  <div class="results-page">
    <div class="results-page-container">
      <h1 class="results-page-title">Search Results</h1>
      <DataTable :data="filteredResults" />
      <div class="results-page-button-container"> <!-- Increased gap between buttons -->
        <DownloadButton :data="filteredResults" />
        <button
          @click="goToSearch"
          class="results-page-button-container"
        >
          Back to Search
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { q } = useRoute().query;
const router = useRouter();

// Simulate fetching search results (replace with actual API call)
const allResults = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
]);

// Filter results based on the search query
const filteredResults = computed(() => {
  if (!q) return allResults.value; // If no query, return all results

  const lowerCaseQuery = q.toLowerCase();

  return allResults.value.filter((item) => {
    return (
      item.id.toString().includes(lowerCaseQuery) || // Search by ID
      item.name.toLowerCase().includes(lowerCaseQuery) // Search by name
    );
  });
});

// Function to navigate back to the Search Page
const goToSearch = () => {
  router.push('/');
};
</script>