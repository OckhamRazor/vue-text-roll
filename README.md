# text-roll

> the vue plugin to rolling the long text.


## Installtion
install npm adn use it as a vue plugin in your app
```bash
npm install --save text-roll
```

## How to import
```javascript
// amd or commonjs
var VueTextRoll = require('text-roll')
Vue.use(VueTextRoll)

// global component
import VueTextRoll from 'text-roll'
Vue.use(VueTextRoll)

// partial component
import {VueTextRoll} from 'text-roll'
export default {
  // ...
  components: {
    VueTextRoll
  }
  // ...
}
```

## Usage
+ Wrap the element in an `<vue-text-roll>` tag
+ Set the width of the element

Example below:

html
```html
<vue-text-roll class="text-roll-demo">
  <p>〇〇の笑颜 えがお は俺 おれ （私 わたし ）が守 まも る</p>
</vue-text-roll>
```
css
```
.text-roll-demo {
  width: 300px;
}
```

## How the plugin works

First, it copies the incoming slot contents, defined as A and B. (**Note: if the initial state is "display: none", you need to call the refresh () method to recalculate the width**) by calculating the width of the parent and the content to determine whether the need to scroll The text is scrolled by the following animation
```
@keyframes left-rolling {
   to {
     transform: translateX (-100%);
   }
}
```

## Props
```javascript
// auto rolling
auto: {
  type: Boolean,
  default: true
},
// mouseenter stop and mouseleave start
handleHover: {
  type: Boolean,
  default: false
},
// spacing size
gutter: {
  type: Number,
  default: 30
},
// animation duration
duration: {
  default: null
},
// the content wrapper style
wrapperStyle: {
  type: Object,
  default: () => {
    return {}
  }
},
// animation play speed
speed: {
  type: String,
  default: 'normal' // quick normal slow
}
```

## Methods
```javascript
// Recalculate the animation duration, and start Roll
refresh()

// start rolling 
startRoll()

// stop rolling
stopRoll()
```

## More

// TODO
// test

## License

MIT



