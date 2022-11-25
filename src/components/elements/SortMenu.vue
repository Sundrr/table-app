<template>
  <div class="sort-menu">
    <div
        class="sort-menu__wrapper"
        :class="{ 'active': sortData.sort === 'asc' }"
        @click="onClick('asc')"
    >
      <icon-arrow-up v-if="sortData.show || sortData.sort"/>
    </div>
    <div
        class="sort-menu__wrapper inverted"
        :class="{ 'active': sortData.sort === 'desc' }"
        @click="onClick('desc')"
    >
      <icon-arrow-down v-if="sortData.show || sortData.sort"/>
    </div>
  </div>
</template>

<script>
import IconArrowUp from "@/components/icons/IconArrowUp";
import IconArrowDown from "@/components/icons/IconArrowDown";

export default {
  name: "SortMenu",

  components: { IconArrowUp, IconArrowDown },

  props: {
    sortData: { type: Object },
  },

  methods: {
    onClick(order) {
      this.$emit('sort-column', this.sortData.key, order);
    },
  },
}
</script>

<style lang="scss" scoped>
  .sort-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    &__wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 20px;
      height: 16px;
      fill: #C6CACC;
    }
  }

  .inverted {
    align-items: flex-start;
  }

  .active {
    fill: #069697;
  }
</style>