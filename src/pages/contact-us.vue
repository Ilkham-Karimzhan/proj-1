<script setup>
  import Location from '../assets/icons/MdiLocation.vue';
</script>
<template>
  <main class="h-[100vh] relative overflow-hidden">
    <section
      class="w-[1080px] mx-auto flex justify-between z-20 relative h-full items-center pt-[250px] pb-[200px] gap-[300px]"
    >
      <div class="flex flex-col w-full self-end">
        <p class="flex items-center gap-2 text-white/30">
          <Location />
          <span class="text-[16px] cormorant">kazakhstan</span>
        </p>
        <h3 class="cormorant text-white/70 text-[32px] uppercase">
          Связь с нами
        </h3>
        <p class="cormorant text-white/70 text-[20px]">
          Если у вас возникли вопросы, пожалуйста, опишите проблему, и мы
          свяжемся с вами в ближайшее время. Напишите нам на почту или позвоните
          по телефону. Мы всегда готовы помочь вам! Связь с нами
        </p>
      </div>
      <div class="bg-black/30 rounded-md p-8 min-w-[400px] flex flex-col gap-2">
        <input
          class="px-2 py-4 rounded-lg text-[18px] text-white bg-transparent border border-white/30 w-full"
          type="text"
          placeholder="Ваше имя "
        />
        <input
          class="px-2 py-4 rounded-lg text-[18px] text-white bg-transparent border border-white/30 w-full"
          type="text"
          placeholder="Телефон"
        />
        <input
          class="px-2 py-4 rounded-lg text-[18px] text-white bg-transparent border border-white/30 w-full"
          type="text"
          placeholder="Ваш email"
        />
        <p class="text-white/30">
          Email
          <a href="#" class="hover:underline transition"
            >cctvvideosafety@outlook.com</a
          >
        </p>
        <textarea
          class="px-2 py-4 rounded-lg text-[18px] text-white bg-transparent border border-white/30 w-full h-[145px]"
          placeholder="Напишите ваш вопрос"
          name=""
          id=""
        />
        <button
          class="w-[178px] py-[20px] bg-white/30 text-white/50 text-[15px] rounded-md hover:bg-white/40 transition"
        >
          Отпрпавить
        </button>
      </div>
    </section>
    <img
      src="../assets/bg-contacts.png"
      alt="camera"
      class="absolute top-0 left-0 z-10"
    />
  </main>
</template>
