<template>
  <div>
      <div class="animal">
          <div v-for="g in mygallary" :key="g.id">
           <img :src="g.name" alt="">
         </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ImageGallary',
    data(){
        return {
            mygallary: [
                {id:1,name: 'https://source.unsplash.com/random/200x200?cat'},
                {id:2,name: 'https://source.unsplash.com/random/200x200?man'},
                {id:3,name: 'https://source.unsplash.com/random/200x200?dog'},
                {id:4,name: 'https://source.unsplash.com/random/200x200?tiger'},
                {id:5,name: 'https://source.unsplash.com/random/200x200?girl'},
                {id:6,name: 'https://source.unsplash.com/random/200x200?fox'},
            ]
        }
    }
}
</script>

<style scoped>
.animal{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>