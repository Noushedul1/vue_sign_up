<template>
  <div>
      <button @click="darkMode = !darkMode">Mode</button>
      <div class="box" :style="{color: darkMode ? 'white' : 'black'}" :class="{'dark':darkMode}">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam reiciendis dolorum. Vel ipsa molestias perspiciatis sed. Iusto recusandae libero animi eos enim dolores? Ipsa minima beatae perferendis quos blanditiis.
      </div>
      <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime est alias laborum consectetur amet nostrum obcaecati, animi neque culpa, repellendus doloremque, vitae ducimus illum impedit consequuntur dolores laudantium. Ipsam, voluptatum.
      </div>
  </div>
</template>

<script>
export default {
    name: 'DynamanicClass',
    data(){
        return {
            darkMode: false
        }
    }
}
</script>

<style scoped>
.box{
    border: 1px solid black;
}
.dark{
    background: black;
    /* color: white; */
}
</style>