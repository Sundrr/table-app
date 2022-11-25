<template>
  <div
      class="filter-button"
      @click="onClick"
  >
    <component :is="data.icon" :style="{ fill: data.fill }"/>
    <div>
      <p class="filter-button__title">{{ data.title }}</p>
      <p class="filter-button__description">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
import IconEven from "@/components/icons/IconEven";
import IconOdd from "@/components/icons/IconOdd";
import IconPrinter from "@/components/icons/IconPrinter";

export default {
  name: "FilterButton",

  components: { IconEven, IconOdd, IconPrinter },

  props: {
    data: { type: Object },
    filter: { type: String },
  },

  methods: {
    onClick() {
      this.$emit('update:filter', this.data.value);
    },
  },
}
</script>

<style lang="scss" scoped>
  .filter-button {
    display: flex;
    align-items: center;
    gap: 12px;
    &:hover {
      cursor: pointer;
    }
    &__title {
      margin-bottom: 4px;
       font-family: "Quicksand", sans-serif;
       font-weight: 500;
       font-size: 16px;
       color: rgba(0, 0, 0, 0.87);
    }
    &__description {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #5E6366;
    }
  }
</style>