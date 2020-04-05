<template>
  <div class="card" @click="$emit('card-click', collection.id - 1)">
    <div class="card-content">
      <img :src="collection.image" :alt="collection.name">
      <div :class="(selectedCard && collection.id == selectedCard.id) ? 'card-control pause' : 'card-control play' " :id="collection.id">
        <span class="left"></span><span class="right"></span>
      </div>
      <div class="card-title">
          <span>{{collection.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['collection', 'selectedCard'],
  name: 'card',
};
</script>

<style>
.card {
  background: #F5F5F5;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  cursor: pointer;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  transition: all 100ms ease-in-out;
}

.card .card-title {
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  text-align: left;
  padding: 10px 0px;
}

.card .card-title span {
  color: #FFF;
  padding: 10px;
  margin: 0px
}

.card img {
  display: block;
  width: 100%;
}

/* Play / Pause - Animation */
/* Source: https://codepen.io/morgun/pen/mInAk */
.card-control {
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  margin: 10px;
  padding: 4px;
  width: 10px;
  height: 10px;
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
}
.card-control,
.card-control .left,
.card-control .right,
.card-control:before {
  display: inline-block;
  vertical-align: middle;
  transition: border 0.4s, width 0.4s, height 0.4s, margin 0.4s;
  transition-tiomig-function: cubic-bezier(1, 0, 0, 1);
}
.card-control:before {
  content: "";
  height: 10px;
}
.card-control.pause .left,
.card-control.pause .right {
  margin: 0;
  border-left: 3.3px solid #FFFFFF;
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  height: 8.66px;
}
.card-control.pause .left {
  border-right: 2px solid transparent;
}
.card-control.play .left {
  margin-left: 1.66666667px;
  border-left: 4.33px solid #FFFFFF;
  border-top: 2.5px solid transparent;
  border-bottom: 2.5px solid transparent;
  border-right: 0px solid transparent;
  height: 5px;
}
.card-control.play .right {
  margin: 0;
  border-left: 4.33px solid #FFFFFF;
  border-top: 2.5px solid transparent;
  border-bottom: 2.5px solid transparent;
  height: 0px;
}
.card-control:hover {
  border-color: #e6e6e6;
}
.card-control:hover .left,
.card-control:hover .right {
  border-left-color: #e6e6e6;
}
</style>