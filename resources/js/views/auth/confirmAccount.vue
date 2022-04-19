<template>
  <div>

    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Comfirm Account</p>
        <p class="subtitle">
          Thanks for register! Please before you begin, you must confirm your account.
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
                  <p class="control">
                    <span>Before proceeding, please check your email for a verification link</span>
                    <button class="button is-primary" @click.prevent="submitLogIn">
                      <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i> Confrim Account
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
    return {}
  },
  methods:{
    submitLogIn(){
        this.$router.push({ name: "logIn" });
    }
  }
}
</script>