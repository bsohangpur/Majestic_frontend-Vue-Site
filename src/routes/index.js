import { createRouter, createWebHistory } from "vue-router";
import { Home, About, Contact, Product, _404, ProductDetail } from "../pages";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/product", name: "Product", component: Product },
    {
      path: "/product/:name",
      name: "Product_Detail",
      component: ProductDetail,
    },
    { path: "/:catchAll(.*)", name: "_404", component: _404 },
  ],
});

export default route;
