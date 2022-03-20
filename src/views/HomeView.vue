<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" :country="country" :player="player">
      <template v-slot:vue>
        <p>Hello vue js programmer</p>
      </template>
      <template v-slot:js>
        <p>hello javascript programmer</p>
      </template>
      <template v-slot:php>
        <p>hello php programmer</p>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      country: 'England',
      player: [
        {id:1,name:'shakib'},
        {id:2,name:'tamim'},
        {id:3,name:'yasir'},
        {id:4,name:'mehedi'}
      ]
    }
  }
}
</script>
