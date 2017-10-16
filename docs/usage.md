# Usage

## Install
```bash
npm -i text-roll -S
```

## How to import ?
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

## How to use?
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
```css
.text-roll-demo {
  width: 300px;
}
```