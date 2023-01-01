<script setup lang="ts">
  import { onMounted, ref } from "vue"
  const classPlay = "play"
  const classStop = "stop"

  const audio = ref<HTMLAudioElement>()
  const audioClass = ref(classStop)

  var music: any = null
  var musicPlay: any = null

  onMounted(() => {
    music = document.getElementById("music")
    musicPlay = document.getElementById("music_play")
  })

  const handleTouched = () => {
    var classs = musicPlay.getAttribute("class")
    if (classs === "first_play") {
      audio.value?.pause()
      audioClass.value = classPlay
      setTimeout(function () {
        if (musicPlay) {
          musicPlay.setAttribute("class", "first_no_play")
        }

        if (music) {
          music.style.animationPlayState = "running"
        }
      }, 1000)
    } else {
      audio.value?.play()
      audioClass.value = classStop
      if (musicPlay) {
        musicPlay.setAttribute("class", "first_play")
      }
      if (music) {
        music.setAttribute("class", "play")
      }

      setTimeout(function () {
        if (music) {
          music.style.animationPlayState = "running"
        }
      }, 1000)
    }
  }

  const play = () => {
    var classs = musicPlay.getAttribute("class")
    if (classs !== "first_play") {
      handleTouched()
    }
  }

  defineExpose({ play })
</script>

<template>
  <div class="music" @touchend="handleTouched">
    <img
      id="music_play"
      class="first first_no_play"
      src="../assets/music_pointer.png"
    />
    <img id="music" src="../assets/music_disk.svg" />
    <audio ref="audio" autoplay="true" loop>
      <source src="../assets/rise_of_dragon.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<style scoped lang="scss">
  /**
音乐图标
 */
  .music {
    z-index: 5;
    /*固定定位*/
    position: fixed;
    width: 15vw;
    height: 15vw;
    border: 3px solid red;
    border-radius: 50%;
    top: 3vh;
    right: 5vw;
    background: #ffffff;
  }
  .music > img:last-of-type {
    position: absolute;
    width: 85%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .music > img:first-of-type {
    z-index: 1;
    position: absolute;
    width: 30%;
    right: 7%;
    top: 14%;
  }
  .music > img.first {
    -webkit-transform: rotate(-50deg);
    transform-origin: 70% 0%;
    -moz-transform: rotate(-50deg);
    transform-origin: 70% 0%;
    transform: rotate(-50deg);
    transform-origin: 70% 0%;
  }
  .music > img.first_no_play {
    -webkit-transform: rotate(-50deg);
    transform-origin: 70% 0%;
    -moz-transform: rotate(-50deg);
    transform-origin: 70% 0%;
    transform: rotate(-50deg);
    transform-origin: 70% 0%;
    -webkit-animation: first_no_play 1s linear 0s 1;
    -moz-animation: first_no_play 1s linear 0s 1;
    animation: first_no_play 1s linear 0s 1;
  }
  .music > img.first_play {
    -webkit-animation: first_play 1s linear 0s 1;
    -moz-animation: first_play 1s linear 0s 1;
    animation: first_play 1s linear 0s 1;
  }
  .music #music_long {
    width: 62px;
    height: 62px;
  }

  @keyframes first_no_play {
    0% {
      -webkit-transform: rotate(0deg);
      transform-origin: 70% 0%;
      -moz-transform: rotate(0deg);
      transform-origin: 70% 0%;
      transform: rotate(0deg);
      transform-origin: 70% 0%;
    }
    100% {
      -webkit-transform: rotate(-50deg);
      transform-origin: 70% 0%;
      -moz-transform: rotate(-50deg);
      transform-origin: 70% 0%;
      transform: rotate(-50deg);
      transform-origin: 70% 0%;
    }
  }
  @keyframes first_play {
    0% {
      -webkit-transform: rotate(-50deg);
      transform-origin: 70% 0%;
      -moz-transform: rotate(-50deg);
      transform-origin: 70% 0%;
      transform: rotate(-50deg);
      transform-origin: 70% 0%;
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform-origin: 70% 0%;
      -moz-transform: rotate(0deg);
      transform-origin: 70% 0%;
      transform: rotate(0deg);
      transform-origin: 70% 0%;
    }
  }

  .top {
    display: none;
    position: absolute;
    width: 5vw;
    height: 5vw;
    background: url("../images/top.png");
    background-size: 100%;
    top: 1.5vh;
    margin: auto;
    left: 0;
    right: 0;
    -webkit-animation: change_size 1s linear 0s infinite alternate;
    -moz-animation: change_size 1s linear 0s infinite alternate;
    animation: change_size 1s linear 0s infinite alternate;
  }

  .music > img.play {
    /*keyframe名称 速度曲线 动画开始之前延迟 播放次数 */
    -webkit-animation: music_pay 6s linear 1s infinite;
    -moz-animation: music_pay 6s linear 1s infinite;
    animation: music_pay 6s linear 1s infinite;
  }
  @keyframes music_pay {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
