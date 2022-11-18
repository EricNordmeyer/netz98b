<script setup lang="ts">
import FeedItem from "./FeedItem.vue";
import { useItemListStore } from '../stores/ItemList.js'
import { storeToRefs } from "pinia";

const store = useItemListStore();
const { itemList, activeItemId } = storeToRefs(store)

</script>

<template>
  <FeedItem v-for="item in itemList" :key="item.id" @click="store.activateItem(item.id)" :class="{ active: activeItemId === item.id } ">
    <template #heading>{{ item.title }}</template>
    <p v-html="item.description" />
  </FeedItem>
</template>
