<script setup lang="ts">
  const emits = defineEmits(["touched"])

  const handleTouched = () => {
    emits("touched")
  }
</script>

<template>
  <div class="welcome-page" @touchend="handleTouched">
    <div class="content">
      <div class="poem">
        <div class="vertical-text title text-h4">歡慶元旦</div>
        <div class="vertical-text first text-h3">龍騰獅舞賀豐年，</div>
        <div class="vertical-text second text-h3">四大天王展新顏。</div>
        <div class="vertical-text third text-h3">靈性盛宴迎賓客，</div>
        <div class="vertical-text fourth text-h3">百相萬行金剛禪。</div>
      </div>
      <div class="tap-screen">点击屏幕</div>
      <div class="source">南天极地大雷音寺</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .title {
    position: absolute;
    top: 25vh;
    right: 18vw;
  }

  .first {
    position: absolute;
    top: 15vh;
    right: 33vw;
  }

  .second {
    position: absolute;
    top: 15vh;
    right: 48vw;
  }

  .third {
    position: absolute;
    top: 15vh;
    right: 63vw;
  }

  .fourth {
    position: absolute;
    top: 15vh;
    right: 78vw;
  }

  .vertical-text {
    writing-mode: vertical-rl;
  }

  .welcome-page {
    position: absolute;
    height: 100vh;
    width: 100vw;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .welcome-page .tap-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: absolute;
    background-size: 100%;
    /* top: 0; */
    bottom: 15vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 45vw;
    /* height: 68vh; */
    font-size: 2rem;
    /*line-height: 4.5vh;*/
    color: rgb(17, 4, 4);
    padding-top: 25vh;
    text-align: center;
    /*兼容不同内核浏览器*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }

  .welcome-page .tap-screen:before {
    z-index: -1;
    position: absolute;
    /* top: -3vh; */
    /* bottom: 1vh; */
    left: 0;
    right: 0;
    margin: auto;
    /*伪类必须要有内容*/
    content: "";
    width: 30vw;
    height: 30vw;
    background: #f5f2f2;
    opacity: 0.5;
    -webkit-box-shadow: 0 0 10vw 10vw #f5f5f5;
    -moz-box-shadow: 0 0 10vw 10vw #f5f5f5;
    -ms-box-shadow: 0 0 10vw 10vw #f5f5f5;
    -o-box-shadow: 0 0 10vw 10vw #f5f5f5;
    box-shadow: 0 0 10vw 10vw #f5f5f5;
    border-radius: 50%;
    -webkit-animation: tap-screen 1s infinite alternate;
    -moz-animation: tap-screen 1s infinite alternate;
    animation: tap-screen 1s infinite alternate;
  }

  @keyframes tap-screen {
    0% {
      opacity: 0.7;
      -webkit-transform: scale(0.8, 0.8);
      -moz-transform: scale(0.8, 0.8);
      transform: scale(0.8, 0.8);
    }
    100% {
      opacity: 1;
    }
  }

  .source {
    position: absolute;
    bottom: 20px;
  }
</style>
