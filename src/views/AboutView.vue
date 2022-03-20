<template>
  <div class="about">
    <h1>This is an about page</h1>
    <component :is="myanimal"></component>
    <button @click="myanimal='Fox'">Fox</button>
    <button @click="myanimal='Tiger'">Tiger</button>
    <button @click="myanimal='Lion'">Lion</button>
  </div>
</template>
<script>
import Fox from './FoxDetails.vue';
import Tiger from './TigerDetails.vue';
import Lion from './LionDetails.vue';
export default {
  name: 'AboutView',
  components: {
    Fox,
    Tiger,
    Lion
  },
  data(){
    return {
      myanimal: 'Fox'
    }
  }
}
</script>

