# Props

## auto
> if you set **auto:false**, you need call the method startRoll() or refresh()

```javascript
// auto rolling
auto: {
  type: Boolean,
  default: true
}
```

## handleHover
```javascript
// mouseenter stop and mouseleave start
handleHover: {
  type: Boolean,
  default: false
}
```

## gutter
```javascript
// spacing size
gutter: {
  type: Number,
  default: 30
}
```

## duration
!> **Warning:** if set the duration, the props speed is invlida!.
```javascript
// animation duration
duration: {
  default: null
}
```

## wrapperStyle
> you can set the style of wrapper. E.g, wrapperStyle='{margin: 0 auto;}'

```javascript
// the content wrapper style
wrapperStyle: {
  type: Object,
  default: () => {
    return {}
  }
}
```

## speed
> 'quick' | 'normal' | 'quick'.</br>
E.g, 'quick' means that 800ms/100px('normal' => 1200ms/100px, 'slow' => 2000ms/100px).

```javascript
// animation play speed
speed: {
  type: String,
  default: 'normal' // quick normal slow
}
```