<template>
  <div>

    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Log In</p>
        <p class="subtitle">
          Fill Email address and Password <strong>to</strong>,
        using system.
        </p>
      </div>
    </section>

    <div class="columns mt-5 is-centered">
      <div class="column is-half">
        <div class="box">
          <div class="">
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" v-model="formLogIn.email" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <p v-if="isError" class="help is-danger">{{credential}}</p>
                  <p v-if="isErrors" class="help is-danger">{{errorMsg['email'][0]}}</p>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      v-model="formLogIn.password" 
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <p v-if="isErrors" class="help is-danger">{{errorMsg['password'][0]}}</p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-primary" @click.prevent="submitLogIn">
                      <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i> Log In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      formLogIn: {
        email: '',
        password: ''
      },
      isErrors: false,
      errorMsg: {},
      isError: false,
      credential: ''
    }
  },
  methods:{
    ...mapActions(['logIn']),
    submitLogIn(){
      let res = this.logIn(this.formLogIn);
      res.then(res => {
        if(res.mode == 0){
          this.isErrors = true
          this.isError = false
          this.errorMsg = res.errors
        }else if(res.mode == 1){
          this.isError = true
          this.isErrors= false
          this.credential = res.errors.email
        }else{
          this.$router.push({ name: "Dashboard" });
          this.$router.go();
        }
      })
    }
  }
}
</script>