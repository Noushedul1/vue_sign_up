<template>
  <div>
      <img :src="foxpicture" alt="">
      fox Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo quam ipsum id, quas consequatur repellendus delectus asperiores illo dolorem magnam, cupiditate reiciendis labore incidunt eaque unde nostrum dolores ratione.
      <div>Counter : {{count}}</div>
      <button @click="counterValueUpdate()">UpdateCounter</button>
  </div>
</template>

<script>
import Counter from '../mixins/counter';
export default {
    name: 'FoxDetails',
    mixins: [Counter],
    data(){
        return {
            foxpicture: 'https://source.unsplash.com/random/200x200?fox',
            // count: 0
        }
    },
    methods: {
        // counterValueUpdate(){
        //     this.count += 1;
        // }
    }
}
</script>

<style>

</style>