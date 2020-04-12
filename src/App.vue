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
      <p>Missing chaos during quarantine? Play urban soundscapes in a loop and #StayTheFuckHome <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Missing chaos during quarantine? Play urban soundscapes in a loop at" data-url="https://noisyloop.com" data-via="ak47surve" data-hashtags="StayTheFuckHome #NoisyLoop" data-show-count="false">Tweet</a></p>
    </header>
    <main class="main-header">

      <div class="centered">
        <section class="player">
          <audio loop id="audiotag">
            <source v-if="currentCard" :src="currentCard.audio" type="audio/mp3">
            Your browser does not support the audio tag.
          </audio>
        </section>
        
        <section class="cards">
          <card v-for="collection in collections" :key="collection.image" :collection="collection" v-on:card-click="onCardClick" :selectedCard="currentCard"></card>
        </section>
        <!-- .cards -->
      </div>
      <!-- .centered -->
      <v-dialog/>
    </main>
    <footer>
      <h6>#NoisyLoop</h6>
      <p>
        Released in Public Interest by <a href="https://twitter.com/ak47surve" target="_blank">ak47surve</a><br/>
        Want to hear a different #NoisyLoop? <br/>
        Tweet to make a request and #StayTheFuckHome <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="I would like to hear a new soundscape in a loop at" data-url="https://noisyloop.com" data-via="ak47surve" data-hashtags="StayTheFuckHome #NoisyLoop" data-show-count="false">Tweet</a></p>
    </footer>
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
  min-height: 100%;
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

/* Header */
header, footer {
  padding: 15px 15px 40px;
  color: #FFF;
}

header #logo {
  float: left;
  margin-right: 5px;
}

header h2, footer h2 {
  margin: 5px;
  font-size: 1.45em;
  margin-top: 6px;
}

header p {
  line-height: 1.4em;
}

header p a, footer p a {
  color: #DEDEDE;
  text-decoration: underline;

}

header p {
  font-size: 0.9em;
  margin-top: 2em;
  color: #EEE;
}

footer p {
  font-size: 0.8em;
  line-height: 1.4em;
  margin-top: 0.2em;
  color: #EEE;
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


/* Logo - Playing Animation */
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

.centered {
    padding: 0 1em;
}

/* Card Based Layout - Base styles */
.card {
  background: white;
  margin-bottom: 2em; 
}

.card a {
  color: black;
  text-decoration: none;
}

.card a:hover {
  box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
}

.card-content {
  padding: 1.4em;
}

.card-content h2 {
  margin-top: 0;
  margin-bottom: .5em;
  font-weight: normal;
}

.card-content p {
  font-size: 95%;
}

img {
  width: 100%;
  height: auto;
}

/* Flexbox styles */
@media screen and (min-width: 20em) {  
  .cards {
    margin-top: -1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 1em;
    display: flex;
    flex: 0 1 calc(50% - 0.5em);
    min-height: 1em;
    /* width: calc(50% - 1em); */
  }
} /* mq 20em*/

@media screen and (min-width: 30em) {  
  .cards {
    margin-top: -1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 1em;
    display: flex;
    flex: 0 1 calc(50% - 0.5em);
    /* width: calc(50% - 1em); */
  }
} /* mq 20em*/

/* Flexbox styles */
@media screen and (min-width: 40em) {  
  .cards {
    margin-top: -1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 1em;
    display: flex;
    flex: 0 1 calc(33% - 0.5em);
    /* width: calc(50% - 1em); */
  }
} /* mq 40em*/

@media screen and (min-width: 60em) {
  .cards {
    margin-top: inherit;
  }
  
  .card {
    margin-bottom: 2em;
    display: flex;
    flex: 0 1 calc(20% - 0.5em);
    /* width: calc(33% - 1em); */
  }
} /* mq 60em*/

#app .v-icon {
  width: 13px;
  vertical-align: middle;
}

#app .v--modal {
  background-color: #333;
  color: #EEE;
  font-size: 0.7em;
}

#app .v--modal a {
  color: #EEE;
  text-decoration: underline;
  line-height: 1.4em;
}

#app .v--modal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}

#app .v--modal .vue-dialog-buttons {
  border-top: 1px solid #999;
}

#app .v--modal .dialog-c-text {
  font-size: 0.9em;
}

#app .twitter-share-button {
  margin-bottom: -5px;
}
</style>