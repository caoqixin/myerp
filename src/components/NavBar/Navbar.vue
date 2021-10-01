<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <!-- <el-scrollbar height="500px"> -->
    <el-menu
      :default-openeds="['sales-management']"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
      active-text-color="#409eff"
    >
      <el-sub-menu
        v-for="(module, key) in modules"
        :key="module.category_id"
        :index="key"
      >
        <template #title>{{ module.category_name }}</template>
        <el-menu-item
          v-for="(item, key) in modulesItems[key]"
          :key="key"
          :index="item.path"
          >{{ item.title }}</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item index="/about">
        <i class="el-icon-setting"></i>
        <template #title>About</template>
      </el-menu-item>
    </el-menu>
    <!-- </el-scrollbar> -->
  </el-aside>
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
    const modulesItems = {
      "product-management": [
        {
          path: "/product/create",
          title: "添加商品",
        },
        {
          path: "/product/all",
          title: "所有",
        },
        {
          path: "/product/phone",
          title: "手机",
        },
        {
          path: "/product/pellicola",
          title: "手机膜",
        },
        {
          path: "/product/cover",
          title: "手机壳",
        },
      ],
      "sales-management": [
        {
          path: "/sales/create",
          title: "开发票",
        },
        {
          path: "/sales/management",
          title: "账单管理",
        },
      ],
      "SIMCard-management": [
        {
          path: "/sim/create",
          title: "添加",
        },
        {
          path: "/sim/list",
          title: "列表",
        },
      ],
      "repair-center": [
        {
          path: "/repair-center/create",
          title: "接单",
        },
        {
          path: "/repair-center/list",
          title: "管理",
        },
      ],
      "warranty-center": [
        {
          path: "/warranty/create",
          title: "接单",
        },
        {
          path: "/warranty/list",
          title: "管理",
        },
      ],
      "customer-management": [
        {
          path: "/customer/create",
          title: "添加客户",
        },
        {
          path: "/customer/list",
          title: "管理客户",
        },
      ],
      "repair-parts-management": [
        {
          path: "/accessories/create",
          title: "添加配件",
        },
        {
          path: "/accessories/list",
          title: "所有",
        },
        {
          path: "/accessories/display",
          title: "屏幕",
        },
      ],
      "repair-management": [
        {
          path: "/repair/list",
          title: "手机管理列表",
        },
        {
          path: "/repair/notyet",
          title: "未修",
        },
        {
          path: "/repair/already",
          title: "已修",
        },
        {
          path: "/repair/problems",
          title: "问题",
        },
      ],
      category: [
        {
          path: "/category/create",
          title: "添加分类",
        },
        {
          path: "/category/list",
          title: "分类列表",
        },
      ],
      "user-management": [
        {
          path: "/user/create",
          title: "添加用户",
        },
        {
          path: "/user/list",
          title: "用户管理",
        },
        {
          path: "/auth/list",
          title: "权限管理",
        },
      ],
      "supplier-management": [
        {
          path: "/supplier/create",
          title: "添加供应商",
        },
        {
          path: "/supplier/list",
          title: "供应商管理",
        },
      ],
    };
    return {
      modules,
      modulesItems,
    };
  },
  methods: {
    handleOpen(index, indexPath) {
      console.log(index, indexPath);
    },
    handleClose(index, indexPath) {
      console.log(index, indexPath);
    },
  },
};
</script>

<style>
</style>