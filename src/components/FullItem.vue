<script setup lang="ts">

import { useItemListStore } from '../stores/ItemList.js'
import { storeToRefs } from "pinia";


const store = useItemListStore();
const { activeItem } = storeToRefs(store)

</script>

<template>
  <div>
    <h1>{{ activeItem.title }}</h1>
    <div v-html="activeItem.content" />
  </div>
</template>

<style scoped>
</style>
