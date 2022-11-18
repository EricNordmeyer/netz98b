import { defineStore } from "pinia";

export const useItemListStore = defineStore("itemList", {
  state: () => ({
    itemList: [],
    id: 0,
    activeItemId: 0
  }),
  actions: {
    addItem(item) {
      this.itemList.push({ title: item.title, description: item.description, content: item['content:encoded'], id: this.id++ });
    },
    activateItem(itemId) {
      this.activeItemId = itemId
    }
  },
  getters: {
    activeItem(state) {
      const item = this.itemList.find((obj) => obj.id === state.activeItemId);
      return item ? item : {}
    }
  }
});