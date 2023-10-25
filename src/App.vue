<script setup>
import { cart } from "./store/cart";
</script>

<template>
  <header class="bg-orange-100 shadow-md relative">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <h1 class="text-2xl font-bold text-rose-600">
            DailyShop
          </h1></router-link
        >
        <div class="mr-10 font-bold text-xl">
          <router-link to="/cart"
            >My Cart({{ cart.totalCartItems }})</router-link
          >
        </div>
      </div>
    </div>
  </header>

  <router-view></router-view>
</template>

<style scoped></style>
