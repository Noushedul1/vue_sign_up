<template>
  <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quidem cupiditate nulla consectetur fugit! A, fuga modi quaerat, nobis totam vel assumenda quibusdam ipsa rerum molestias qui nam perspiciatis cum.
      <div v-for="b in bookPrice" :key="b.id">
        {{b.bookname}} || {{b.writter}} || {{b.price}}
      </div>
      <ul>
        <li v-for="p in playerRun" :key="p.id">
          {{p.type}} || {{p.playername}} || {{p.run}}
        </li>
      </ul>
      <hr>
  </div>
</template>

<script>
// import {books,players} from '../store/index';
export default {
    name: 'ProductView',
    computed: {
      bookPrice(){
      return this.$store.getters.bookPrice;
    },
      playerRun(){
      return this.$store.getters.playerRun;
    }
    }
}
</script>

<style>

</style>