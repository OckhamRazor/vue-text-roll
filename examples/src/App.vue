<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <div class="examples">
      <h2>Props</h2>
      <section class="example-item">
        <h3>Base Use</h3>
        <p>default settings</p>
        <vue-text-roll class="text-roll-demo">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>  
      </section>
      <section class="example-item">
        <h3>auto</h3>
        <p>:auto="false"（default :auto="true"）</p>
        <vue-text-roll class="text-roll-demo"
          :auto="false">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>  
      </section>
      <section class="example-item">
        <h3>handleHover</h3>
        <p>:handleHover="true"（default :handleHover="false"）</p>
        <vue-text-roll class="text-roll-demo"
          :handleHover="true">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>  
      </section>
      <section class="example-item">
        <h3>gutter</h3>
        <p>:gutter="100"（default :gutter="30"）</p>
        <vue-text-roll class="text-roll-demo"
          :gutter="100">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>  
      </section>
      <section class="example-item">
        <h3>duration: 8000</h3>
        <p>Note: if set the duration, the props "speed" be invalid! </p>
        <vue-text-roll class="text-roll-demo"
          :duration="8000">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>  
      </section>
      <section class="example-item">
        <h3>wrapperStyle</h3>
        <p>:wrapperStyle="{color: 'red', margin: '0 auto'}"</p>
        <vue-text-roll style="width: 600px; background-color: black; color: white;"
          :wrapperStyle="{color: 'red', margin: '0 auto'}">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll> 
      </section>
      <section class="example-item">
        <h3>speed</h3>
        <p>speed="quick"</p>
        <vue-text-roll class="text-roll-demo"
          speed="quick">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>
        <p>speed="normal"</p>
        <vue-text-roll class="text-roll-demo"
          speed="normal">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll>
        <p>speed="slow"</p>
        <vue-text-roll class="text-roll-demo"
          speed="slow">
          <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
        </vue-text-roll> 
      </section>
    </div>
  </div>
</template>

<script>
import {VueTextRoll} from './assets/vue-text-roll'
export default {
  name: 'app',
  components: {
    VueTextRoll
  },
  data () {
    return {
      msg: 'Vue Text Roll'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<style scoped>
.header {
  text-align: center;
}
.text-roll-demo {
  width: 300px;
}
.examples {
  max-width: 900px;
  padding: 15px;
  margin: 0 auto;
  background-color: #fff0f0;
}
</style>
