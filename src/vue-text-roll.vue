
<script>
export default {
  name: 'vue-text-roll',
  render: function (createElement) {
      let body = this.$slots.default;
      //this.$slots返回了一个组件分发下来的元素和内容
      //this.$slots.default返回了具名的内容
      return createElement(
        'div',
        {},
        [
          createElement(
            'div',
            {
              ref: 'roll-text-container',
              class: 'roll-text-container',
              on: {
                mouseenter: this.handleMouseenter,
                mouseleave: this.handleMouseleave
              }
            },
            //this.level是利用v-bind注入到组件中的level
            [
              createElement(
                'div',
                {
                  ref: 'roll-text-content',
                  style: Object.assign({
                    paddingRight: this.rolling ? this.gutter + 'px': '0',
                  }, this.wrapperStyle),
                  class: {
                    'roll-text-content': true,
                    'rolling': this.rolling
                  }
                },
                body
              ),
              createElement(
                'div',
                {
                  ref: 'roll-text-content-copy',
                  style: Object.assign({
                    paddingRight: this.rolling ? this.gutter + 'px': '0',
                    display: this.isNeedToRoll ? 'inline-block': 'none'
                  }, this.wrapperStyle),
                  class: {
                    'roll-text-content': true,
                    'rolling': this.rolling
                  }
                },
                body
              )
            ]
          )
        ]
      )
   },
  props: {
    auto: {
      type: Boolean,
      default: true
    },
    handleHover: {
      type: Boolean,
      default: false
    },
    gutter: {
      type: Number,
      default: 30
    },
    duration: {
      default: null
    },
    wrapperStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    speed: {
      type: String,
      default: 'normal' // quick normal slow
    }
  },
  data () {
    return {
      rolling: false,
      isNeedToRoll: false
    }
  },
  methods: {
    getWidth (id) {
      return this.$refs[id].offsetWidth
    },
    animationDuration () {
      if (this.duration) {
        return this.duration
      }

      let _unit = (this.getWidth('roll-text-content') / 100).toFixed(1)
      let _unitDuration = {
        normal: 1200,
        slow: 2000,
        quick: 800
      }

      return _unit * _unitDuration[this.speed]
    },
    addAnimationDuration () {
      let _animtionDelay = (this.animationDuration()) + 'ms'
      this.$refs['roll-text-content'].style.animationDuration = _animtionDelay
      this.$refs['roll-text-content-copy'].style.animationDuration = _animtionDelay
    },
    getIsNeedRoll () {
      let _containerWidth = this.getWidth('roll-text-container')
      let _messageWidth = this.getWidth('roll-text-content')

      let _isNeedToRoll = _containerWidth < (_messageWidth + this.gutter)
      this.isNeedToRoll = _isNeedToRoll

      return _isNeedToRoll
    },
    startRoll () {
      if (this.getIsNeedRoll()) {
        this.rolling = true
      }
    },
    stopRoll () {
      this.rolling = false
    },
    handleMouseenter () {
      if (!this.handleHover) {
        return
      }
      this.handleHover && this.stopRoll()
    },
    handleMouseleave () {
      if (!this.handleHover) {
        return
      }
      this.startRoll()
    },
    refresh () {
      this.addAnimationDuration()
      this.auto && this.startRoll()
    }
  },
  mounted () {
    this.addAnimationDuration()
    this.auto && this.startRoll()
  }
}
</script>

<style scoped>
.roll-text-container {
  overflow: hidden;
  display: -webkit-box; 
  display: -moz-box; 
  display:-webkit-flex;
  display: -ms-flexbox;
  display:flex;
}
.roll-text-content {
  display: inline-block;
  position: relative;
  white-space: nowrap;
  padding-right: 0;
}
.roll-text-content.rolling {
  animation-name: left-rolling;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes left-rolling {
  to {
    transform: translateX(-100%);
  }
}
</style>
