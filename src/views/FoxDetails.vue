<template>
  <div>
      <img :src="foxpicture" alt="">
      fox Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo quam ipsum id, quas consequatur repellendus delectus asperiores illo dolorem magnam, cupiditate reiciendis labore incidunt eaque unde nostrum dolores ratione.
  </div>
</template>

<script>
export default {
    name: 'FoxDetails',
    data(){
        return {
            foxpicture: 'https://source.unsplash.com/random/200x200?fox'
        }
    }
}
</script>

<style>

</style>