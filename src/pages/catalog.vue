<script lang="ts" setup>
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Star from "../assets/icons/Star.vue";
import Tare from "../assets/icons/tare.vue";
import Favourite from "../assets/icons/favourite.vue";
import {ref} from "vue";
import CatalogCard from "../components/catalog-card.vue";
import ArrowDown from "../assets/icons/arrow-down.vue";

const productLists = [
  [
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '1'
    },
    {
      name: 'TP-Link Tapo C310',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 27,
      price: 30000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 12,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
    {
      name: 'PS-link 1080P AHD102',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 6,
      price: 59000,
      src: '1'
    },
    {
      name: 'TP-Link Tapo C310',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 27,
      price: 30000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 12,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
    {
      name: 'PS-link 1080P AHD102',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 6,
      price: 59000,
      src: '1'
    },
  ],
  [
    {
      name: 'PS-Link Tapo C320W',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 8,
      price: 37000,
      src: '1'
    },
    {
      name: 'С8824WIP PS-link',
      size: '95х18',
      material: 'Железо',
      rateCount: 12,
      price: 40000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 16,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
    {
      name: 'PS-Link Tapo C320W',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 8,
      price: 37000,
      src: '1'
    },
    {
      name: 'С8824WIP PS-link',
      size: '95х18',
      material: 'Железо',
      rateCount: 12,
      price: 40000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 16,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
  ],
  [
    {
      name: 'PS-Link Tapo C320W',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 8,
      price: 37000,
      src: '1'
    },
    {
      name: 'С8824WIP PS-link',
      size: '95х18',
      material: 'Железо',
      rateCount: 12,
      price: 40000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 16,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
    {
      name: 'PS-Link Tapo C320W',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 8,
      price: 37000,
      src: '1'
    },
    {
      name: 'С8824WIP PS-link',
      size: '95х18',
      material: 'Железо',
      rateCount: 12,
      price: 40000,
      src: '2'
    },
    {
      name: 'PS-link AHD105 1056',
      size: '95х18',
      material: 'Алюминий',
      rateCount: 16,
      price: 45000,
      src: '3'
    },
    {
      name: 'TP-Link Tapo C320WS',
      size: '95х18',
      material: 'Железо',
      rateCount: 14,
      price: 27000,
      src: '4'
    },
  ]
]

function onEnterTransition(_el: Element, done: () => void) {
  const el = _el as HTMLElement
  el.style.height = '0'
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
  el.style.height = el.scrollHeight + 'px'

  el.addEventListener('transitionend', done, {once: true})
}

function onBeforeLeaveTransition(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
}

function onAfterEnterTransition(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = 'auto'
}

function onLeaveTransition(_el: Element, done: () => void) {
  const el = _el as HTMLElement
  el.style.height = '0'

  el.addEventListener('transitionend', done, {once: true})
}

const transitionClasses = {
  enterActiveClass: 'overflow-hidden transition-[height] duration-300 ease-out',
  leaveActiveClass: 'overflow-hidden transition-[height] duration-300 ease-out'
}

const slider = ref(null)

const isPanelOpen = ref(false)
</script>
<template>
  <main class="pt-[170px] bg-[#040F15] py-[126px] overflow-x-hidden">
    <div class="w-[1080px] mx-auto ">
      <div class="flex justify-center">
        <arrow-down :class="{'rotate-180': isPanelOpen}" class="cursor-pointer transition"
                    @click="isPanelOpen = !isPanelOpen"/>
      </div>
      <div class="flex flex-col gap-20">
        <Transition
            v-bind="transitionClasses"
            @enter="onEnterTransition"
            @leave="onLeaveTransition"
            @after-enter="onAfterEnterTransition"
            @before-leave="onBeforeLeaveTransition"
        >
          <ul v-if="isPanelOpen" class="grid grid-cols-3 gap-4">
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">Видеокамеры </p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Уличные
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Домашние
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Корпоративные
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">Открытое наблюдение </p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Купольные
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Цилиндрические
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>PTZ-камеры
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Фишай камеры
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">По типу передачи </p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Цифровые
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Аналоговые
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>HD-SDI, HD-CVI...
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">Скрытое наблюдение </p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Мини-камеры
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Pin-hole камеры
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">По функциональности</p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Камеры с Wi-Fi или Bluetooth
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Камеры с SD-картой
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Камеры с PIR-сенсорами
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-4 p-4 bg-white">
              <p class="text-[#000000] font-semibold cormorant text-xl">Облачные технологии</p>
              <hr class="border border-[#7C75FA] w-10">
              <ul class="flex flex-col gap-2">
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>Камеры в детекторах дыма
                </li>
                <li class="flex gap-2 items-center cormorant text-[#000000] font-semibold"><span
                    class="size-1.5 rounded-full bg-[#7C75FA]"/>С датчиком движения
                </li>
              </ul>
            </li>
          </ul>
        </Transition>
        <Carousel
            ref="slider"
            :items-to-show="4"
            snap-align="start"

        >
          <slide v-for="(data, idx) in productLists[1]" :key="idx">
            <catalog-card :data="data" :src-id="1"/>
          </slide>

          <template #addons>
            <navigation/>
            <pagination/>
          </template>
        </Carousel>

        <Carousel
            ref="slider"
            :items-to-show="4"
            snap-align="start"

        >
          <slide v-for="(data, idx) in productLists[2]" :key="idx">
            <catalog-card :data="data" :src-id="3"/>
          </slide>

          <template #addons>
            <navigation/>
            <pagination/>
          </template>
        </Carousel>

        <Carousel
            ref="slider"
            :items-to-show="4"
            snap-align="start"

        >
          <slide v-for="(data, idx) in productLists[1]" :key="idx">
            <catalog-card :data="data" :src-id="2"/>
          </slide>

          <template #addons>
            <navigation/>
            <pagination/>
          </template>
        </Carousel>
      </div>
    </div>
  </main>
</template>
<style>
:root {
  .carousel__pagination {
    margin-top: 40px;
    display: flex;
    gap: 8px
  }

  .carousel__pagination-button {
    padding: 0;
    background: #898989;
    transition: 0.3s;
  }

  .carousel__pagination-button:after {
    transition: 0.3s;
  }

  .carousel__pagination-button:hover:after {
    background: #F7C0C2;
  }

  .carousel__pagination-button--active {
    background: #F1D0B6;
  }

  .carousel__pagination-button--active::after {
    background: #F1D0B6;
  }
}
</style>
