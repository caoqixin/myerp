<template>
  <el-form ref="form" :model="form" label-width="90px">
    <el-form-item :label="form.isModule ? '模块名称' : '分类名称'">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item :label="form.isModule ? '所属模块' : '所属权限'">
      <el-select
        v-if="form.isModule == false"
        v-model="form.modules"
        placeholder="请选择所属模块"
      >
        <el-option
          v-for="module in modules"
          :key="module.category_id"
          :label="module.category_name"
          :value="module.category_name"
        ></el-option>
      </el-select>
      <el-select
        v-if="form.isModule == true"
        v-model="form.modules"
        placeholder="请选择所属权限"
      >
        <el-option
          v-for="auth in allAuth"
          :key="auth.id"
          :label="auth.auth_name"
          :value="auth.auth_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否是模块">
      <el-switch v-model="form.isModule"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    const modules = {
      "product-management": {
        category_id: 1,
        category_name: "商品管理",
        auth: "reception",
      },
      "sales-management": {
        category_id: 2,
        category_name: "销售管理",
        auth: "reception",
      },
      "SIMCard-management": {
        category_id: 3,
        category_name: "SIM卡管理",
        auth: "reception",
      },
      "repair-center": {
        category_id: 4,
        category_name: "维修中心",
        auth: "reception",
      },
      "warranty-center": {
        category_id: 5,
        category_name: "保修中心",
        auth: "reception",
      },
      "customer-management": {
        category_id: 6,
        category_name: "客户管理",
        auth: "reception",
      },
      "repair-parts-management": {
        category_id: 7,
        category_name: "维修配件管理",
        auth: "repair",
      },
      "repair-management": {
        category_id: 8,
        category_name: "维修管理",
        auth: "repair",
      },
      category: {
        category_id: 9,
        category_name: "分类",
        auth: "admin",
      },
      "user-management": {
        category_id: 10,
        category_name: "用户管理",
        auth: "admin",
      },
      "supplier-management": {
        category_id: 11,
        category_name: "供货商管理",
        auth: "admin",
      },
    };
    const allAuth = [
      {
        id: 0,
        auth_name: "admin",
      },
      {
        id: 1,
        auth_name: "reception",
      },
      {
        id: 2,
        auth_name: "repair",
      },
    ];
    return {
      form: {
        name: "",
        modules: "",
        isModule: false,
      },
      modules,
      allAuth,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
</style>
