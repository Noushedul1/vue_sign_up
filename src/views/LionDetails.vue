<template>
  <div>
      <img :src="lionpicture" alt="">
      lion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum, molestiae perferendis officiis, at aperiam pariatur ducimus nostrum saepe corporis sed itaque natus blanditiis rerum odio eos sint impedit atque.
      <div>Counter : {{count}}</div>
      <button @click="counterValueUpdate()">UpdateCounter</button>
  </div>
</template>

<script>
import Counter from '../mixins/counter';
export default {
    name: 'LionDetails',
    mixins: [Counter], 
    data(){
        return {
            lionpicture: 'https://source.unsplash.com/random/200x200?lion',
            // count: 0
        }
    },
    methods: {
        // counterValueUpdate(){
        //     this.count +=1;
        // }
    }
}
</script>

<style>

</style>