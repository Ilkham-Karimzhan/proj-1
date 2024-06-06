<script setup lang="ts">
import Favourite from "../assets/icons/favourite.vue";
import Star from "../assets/icons/Star.vue";
import Tare from "../assets/icons/tare.vue";

defineProps<{ data: any, srcId: number}>()
</script>
<template>
  <div class="bg-white w-fit mr-4">
    <img :src="`src/assets/catalog/product-${srcId}-${data.src}.jpg`" alt="">
    <div class="flex flex-col gap-2 p-4">
      <p class="text-[#141414] montserrat text-[20px] font-semibold">{{ data.name }}</p>
      <div class="flex justify-between text-[#ABABAB] montserrat font-semibold">
        <p>{{ data.size }}</p>
        <p>{{ data.material }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-2">
          <star v-for="self in 5"/>
        </div>
        <p class="montserrat text-[#ABABAB]">{{ data.rateCount }} отзывов</p>
      </div>
      <hr class="border border-[#141414]/50">
      <div class="flex justify-between items-center">
        <p class="text-[#141414] montserrat text-[20px] font-semibold">{{ data.price }} тг.</p>
        <div class="flex gap-2 items-center">
          <tare/>
          <favourite/>
        </div>
      </div>
      <button
          class="block h-10 bg-[#C49168] hover:bg-[#C49168]/80 transition text-white rounded-md shadow-lg shadow-[#E8AA316E] cursor-pointer">
        В Корзину
      </button>
    </div>
  </div>
</template>
