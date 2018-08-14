import tippy from './tippy'

export let Defaults = {
  a11y: true,
  content: '',
  placement: 'top',
  livePlacement: true,
  trigger: 'mouseenter focus',
  hideOnClick: true,
  animation: 'shift-away',
  animateFill: true,
  arrow: false,
  delay: 0,
  duration: [325, 275],
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  size: 'regular',
  distance: 10,
  offset: 0,
  multiple: false,
  followCursor: false,
  inertia: false,
  updateDuration: 200,
  sticky: false,
  appendTo: () => document.body,
  zIndex: 9999,
  touchHold: false,
  performance: false,
  flip: true,
  flipBehavior: 'flip',
  arrowType: 'sharp',
  arrowTransform: '',
  target: '',
  allowHTML: true,
  showOnInit: false,
  popperOptions: {},
  lazy: true,
  touch: true,
  onShow() {},
  onShown() {},
  onHide() {},
  onHidden() {}
}

export const setDefaults = partialDefaults => {
  Defaults = { ...Defaults, ...partialDefaults }
  tippy.defaults = Defaults
}
