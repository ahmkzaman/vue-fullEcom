<script setup>
import { ref, onBeforeMount } from "vue";
import { cart } from "../store/cart";
const products = ref([]);

onBeforeMount(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      products.value = data;
      console.log(products.value);
    });
});
</script>
<!--  -->
<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2 mx-6 mb-8 mt-6"
  >
    <div class="my-4 box" v-for="product in products" :key="product.id">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="relative">
          <img
            :src="product.image"
            alt="Product 1"
            class="w-80 h-60 object-cover"
          />
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-600 mb-2 text-center">
            {{ product.title }}
          </h2>

          <div class="flex items-center justify-between">
            <div class="text-2xl text-black font-semibold">
              ${{ product.price }}
            </div>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <button
                class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105 font-semibold"
              >
                View Details
              </button>
            </router-link>
          </div>
          <div class="mt-4 text-center">
            <button
              @click="cart.addItem(product)"
              class="bg-rose-500 hover:bg-rose-700 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--  -->
<style>
.box {
  width: 300px;
  box-shadow: #f1e6f3 0px 0px 10px;
  border: 1px solid rgb(219, 212, 212);
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

.box:hover {
  background-color: #f1e6f3;
  transform: scale(1.05);
}
</style>
