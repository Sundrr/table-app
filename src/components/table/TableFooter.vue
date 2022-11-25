<template>
  <tr class="table-footer">
    <td>
      <div class="wrapper-title">
        <input
            v-model="searchParams.data.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.data.field)"
        >
      </div>
    </td>
    <td>
      <div class="wrapper">
        <input
            v-model="searchParams.summary1.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.summary1.field)"
        >
      </div>
    </td>
    <td>
      <div class="wrapper">
        <input
            v-model="searchParams.summary2.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.summary2.field)"
        >
      </div>
    </td>
    <td>
      <div class="wrapper">
        <input
            v-model="searchParams.summary3.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.summary3.field)"
        >
      </div>
    </td>
    <td>
      <div class="wrapper">
        <input
            v-model="searchParams.summary4.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.summary4.field)"
        >
      </div>
    </td>
    <td>
      <div class="wrapper">
        <input
            v-model="searchParams.summary5.search"
            type="text"
            placeholder="Search..."
            class="table-footer__input"
            @focus="onFocus"
            @input="onInput($event, searchParams.summary5.field)"
        >
      </div>
    </td>
  </tr>
</template>

<script>
import {debounce} from "lodash";

export default {
  name: "TableFooter",

  data() {
    return {
      searchParams: {
        data: { search: '', field: 'data'},
        summary1: { search: '', field: 'summary1'},
        summary2: { search: '', field: 'summary2'},
        summary3: { search: '', field: 'summary3'},
        summary4: { search: '', field: 'summary4'},
        summary5: { search: '', field: 'summary5'},
      },
    };
  },

  methods: {
    onFocus() {
      Object.keys(this.searchParams).forEach((key) => this.searchParams[key].search = '');
      this.$emit('search', '', 'data');
    },
    onInput: debounce(function(event, field) {
      this.$emit('search', event.target.value, field);
    }, 500),
  },
}
</script>

<style lang="scss" scoped>
  .table-footer {
    height: 60px;
    &__input {
      height: 32px;
      padding-left: 12px;
      outline: none;
      border: 1px solid #C6CACC;
      border-radius: 10px;
      width: 80%;
      background: transparent;
      cursor: inherit;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
      &::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
      }
     }
  }

  .wrapper {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .wrapper-title {
    height: 100%;
    display: flex;
    justify-content: flex-start;
  }
</style>