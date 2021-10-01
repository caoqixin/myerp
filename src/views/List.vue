<template>
  <el-table
    row-key="category_id"
    ref="filterTable"
    :data="modules"
    style="width: 100%"
  >
    <el-table-column
      prop="category_name"
      label="商品管理"
      sortable
      column-key="category_id"
    >
    </el-table-column>
    <el-table-column
      prop="isModule"
      label="是否是分类"
      :filters="[
        { text: '模块', value: true },
        { text: '分类', value: false },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.isModule === true ? 'primary' : 'success'"
          disable-transitions
          >{{ scope.row.isModule ? "模块" : "分类" }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          v-if="scope.row.isModule == false"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    const modules = [
      {
        category_id: 1,
        category_name: "商品管理",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 2,
        category_name: "销售管理",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 3,
        category_name: "SIM卡管理",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 4,
        category_name: "维修中心",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 5,
        category_name: "保修中心",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 6,
        category_name: "客户管理",
        auth: "reception",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 7,
        category_name: "维修配件管理",
        auth: "repair",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 8,
        category_name: "维修管理",
        auth: "repair",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 9,
        category_name: "分类",
        auth: "admin",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 10,
        category_name: "用户管理",
        auth: "admin",
        isModule: (() => Math.random() >= 0.5)(),
      },
      {
        category_id: 11,
        category_name: "供货商管理",
        auth: "admin",
        isModule: (() => Math.random() >= 0.5)(),
      },
    ];
    return {
      modules,
    };
  },
  methods: {
    filterTag(value, row) {
      console.log(value, row);
      return row.isModule === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
</style>
