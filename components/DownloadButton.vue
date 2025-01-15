<template>
  <button
    @click="handleDownload"
    class="search-button"
  >
    Download Report
  </button>
</template>

<script setup>
import Papa from 'papaparse';

defineProps({
  data: Array,
});

const handleDownload = () => {
  const csv = Papa.unparse(props.data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'report.csv';
  link.click();
  URL.revokeObjectURL(url);
};
</script>