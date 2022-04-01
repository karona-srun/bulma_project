<template>
  <div>

    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Sign In</p>
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
                    <input class="input is-danger" v-model="formSignIn.email" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This email is invalid</p>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      class="input is-danger"
                      type="password"
                      v-model="formSignIn.password" 
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This password is invalid</p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-primary" @click.prevent="submitSignIn">
                      <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i> Sign In</button>
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
export default {
  name:"SignIn",
  data(){
    return {
      formSignIn: {
        email: '',
        password: ''
      }
    }
  },
  methods:{
    submitSignIn(){
      alert(JSON.stringify(this.formSignIn));
    }
  }
}
</script>