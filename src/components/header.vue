<script setup lang="ts">
  import SearchIcon from '../assets/search-icon.vue';
  import BurgerMeny from '../assets/burger-menu.vue';

  const tabs = [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Cервис',
      path: '/',
    },
    {
      name: 'Контакты',
      path: '/contact-us',
    },
    {
      name: 'Каталог',
      path: '/',
    },
  ];

  const pseudoElement = () =>
    'after:content-[""] after:w-full after:h-[2px] after:bg-[#F9A37EB2]/70 absolute after:block after:invisible transition';

  const isCurrentPage = (tabName) =>
    tabName === window.location.href.split('/').pop();
</script>
<template>
  <header class="flex flex-col z-30 absolute bg-[#010608]/40 w-full">
    <div
      class="w-[1080px] pt-[35px] pb-[18px] mx-auto flex items-center justify-between"
    >
      <ul class="flex gap-[158px] items-center text-white">
        <li
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="[
            'text-lg uppercase cursor-pointer relative hover:after:visible transition',
            pseudoElement(),
            { 'after:!visible': isCurrentPage(tab.path) },
          ]"
        >
          <RouterLink :to="tab.path">{{ tab.name }}</RouterLink>
        </li>
      </ul>
      <div class="flex gap-4 items-center">
        <SearchIcon class="text-white hover:text-[#F9A37EB2] transition" />
        <BurgerMeny class="text-white hover:text-[#F9A37EB2] transition" />
      </div>
    </div>
  </header>
</template>
