<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 1rem;
  display: flex;
  margin-left: 2rem;
  border-radius: 5px;
  padding: .2rem 1rem .5rem;
}

.item:hover {
  box-shadow: 0px 0px 20px gray;
}
.item.active {
  background-color: beige;
}
.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
