<script setup>
import { cart } from "../store/cart.js";
</script>

<template>
  <div class="bg-white">
    <div class="ml-10 mr-8 px-12 py-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>
      <p class="my-10"></p>
      <div>
        <div class="flex items-center my-5" v-for="item in cart.items">
          <p class="w-2/3">
            <router-link
              :to="{ name: 'product', params: { id: item.product.id } }"
            >
              {{ item.product.title }}
            </router-link>
          </p>
          <p class="w-[100px]">
            {{ item.product.price }}
          </p>
          <p>
            <input type="number" v-model="item.quantity" />
          </p>
        </div>
        <div class="flex items-center my-5">
          <p class="w-2/3">Total</p>
          <p class="w-[100px]"></p>
          <p>
            <strong>{{ cart.totalPrice }}</strong>
          </p>
        </div>
        <button
          @click="cart.saveCartInLocalStorage()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Cart
        </button>

        <button
          @click="cart.emptyCart()"
          class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Empty Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
