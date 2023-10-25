import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Cart from "../components/Cart.vue";

const routes = [
    {path: "/", component: ProductList},
    {path: "/cart", component: Cart},
    {path: "/product/:id", component: ProductDetails, name: "product"},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;