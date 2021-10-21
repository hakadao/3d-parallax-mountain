const parallaxWrapper = document.querySelector('#parallax_wrapper')

parallaxWrapper.addEventListener('mousemove', (e) => {
  const range = 10
  let horizontal = (e.clientX / parseInt(getComputedStyle(parallaxWrapper).width, 10)) * range - range / 2
  let vertical = (e.clientY / parseInt(getComputedStyle(parallaxWrapper).height, 10)) * range - range / 2

  document.querySelector('#parallax_bg').style.transform = calcTransform(horizontal, vertical, 0)
  document.querySelector('#parallax_mountain').style.transform = calcTransform(horizontal, vertical, 3)
  document.querySelector('#parallax_cloud').style.transform = calcTransform(horizontal, vertical, 8)
})

function calcTransform(horizontal, vertical, offset) {
  return `translate3d(${horizontal * offset}px, ${
    vertical * offset
  }px, 0) rotateX(${-vertical}deg) rotateY(${horizontal}deg)`
}
