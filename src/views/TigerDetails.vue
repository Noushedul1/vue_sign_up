<template>
  <div>
      <img :src="tigerpicture" alt="">
      tiger Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque ipsum deserunt quas sunt sequi eaque omnis ducimus in iusto excepturi laborum possimus, perferendis tempora, facere assumenda deleniti qui sint?
      <div>Counter : {{count}}</div>
      <button @click="counterValueUpdate()">UpdateCounter</button>
  </div>
</template>

<script>
import Counter from '../mixins/counter';
export default {
    name: 'TigerDetails',
    mixins: [Counter],
    data(){
        return {
            tigerpicture: 'https://source.unsplash.com/random/200x200?tiger',
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