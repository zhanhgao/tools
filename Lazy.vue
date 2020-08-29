<template>
  <div id="app">
    <p v-for="item in imgs" :key="item">
      <img v-lazyload="item" />
    </p>
  </div>
</template>

<style  scoped>
img{
    width: 100%;
    height: 300px;
}
</style>
<script>
export default {
  data() {
    return {
      imgs: [
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b",
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b",
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b",
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b",
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b",
        "https://pic1.zhimg.com/v2-dd06b00164946582b483b77aea22e77d_r.jpg?source=172ae18b"
      ]
    };
  },
  directives: {
    lazyload: {
      bind: function(el, binding,vnode,oldVnode) {
        console.log(el, binding,vnode,oldVnode);
        let lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              let lazyImage = entry.target;
              // 相交率，默认是相对于浏览器视窗
              if (entry.intersectionRatio > 0) {
                lazyImage.src = binding.value;
                // 当前图片加载完之后需要去掉监听
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          }
        );
        lazyImageObserver.observe(el);
      }
    }
  },
};
</script>
