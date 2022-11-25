<template>
  <tr class="table-row">
    <td class="table-row__title">{{ row.data }}</td>
    <td class="table-row__value">{{ row.summary1 }}</td>
    <td class="table-row__value">{{ row.summary2 }}</td>
    <td class="table-row__value">{{ row.summary3 }}</td>
    <td class="table-row__value">{{ row.summary4 }}</td>
    <td class="table-row__value">{{ row.summary5 }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",

  props: {
    row: { type: Object },
  },
}
</script>

<style lang="scss" scoped>
 .table-row {
   height: 64px;
   font-family: "Roboto", sans-serif;
   font-weight: 500;
   font-size: 20px;
   border-top: 1px solid #E3E5E6;
   border-bottom: 1px solid #E3E5E6;
   &__title {
     width: 330px;
   }
   &__value {
     width: 120px;
     color: #5E6366;
     text-align: end;
    }
 }
</style>