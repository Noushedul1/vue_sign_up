<template>
<slot name="vue"></slot>
  <div class="hello">
    <slot name="js"></slot>
    <h1>{{ msg }}  {{country}}</h1>
    <ul>
      <li v-for="p in player" :key="p">
        {{p.id}} : {{p.name}}
      </li>
    </ul>
    <slot name="php"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hello akib'
    },
    country: {
      type: String,
      required: true
    },
    player: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
