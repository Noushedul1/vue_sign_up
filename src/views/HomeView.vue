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
    <div v-for="b in bookPrice" :key="b.id">
      {{b.bookname}} || {{b.price}}
    </div>
    <div v-for="p in playerRun" :key="p.id">
      {{p.playername}} || {{p.run}}
    </div>
    <button @click="priceReduce()">Book Price</button>
    <div v-for="t in fetchTodos" :key="t.id">
      {{t.title}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions,mapGetters} from 'vuex';
// import {books,players} from '../store/index';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      msg: 'Welcome to my Vue.js App',
      country: 'Bangladesh',
      player: [
        {id:1,name:'shakib'},
        {id:2,name:'tamim'},
        {id:3,name:'yasir'},
        {id:4,name:'mehedi'}
      ]
    }
  },
  methods: {
    ...mapActions({
      priceReduce: 'priceReduce',
      fetchTodos: 'fetchTodos'
    })
    // priceReduce(){
    //   this.$store.dispatch("priceReduce");
    // }
  },
  computed: {
    ...mapGetters({
      bookPrice: 'bookPrice',
      playerRun: 'playerRun'
    })
    // bookPrice(){
    //   return this.$store.getters.bookPrice;
    // },
    // playerRun(){
    //   return this.$store.getters.playerRun;
    // }
  }
}
</script>
