<script setup lang="ts">
import { onBeforeMount, reactive } from "@vue/runtime-core"
import FullItem from "./components/FullItem.vue";
import Feed from "./components/Feed.vue";
import FeedService from '@/services/FeedService'
import { useItemListStore } from './stores/ItemList.js'

const store = useItemListStore();
const site = reactive({ title: '', description: '' })

onBeforeMount(() => {
  getRss()
})

function getRss() {
  FeedService.getFeedItems()
  .then((rssFeed) => {
      rssFeed.rss.channel.item.forEach(element => {
        store.addItem(element)
      });
      site.title = rssFeed.rss.channel.title
      site.description = rssFeed.rss.channel.description
    } 
  )
  .catch((error) => {
    console.log(error)
  })
}

</script>

<template>
  <header>
    <h1>{{ site.title }} * {{ site.description }}</h1>
  </header>
  <div class="container">
    <div class="full-item">
      <FullItem />
    </div>
    <div class="feed">
      <Feed />
    </div>
  </div>

</template>

<style scoped>
header {
  border-bottom: solid 3px black;
  margin-bottom: .4rem;
  background-color: beige;
  padding: .4rem 1rem;
}
.container {
  display: flex;
  width: 100%;
}
.full-item {
  width: 60%;
  overflow: hidden;
}

.feed {
  width: 40%;
  height: 100%;
}
</style>
