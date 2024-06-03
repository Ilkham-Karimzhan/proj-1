<script setup lang="ts">
  import AButton from './AButton.vue';
</script>
<template>
  <section class="py-[40px] bg-[#040F15]">
    <ul class="w-[1080px] mx-auto flex flex-col gap-[100px]">
      <li class="flex items-center justify-between gap-[120px]">
        <img
          class="w-[500px]"
          src="/src/assets/camera-1.png"
          alt="night camera"
        />
        <div class="flex flex-col gap-4 w-[400px]">
          <h4 class="cormorant-bold text-[28px] text-[#F1C8B2]">
            Уличные камеры видеонаблюдения
          </h4>
          <p class="text-[#BF867E]/80 text-[16px]">
            Полный контроль безопасности: Установите современные уличные камеры
            видеонаблюдения и сигнализации с удаленным доступом.
          </p>
          <AButton class="text-black w-[155px] bg-[#F1C8B2]">Далее</AButton>
        </div>
      </li>
      <li class="flex items-center justify-between gap-[80px]">
        <div class="flex flex-col gap-4 w-[320px]">
          <h4 class="cormorant-bold text-[28px] text-[#F1C8B2]">
            Камеры видеонаблюдения для дома
          </h4>
          <p class="text-[#BF867E]/80 text-[16px]">
            Безопасность на расстоянии одного клика: легко подключаемое и
            управляемое видеонаблюдение с интеллектуальными камерами для полного
            контроля 24/7.
          </p>
          <AButton class="text-black w-[155px] bg-[#F1C8B2]">Далее</AButton>
        </div>
        <img
          class="w-[500px]"
          src="/src/assets/camera-2.png"
          alt="night camera"
        />
      </li>
      <li class="flex items-center justify-between gap-[120px]">
        <img
          class="w-[500px]"
          src="/src/assets/camera-3.png"
          alt="night camera"
        />
        <div class="flex flex-col gap-4 w-[400px]">
          <h4 class="cormorant-bold text-[28px] text-[#F1C8B2]">Сервис</h4>
          <p class="text-[#BF867E]/80 text-[16px]">
            Монтаж систем видеонаблюдения и сигнализации любой сложности:
            проектирование, установка и обслуживание для контроля и
            безопасности.
          </p>
          <AButton class="text-black w-[155px] bg-[#F1C8B2]">Далее</AButton>
        </div>
      </li>
    </ul>
  </section>
</template>
