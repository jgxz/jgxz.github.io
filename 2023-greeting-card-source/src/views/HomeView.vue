<script setup lang="ts">
  import MusicDisk from "@/components/MusicDisk.vue"
  import Welcome from "@/components/Welcome.vue"
  import type { QCarousel } from "quasar"
  import { ref } from "vue"

  const carousel = ref<InstanceType<typeof QCarousel>>()
  const musicDiskRef = ref<InstanceType<typeof MusicDisk>>()
  const isShowArrows = ref(false)
  const isShowNavigation = ref(false)
  const slide = ref(0)

  const autoplay = ref(false)
  const fullscreen = ref(true)

  const handleWelcomeTouched = () => {
    console.log("p")

    musicDiskRef.value?.play()
    autoplay.value = true
    carousel.value?.next()
  }

  const handleSlidesTransition = () => {
    if (slide.value !== 0) {
      isShowArrows.value = true
      isShowNavigation.value = true
    } else {
      isShowArrows.value = false
      isShowNavigation.value = false
    }

    if (slide.value === 7) {
      autoplay.value = false
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
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      :navigation="isShowNavigation"
      padding
      ti
      ref="carousel"
      :arrows="isShowArrows"
      height="300px"
      class="bg-purple text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide :name="0" img-src="../assets/welcome_bg.jpg">
        <Welcome @touched="handleWelcomeTouched" />
      </q-carousel-slide>
      <q-carousel-slide :name="1" img-src="../assets/dongfang_chiguo.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/nanfang_zenzhang.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/xifang_guangmu.jpg" />
      <q-carousel-slide :name="4" img-src="../assets/beifang_duoweng.jpg" />
      <q-carousel-slide :name="5" img-src="../assets/lion_left.jpg" />
      <q-carousel-slide :name="6" img-src="../assets/lion_right.jpg" />
      <q-carousel-slide :name="7" img-src="../assets/final.jpg">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <div class="comment">
          <div class="text-h5">恭祝敬愛的 薄伽梵 智及維摩詰 師尊、</div>
          <br />
          <div class="text-h5">
            恭祝敬愛的 薄伽梵 智及維摩詰 師尊、
            全世界金剛兄弟姐妹、長老、上師、行者： 新年快樂！吉祥圓滿！
          </div>
          <br />
          <div class="text-h6">
            南天極地大雷音金剛禪寺弟子 虔誠供奉 2023.1.1
          </div>
        </div>
        <div class="annotation text-caption">配樂：金剛聖源轉世者《龍樂》</div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          v-show="slide !== 0 && slide !== 7"
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
  .logo {
    position: absolute;
    top: 10px;
  }
  .slides {
    width: 100vw;
    height: 100vh;
  }

  .comment {
    position: absolute;
    bottom: 100px;
  }

  .annotation {
    position: absolute;
    bottom: 20px;
  }
</style>
