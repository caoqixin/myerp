import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "home",
        component: () => import("../views/List.vue"),
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ]
  },
  {
    path: "/category",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "list",
        component: () => import("../views/List.vue"),
      }
    ]
  },
  {
    path: "/product",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "all",
        component: () => import("../views/List.vue"),
      },
      {
        path: "phone",
        component: () => import("../views/List.vue"),
      },
      {
        path: "pellicola",
        component: () => import("../views/List.vue"),
      },
      {
        path: "cover",
        component: () => import("../views/List.vue"),
      }
    ]
  },
  {
    path: "/sales",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "management",
        component: () => import("../views/List.vue"),
      }
    ]
  },
  {
    path: "/sim",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "list",
        component: () => import("../views/List.vue"),
      }
    ]
  },
  {
    path: "/repair-center",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "list",
        component: () => import("../views/List.vue"),
      }
    ]
  },
  {
    path: "/warranty-center",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "list",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/customer",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue"),
      },
      {
        path: "list",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/accessories",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue")
      },
      {
        path: "list",
        component: () => import("../views/List.vue")
      },
      {
        path: "display",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/repair",
    component: Layout,
    children: [
      {
        path: "list",
        component: () => import("../views/List.vue")
      },
      {
        path: "notyet",
        component: () => import("../views/List.vue")
      },
      {
        path: "already",
        component: () => import("../views/List.vue")
      },
      {
        path: "problems",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue")
      },
      {
        path: "list",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/supplier",
    component: Layout,
    children: [
      {
        path: "create",
        component: () => import("../views/Create.vue")
      },
      {
        path: "list",
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/auth",
    component: Layout,
    redirect: "/auth/list",
    children: [
      {
        path: "list",
        component: () => import("../views/List.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
