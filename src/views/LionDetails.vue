<template>
  <div>
      <img :src="lionpicture" alt="">
      lion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum, molestiae perferendis officiis, at aperiam pariatur ducimus nostrum saepe corporis sed itaque natus blanditiis rerum odio eos sint impedit atque.
  </div>
</template>

<script>
export default {
    name: 'LionDetails',
    data(){
        return {
            lionpicture: 'https://source.unsplash.com/random/200x200?lion'
        }
    }
}
</script>

<style>

</style>