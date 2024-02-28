
<!-- import Item from '../components/Item.vue'; -->

<template>
  <div class="slidev-layout pageBar">
    <div class="my-auto">
      <slot />


      <!-- Blue box with absolute positioning -->
      <div class="absolute-blue-box"></div>


    <BarBottom 
    :title="$slidev.configs.preTitle" 
    :author="Object.keys($slidev.configs.authors[Object.keys($slidev.configs.authors)[0]])[0]" 
    :meeting="$slidev.configs.meeting">
    </BarBottom>

    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.absolute-blue-box {
  position: absolute;
  top: 4%; /* Adjust as needed */
  left: 0; /* Adjust as needed */
  width: 3.5%; /* Adjust as needed */
  height: 5.5rem; /* Adjust as needed */
  background: linear-gradient(45deg, #4ec4d4 15%, #146a8ce0 45%);
  animation: gradient-animation 5s ease infinite;
  background-size: 200% 200%;
  opacity: 1.0;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>