<script setup>
import { reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { cart } from "../store/cart";

const route = useRoute();
const product = reactive({});
const id = route.params.id;

onBeforeMount(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      product.id = data.id;
      product.title = data.title;
      product.price = data.price;
      product.image = data.image;
      product.description = data.description;
    });
});
</script>
<!--  -->
<template>
  <div
    class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative"
  >
    <div
      class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"
    >
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div class="relative">
            <img
              :src="product.image"
              class="w-full relative z-10 rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-10">
          <div class="mb-10">
            <h1 class="font-bold uppercase text-2xl mb-5">
              {{ product.title }}
            </h1>
            <p class="text-lg">{{ product.description }}</p>
          </div>
          <div>
            <div class="inline-block align-bottom mr-5">
              <span class="text-2xl leading-none align-baseline">$</span>
              <span class="font-bold text-5xl leading-none align-baseline">{{
                product.price
              }}</span>
            </div>
            <div class="inline-block align-bottom">
              <button
                @click="cart.addItem(product)"
                class="bg-yellow-400 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
