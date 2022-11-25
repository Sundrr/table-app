<template>
  <table>
    <thead>
      <table-header
          :header="headerData"
          @sort="sortHandler"
      />
    </thead>
    <tbody>
      <table-row
          v-for="row in processedTableData"
          :key="row.id"
          :row="row"
      />
    </tbody>
    <tfoot >
      <table-footer @search="searchHandler"/>
    </tfoot>
  </table>
</template>

<script>
import TableHeader from "@/components/table/TableHeader";
import TableRow from "@/components/table/TableRow";
import TableFooter from "@/components/table/TableFooter";
import { headerData, tableData2 } from "@/utils/data";
import { comparator, filtrator,filterMap } from "@/utils/functions";
import { cloneDeep } from "lodash";

export default {
  name: "TableMain",

  components: { TableHeader, TableRow, TableFooter },

  props: {
    filter: { type: String },
  },

  data() {
    return {
      headerData: cloneDeep(headerData),
      tableData: tableData2,
      sort: { field: 'Data', order: 'asc' },
      search: { field: '', search: '' },
    };
  },

  computed: {
    processedTableData() {
      const data = cloneDeep(this.tableData);
      return data
          .filter(filterMap[this.filter])
          .filter(filtrator(this.search))
          .sort(comparator(this.sort));
    },
  },

  methods: {
    sortHandler(key, order) {
      Object.keys(this.headerData).forEach((key) => this.headerData[key].sort = '');
      this.headerData[key].sort = order;
      this.sort = { field: key, order };
    },
    searchHandler(search, field) {
      this.search = { search, field };
    },
  },
}
</script>

<style scoped>

</style>