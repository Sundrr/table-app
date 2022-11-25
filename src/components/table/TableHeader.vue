<template>
  <tr class="table-header">
    <td class="table-header__title">
      <div
          class="table-header__wrapper title"
          @mouseenter="onMouseEnter(header.data)"
          @mouseleave="onMouseLeave(header.data)"
      >
        <sort-menu
            :sort-data="header.data"
            @sort-column="onSort"
        />
        <p>{{ header.data.name }}</p>
      </div>
    </td>
    <td class="table-header__cell">
      <div
          class="table-header__wrapper"
          @mouseenter="onMouseEnter(header.summary1)"
          @mouseleave="onMouseLeave(header.summary1)"
      >
        <sort-menu
            :sort-data="header.summary1"
            @sort-column="onSort"
        />
        <p>{{ header.summary1.name }}</p>
      </div>
    </td>
    <td class="table-header__cell">
      <div
          class="table-header__wrapper"
          @mouseenter="onMouseEnter(header.summary2)"
          @mouseleave="onMouseLeave(header.summary2)"
      >
        <sort-menu
            :sort-data="header.summary2"
            @sort-column="onSort"
        />
        <p>{{ header.summary2.name }}</p>
      </div>
    </td>
    <td class="table-header__cell">
      <div
          class="table-header__wrapper"
          @mouseenter="onMouseEnter(header.summary3)"
          @mouseleave="onMouseLeave(header.summary3)"
      >
        <sort-menu
            :sort-data="header.summary3"
            @sort-column="onSort"
        />
        <p>{{ header.summary3.name }}</p>
      </div>
    </td>
    <td class="table-header__cell">
      <div
          class="table-header__wrapper"
          @mouseenter="onMouseEnter(header.summary4)"
          @mouseleave="onMouseLeave(header.summary4)"
      >
        <sort-menu
            :sort-data="header.summary4"
            @sort-column="onSort"
        />
        <p>{{ header.summary4.name }}</p>
      </div>
    </td>
    <td class="table-header__cell">
      <div
          class="table-header__wrapper"
          @mouseenter="onMouseEnter(header.summary5)"
          @mouseleave="onMouseLeave(header.summary5)"
      >
        <sort-menu
            :sort-data="header.summary5"
            @sort-column="onSort"
        />
        <p>{{ header.summary5.name }}</p>
      </div>
    </td>
  </tr>
</template>

<script>
import SortMenu from "@/components/elements/SortMenu";

export default {
  name: "TableHeader",

  components: { SortMenu},

  props: {
    header: { type: Object },
  },

  methods: {
    onMouseEnter(data) {
      data.show = true;
    },
    onMouseLeave(data) {
      data.show = false;
    },
    onSort(key, order) {
      this.$emit('sort', key, order);
    },
  },
}
</script>

<style lang="scss" scoped>
  .table-header {
    height: 48px;
    border-bottom: 2px solid #E3E5E6;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #919699;
    &__title {
      width: 330px;
    }
    &__cell {
      width: 120px;
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
    }

    .title {
      justify-content: start;
    }
  }
</style>