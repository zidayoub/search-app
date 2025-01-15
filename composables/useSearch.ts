import { ref } from 'vue';

export const useSearch = () => {
  const results = ref([]);

  const search = async (query: string) => {
    // Replace with actual API call
    const response = await fetch(`/api/search?q=${query}`);
    results.value = await response.json();
  };

  return { results, search };
};