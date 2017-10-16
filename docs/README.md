# Demo

## Demo1: default settings

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  .text-roll-demo {
    width: 300px;
  }
</style>

<template>
  <div>
    <vue-text-roll class="text-roll-demo">
      <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
    </vue-text-roll>
  </div>
</template>

<script>
  import './assets/js/vue-text-roll.js'
  // import VueTextRoll from './assets/js/vue-text-roll.js'
  module.exports = {
    components: {
      // VueTextRoll
    }
  }
</script>
</script>

## Demo2: set :auto="false"

<vuep template="#demo2"></vuep>

<script v-pre type="text/x-template" id="demo2">
<style>
  .text-roll-demo {
    width: 300px;
  }
</style>

<template>
  <div>
    <vue-text-roll class="text-roll-demo" :auto="false">
      <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
    </vue-text-roll>
  </div>
</template>

<script>
  // import VueTextRoll from './assets/js/vue-text-roll.js'
  module.exports = {
    components: {
      // VueTextRoll
    }
  }
</script>
</script>

## Demo3 :gutter="5"
<vuep template="#demo3"></vuep>

<script v-pre type="text/x-template" id="demo3">
<style>
  .text-roll-demo {
    width: 300px;
  }
</style>

<template>
  <div>
    <vue-text-roll class="text-roll-demo" :gutter="5">
      <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
    </vue-text-roll>
  </div>
</template>

<script>
  // import VueTextRoll from './assets/js/vue-text-roll.js'
  module.exports = {
    components: {
      // VueTextRoll
    }
  }
</script>
</script>

## Demo4 :duration="8000"
!> **Warning:** if set the duration, the props speed is invlida!.
<vuep template="#demo4"></vuep>

<script v-pre type="text/x-template" id="demo4">
<style>
  .text-roll-demo {
    width: 300px;
  }
</style>

<template>
  <div>
    <vue-text-roll class="text-roll-demo" :duration="8000">
      <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
    </vue-text-roll>
  </div>
</template>

<script>
  // import VueTextRoll from './assets/js/vue-text-roll.js'
  module.exports = {
    components: {
      // VueTextRoll
    }
  }
</script>
</script>

## Demo5 :speed="slow"

> You can set speed value ("slow", "normal", "quick")

<vuep template="#demo5"></vuep>

<script v-pre type="text/x-template" id="demo5">
<style>
  .text-roll-demo {
    width: 300px;
  }
</style>

<template>
  <div>
    <vue-text-roll class="text-roll-demo" speed="slow">
      <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
    </vue-text-roll>
  </div>
</template>

<script>
  // import VueTextRoll from './assets/js/vue-text-roll.js'
  module.exports = {
    components: {
      // VueTextRoll
    }
  }
</script>
</script>

