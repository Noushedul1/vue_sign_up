<template>
  <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quidem cupiditate nulla consectetur fugit! A, fuga modi quaerat, nobis totam vel assumenda quibusdam ipsa rerum molestias qui nam perspiciatis cum.
      <div v-for="b in books" :key="b.id">
        {{b.bookname}} || {{b.writter}} || {{b.price}}
      </div>
      <ul>
        <li v-for="p in players" :key="p.id">
          {{p.type}} || {{p.playername}} || {{p.run}}
        </li>
      </ul>
      <hr>
      <div v-for="pr in playersrun" :key="pr.id">
        {{pr.run}}
      </div>
  </div>
</template>

<script>
import {books,players} from '../store/index';
export default {
    name: 'ProductView',
    computed: {
      books(){
        return this.$store.state.books;
      },
      players(){
        return this.$store.state.players;
      },
      playersrun(){
        const playersrun = this.$store.state.players.map((player)=>{
          return {
            run: player.run/2
          }
        });
        return playersrun;
      }
    }
}
</script>

<style>

</style>