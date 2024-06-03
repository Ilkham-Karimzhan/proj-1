<script setup lang="ts">
  import Checkmark from '../assets/icons/checkmark.vue';
  import Truck from '../assets/icons/truck.vue';
  import Desc from '../assets/icons/desc.vue';
</script>
<template>
  <section class="bg-image-blue">
    <div class="flex flex-col gap-10 w-[1080px] mx-auto py-[40px]">
      <div class="flex flex-col gap-4 items-center">
        <h2 class="text-[#F1D0B6] cormorant font-medium text-[64px]">
          Haven Guard
        </h2>
        <p
          class="font-[23px] leading-[28px] cormorant w-[471px] text-[#F1D0B6] text-center"
        >
          Для нас важен каждый клиент. Мы стремимся обеспечить высокий уровень
          сервиса, предлагая индивидуальный подход к каждому. Наша цель - не
          просто продать продукт, а создать долгосрочные отношения, основанные
          на доверии и уверенности в защите.
        </p>
      </div>
      <ul class="flex items-start gap-2 justify-between">
        <li class="flex gap-2 text-center flex-col">
          <h3 class="cormorant-bold text-[#F1D086] text-[48px]">500+</h3>
          <p class="cormorant text-[#F1D086] text-center">
            Профессиональных проектов - это то, что делает нас лидерами на
            рынке. Мы разрабатываем уникальные решения для каждого клиента,
            обеспечивая качество.
          </p>
        </li>
        <li class="flex gap-2 text-center flex-col">
          <h3 class="cormorant-bold text-[#F1D086] text-[48px]">2.000.000+</h3>
          <p class="cormorant text-[#F1D086] text-center">
            Наши продукты и услуги охватывают всю территорию Казахстана. Наша
            компания - ваш надёжный партнёр в обеспечении безопасности вашего
            дома.
          </p>
        </li>
        <li class="flex gap-2 text-center flex-col">
          <h3 class="cormorant-bold text-[#F1D086] text-[48px]">30+</h3>
          <p class="cormorant text-[#F1D086] text-center">
            Наши видеокамеры - это гарантия широкого выбора и высокого качества.
            Помимо этого, мы предлагаем более 30 различных категорий товаров.
          </p>
        </li>
      </ul>
      <ul class="flex items-start justify-between">
        <li
          class="flex flex-col items-center gap-2 w-[200px] text-center text-[#F1D086]"
        >
          <Checkmark />
          <p>Гарантия 100% возврата денежных средств</p>
        </li>
        <li
          class="flex flex-col items-center gap-2 w-[169px] text-center text-[#F1D086]"
        >
          <Truck />
          <p>Доставка по всему Казахстану</p>
        </li>
        <li
          class="flex flex-col items-center gap-2 w-[208px] text-center text-[#F1D086]"
        >
          <Desc />
          <p>Возможность оформление заказа без регистрации</p>
        </li>
        <li
          class="flex flex-col items-center gap-2 w-[188px] text-center text-[#F1D086]"
        >
          <Checkmark />
          <p>Скидки постоянным покупателям.</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
  .bg-image-blue {
    background: url('../assets/bg-balck-blue.jpg') no-repeat content-box;
  }
</style>
