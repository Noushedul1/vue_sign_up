<template>
  <div>
      <button v-for="tab in tabs" :key="tab" @click="mycomponent=tab">
          {{tab}}
      </button>
      <keep-alive>
      <component :is="mycomponent"></component>
      </keep-alive>
  </div>
</template>

<script>
import Signup from '../views/SignUp.vue';
import Product from '../views/ProductView.vue';
export default {
    name: 'KeepAlive',
    components: {
        Signup,
        Product
    },
    data(){
        return {
            tabs: ["Signup","Product"],
            mycomponent: "Product"
        }
    }
}
</script>

<style>

</style>