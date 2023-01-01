<script setup lang="ts">
  import MusicDisk from "@/components/MusicDisk.vue"
  import WelcomeSlide from "@/components/WelcomeSlide.vue"
  import type { QCarousel } from "quasar"
  import { ref } from "vue"

  const carousel = ref<InstanceType<typeof QCarousel>>()
  const musicDiskRef = ref<InstanceType<typeof MusicDisk>>()
  const isShowArrows = ref(false)
  const isShowNavigation = ref(false)
  const isSwipeable = ref(false)
  const slide = ref("welcome")

  const autoplay = ref(false)
  const fullscreen = ref(true)

  const handleWelcomeTouched = () => {
    musicDiskRef.value?.play()
    autoplay.value = isSwipeable.value = true
    setTimeout(() => carousel.value?.next(), 200)
  }

  const handleSlidesTransition = () => {
    if (slide.value !== "welcome") {
      isShowArrows.value = true
      isShowNavigation.value = true
    } else {
      isSwipeable.value = false
      isShowArrows.value = false
      isShowNavigation.value = false
    }

    if (slide.value === "final") {
      autoplay.value = false
      isShowNavigation.value = false
    }
  }
</script>

<template>
  <div class="q-pa-md slides">
    <q-carousel
      @transition="handleSlidesTransition"
      :transition-duration="1000"
      v-model="slide"
      v-model:fullscreen="fullscreen"
      :autoplay="autoplay"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      :swipeable="isSwipeable"
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      :navigation="isShowNavigation"
      padding
      ti
      ref="carousel"
      :arrows="isShowArrows"
      height="300px"
      class="bg-dark text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="welcome" img-src="../assets/welcome-bg.jpg">
        <WelcomeSlide @touched="handleWelcomeTouched" />
      </q-carousel-slide>
      <q-carousel-slide name="gate">
        <img class="gate-img" src="../assets/gate.jpg" />
      </q-carousel-slide>
      <q-carousel-slide name="east" img-src="../assets/east-chiguo.jpg" />
      <q-carousel-slide name="south" img-src="../assets/south-zenzhang.jpg" />
      <q-carousel-slide name="west" img-src="../assets/west-guangmu.jpg" />
      <q-carousel-slide name="north" img-src="../assets/north-duoweng.jpg" />
      <q-carousel-slide name="lion-left" img-src="../assets/lion-left.jpg" />
      <q-carousel-slide name="lion-right" img-src="../assets/lion-right.jpg" />
      <q-carousel-slide name="final" img-src="../assets/final.jpg">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <div class="comment marquee">
          <p class="text-h5">
            恭祝敬爱的 薄伽梵 智及维摩诘 师尊、<br />
            全世界金刚兄弟姐妹、长老、上师、行者： 新年快乐！吉祥圆满！
            <br />
            <span class="text-h6"
              >南天极地大雷音金刚禅寺弟子 虔诚供奉 2023.1.1</span
            >
          </p>
        </div>

        <div class="annotation text-caption">配乐：金刚圣源转世者《龙乐》</div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          v-show="slide !== 'welcome' && slide !== 'final'"
          position="top-left"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
        >
          <q-toggle
            dense
            dark
            color="orange"
            v-model="autoplay"
            label="自動播放"
          />
        </q-carousel-control>
        <q-carousel-control
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
        >
          <MusicDisk ref="musicDiskRef" />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<style scoped lang="scss">
  .slides {
    width: 100vw;
    height: 100vh;
  }

  .gate-img {
    position: absolute;
    left: 0;
    top: 30vh;
    width: 100vw;
  }

  .comment {
    position: absolute;
    bottom: 100px;
    font-weight: bold;
  }

  .annotation {
    position: absolute;
    bottom: 20px;
  }

  .marquee {
    overflow: hidden;
    box-sizing: border-box;
    height: 100px;

    p {
      padding-left: 0;
      padding-top: 110px;
      animation: marquee 15s linear infinite;
    }
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }
</style>
