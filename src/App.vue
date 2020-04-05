<template>
  <div id="app">
    <header>
      <div id="logo" class="stop playing">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
        <div class="rect6"></div>
        <div class="rect7"></div>
      </div>
      <h2>NoisyLoop</h2>
    </header>
    <main>
      <div class="wrapper">
        <audio loop id="audiotag">
          <source v-if="currentCard" :src="currentCard.audio" type="audio/mp3">
          Your browser does not support the audio tag.
        </audio>
        <div class="cards">
          <card v-for="collection in collections" :key="collection.image" :collection="collection" v-on:card-click="onCardClick" :selectedCard="currentCard"></card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import data from './db.json';
import Card from './components/Card';

export default {
  name: 'app',
  data() {
    return {
      collections: [],
      currentCard: null,
    };
  },
  created() {
    this.collections = data;
  },
  components: {
    Card,
  },
  methods: {
    onCardClick(cardIndex) {
      if (this.currentCard) {
        // Already playing song
        if (this.currentCard === this.collections[cardIndex]) {
          // Same song is paying
          // pause card
          this.pauseNoisyLoop(this.currentCard.id);
          this.currentCard = null;
        } else {
          // Different song is paying
          // pause current
          this.pauseNoisyLoop(this.currentCard.id);
          this.currentCard = null;
          // update audio tag source
          this.currentCard = this.collections[cardIndex];
          // play card
          this.playNoisyLoop(this.currentCard.id);
        }
      } else {
        // No playing song
        this.currentCard = this.collections[cardIndex];
        this.playNoisyLoop(this.currentCard.id);
      }
    },
    pauseNoisyLoop() {
      document.getElementById('audiotag').pause();
      document.getElementById('logo').classList.add('stop');
    },
    playNoisyLoop() {
      document.getElementById('audiotag').load();
      document.getElementById('audiotag').play();
      document.getElementById('logo').classList.remove('stop');
    },
  },
};
</script>

<style>

html, body {
  height: 100%;
  min-height: 100%
}
body {
  margin: 0.5em 0.5em;
  background: #0b62b3;
  background: -moz-linear-gradient(-45deg, #0b62b3 0%, #7dff5f 100%);
  background: -webkit-linear-gradient(-45deg, #0b62b3 0%, #7dff5f 100%);
  background: linear-gradient(135deg, #0b62b3 0%, #7dff5f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0b62b3', endColorstr='#7dff5f', GradientType=1);
  font-family: "Trebuchet MS", "Helvetica Neue", Arial;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  background-attachment: fixed;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

main {
  text-align: center;
}

header {
  height: 42px;
  padding: 15px;
  color: #FFF;
}

header #logo {
  float: left;
  margin-right: 5px;
}

header h2 {
  margin: 5px;
  font-size: 1.45em;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.cards {
  column-count: 1;
  column-gap: 1em;
}

.wrapper {
  padding: 15px;
}

@media only screen and (min-width: 200px) {
  .cards {
    column-count: 1;
  }
}

@media only screen and (min-width: 320px) {
  .cards {
    column-count: 2;
  }
}

@media only screen and (min-width: 500px) {
  .cards {
    column-count: 2;
  }
}

@media only screen and (min-width: 700px) {
  .cards {
    column-count: 3;
  }
}

@media only screen and (min-width: 900px) {
  .cards {
    column-count: 4;
  }
}

@media only screen and (min-width: 1100px) {
  .cards {
    column-count: 5;
  }
}

/* Playing Animation */
.playing {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.playing .rect1 {
  -webkit-transform: scaleY(0.4);
  transform: scaleY(0.4);
}

.playing .rect2 {
  -webkit-transform: scaleY(0.75);
  transform: scaleY(0.75);
}

.playing .rect3 {
  -webkit-transform: scaleY(0.95);
  transform: scaleY(0.95);
}

.playing .rect4 {
  -webkit-transform: scaleY(0.75);
  transform: scaleY(0.75);
}

.playing .rect5 {
  -webkit-transform: scaleY(0.6);
  transform: scaleY(0.6);
}

.playing .rect6 {
  -webkit-transform: scaleY(0.4);
  transform: scaleY(0.4);
}

.playing .rect7 {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.playing > div {
  background-color: #fff;
  height: 90%;
  width: 3px;
  display: inline-block;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-animation: wavy 1s ease infinite forwards;
  animation: wavy 1s ease infinite forwards;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.playing .rect2 {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.playing .rect3 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.playing .rect4 {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}
.playing .rect5 {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.playing .rect6 {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}
.playing .rect7 {
  -webkit-animation-delay: 1.0s;
  animation-delay: 1.0s;
}
@-webkit-keyframes wavy {
  0% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@keyframes wavy {
  0% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

.playing.stop > div {
  -webkit-animation: none;
  animation: none;
}
</style>