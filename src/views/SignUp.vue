<template>
  <div>
      <form action="" @submit.prevent="isSubmit">
          <div class="allmargin">
              <label for="">First name :</label>
              <input type="text" v-model.lazy="formdata.fname">
          </div>
          <div class="allmargin">
              <label for="">Last name :</label>
              <input type="text" v-model.lazy="formdata.lname">
          </div>
          <div class="allmargin">
              <label for="">Password :</label>
              <input type="text" required v-model.lazy="formdata.pass">
              <div v-if="passError" class="passError">{{passError}}</div>
          </div>
          <div class="allmargin">
              <label for="">Email :</label>
              <input type="text" v-model.lazy="formdata.mail">
          </div>
          <div class="allmargin">
              <label for="">Select skills : </label>
              <select v-model="formdata.skills">
                  <option value="vue">Vue</option>
                  <option value="js">JS</option>
                  <option value="mysql">mysql</option>
              </select>
          </div>
          <div class="allmargin">
              <label for=""> 
                  <input type="checkbox" v-model="formdata.favplayer" value="shakib">
                  Shakib:
              </label>
              <label for="">
                  <input type="checkbox" v-model="formdata.favplayer" value="tamim">
                  Tamim: 
              </label>
              <label for="">
                  <input type="checkbox" v-model="formdata.favplayer" value="afif">
                  Afif: 
              </label>
              <label for="">
                  <input type="checkbox" v-model="formdata.favplayer" value="mehedy">
                  Mahedy: 
              </label>
          </div>
          <div class="allmargin">
              <label for="">
                  <input type="radio" v-model="formdata.gender" value="male">
                  Male
              </label>
              <label for="">
                  <input type="radio" v-model="formdata.gender" value="female">
                  Female
              </label>
          </div>
          <div class="allmargin">
              <label for="">
                  <input type="checkbox" v-model="formdata.jobtype" true-value="Yes" false-value="No">
                  Remote job ?
              </label>
          </div>
          <div class="allmargin">
              <button type="submit">Submit</button>
          </div>
      </form>
      <div v-if="formvalueShow">
          <p>First name : {{formdata.fname}}</p>
          <p>Last name : {{formdata.lname}}</p>
          <p>Password : {{formdata.pass}}</p>
          <p>Email : {{formdata.mail}}</p>
          <p>Skills : {{formdata.skills}}</p>
          <p>Favarite player : {{formdata.favplayer}}</p>
          <p>Gender : {{formdata.gender}}</p>
          <p>Jobtype : {{formdata.jobtype}}</p>
      </div>
      <!-- <div>
          <pre>{{JSON.stringify(formdata,null,2)}}</pre>
      </div> -->
  </div>
</template>

<script>
export default {
    name: 'SignUp',
    data(){
        return {
            formdata: {
                fname: '',
                lname: '',
                pass: '',
                mail: '',
                skills: '',
                favplayer: [],
                gender: '',
                jobtype: ''
            },
            passError: '',
            formvalueShow: false
        }
    },
    methods: {
        isSubmit(){
            this.passError = this.formdata.pass.length >5 ? '' : 'password at least 5 character';
            if(!this.passError){
                console.log('password',this.formdata.pass);
            }
            this.formvalueShow = true;
        }
    }
}
</script>

<style scoped>
.allmargin{
    margin: 10px;
}
.passError{
    color: red;
}
</style>