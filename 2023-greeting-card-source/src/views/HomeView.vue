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
            ??????????????? ????????? ??????????????? ?????????<br />
            ????????????????????????????????????????????????????????? ??????????????????????????????
            <br />
            <span class="text-h6"
              >??????????????????????????????????????? ???????????? 2023.1.1</span
            >
          </p>
        </div>

        <div class="annotation text-caption">??????????????????????????????????????????</div>
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
            label="????????????"
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
