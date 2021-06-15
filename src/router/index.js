import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  // vendor
  {
    path: "/vendor/list",
    name: "List",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/vendor/create",
    name: "Create",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/vendor/product",
    name: "Product",
    component: () => import("../views/Dashboard.vue"),
  },
  // products
  {
    path: "/product/list",
    name: "All Products",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/product/create",
    name: "Add Product",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/product/more-photo",
    name: "Add More Image",
    component: () => import("../views/Dashboard.vue"),
  },
  // categories
  {
    path: "/categories/list",
    name: "All categories",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/categories/create",
    name: "Add categories",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/categories/sub-create",
    name: "Add sub categories",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/categories/sub-child-create",
    name: "Add sub child categories",
    component: () => import("../views/Dashboard.vue"),
  },
  // Location
  {
    path: "/locations/list",
    name: "All location",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/locations/create",
    name: "Add location",
    component: () => import("../views/Dashboard.vue"),
  },
  // Areas
  {
    path: "/areas/list",
    name: "All area",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/areas/create",
    name: "Add area",
    component: () => import("../views/Dashboard.vue"),
  },
  // Customers
  {
    path: "/customers",
    name: "Customers",
    component: () => import("../views/Dashboard.vue"),
  },
  // payments
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
