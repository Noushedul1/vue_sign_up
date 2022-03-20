<template>
  <div>
      <img :src="tigerpicture" alt="">
      tiger Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque ipsum deserunt quas sunt sequi eaque omnis ducimus in iusto excepturi laborum possimus, perferendis tempora, facere assumenda deleniti qui sint?
  </div>
</template>

<script>
export default {
    name: 'TigerDetails',
    data(){
        return {
            tigerpicture: 'https://source.unsplash.com/random/200x200?tiger'
        }
    }
}
</script>

<style>

</style>