<script setup lang="ts">
  import Instagram from '../assets/icons/instagram.vue';
  import Twitter from '../assets/icons/twitter.vue';
  import Dribble from '../assets/icons/dribble.vue';
  import Behance from '../assets/icons/behance.vue';
  import ArrowTop from '../assets/icons/arrow-top.vue';

  const socialsList = [
    {
      name: 'instagram',
      icon: Instagram,
    },
    {
      name: 'twitter',
      icon: Twitter,
    },
    {
      name: 'dribble',
      icon: Dribble,
    },
    {
      name: 'behance',
      icon: Behance,
    },
  ];

  const pagesList = ['каталог', 'сервис', 'о компании', 'Контакты'];
  const productList = [
    'для дома',
    'уличные',
    'корпоративные',
    'Констандарт такты',
  ];
  const othersList = [
    'ремонт под ключ',
    'облачные технологии',
    'Облачные видеорегистраторы (NVR)',
    'Сигнализация',
    'Облачные видеорегистраторы (NVR)',
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
<template>
  <footer class="py-10 bg-[#010608]">
    <section class="w-[1080px] mx-auto flex flex-col gap-14">
      <div class="flex justify-between items-top" id="container">
        <ul class="flex flex-col gap-4">
          <li
            v-for="(item, idx) in socialsList"
            :key="idx"
            class="flex gap-2 items-center"
          >
            <p
              class="p-[11px] rounded-full border bg-[#DAC5A70D]/5 border-[#DAC5A726]/15"
            >
              <component :is="item.icon" />
            </p>
            <p class="text-[#DAC5A799] uppercase tracking-wider cormorant">
              {{ item.name }}
            </p>
          </li>
        </ul>
        <div class="flex flex-col gap-6">
          <p class="text-[20px] leading-[28px] text-[#F1C8B2] cormorant">
            Страницы
          </p>
          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, idx) in pagesList"
              :key="idx"
              class="text-[#DAC5A799]/60 uppercase tracking-wider cormorant"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-[20px] leading-[28px] text-[#F1C8B2] cormorant">
            Камеры
          </p>
          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, idx) in productList"
              :key="idx"
              class="text-[#DAC5A799]/60 uppercase tracking-wider cormorant"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-[20px] leading-[28px] text-[#F1C8B2] cormorant">
            Другое
          </p>
          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, idx) in othersList"
              :key="idx"
              class="text-[#DAC5A799]/60 uppercase tracking-wider cormorant"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[#DAC5A799]/60 cormorant">Haven Guard company</p>
        <div class="flex items-center gap-4">
          <p class="uppercase text-[#DAC5A799]/60 cormorant">вверх</p>
          <p
            class="p-[11px] rounded-full border bg-[#DAC5A70D]/5 border-[#DAC5A726]/15 cursor-pointer hover:scale-110"
            @click="scrollTop"
          >
            <ArrowTop />
          </p>
        </div>
      </div>
    </section>
  </footer>
</template>
