<template>
  <table class="search-containe">
    <thead class="bg-green-50">
      <tr>
        <th
          v-for="header in headers"
          :key="header"
          class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr v-for="row in data" :key="row.id">
        <td
          v-for="header in headers"
          :key="header"
          class="px-6 py-4 text-sm text-gray-700"
        >
          {{ row[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  data: Array,
});

// Define table headers dynamically based on the data keys
const headers = Object.keys(props.data[0] || {});
</script>