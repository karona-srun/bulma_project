<template>
  <div class="mb-5">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Register</p>
        <p class="subtitle">
          Fill info <strong>to</strong>, regitser account .
        </p>
      </div>
    </section>
    
    <div class="columns mt-5 is-centered">
      <div class="column is-half">
        <div class="box">

          <div class="notification">
            <button class="delete"></button>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
          </div>

          <div class="">
            <div class="card-content">
              <div class="content">
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">First Name</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          v-model="formRegister.first_name"
                          placeholder="First Name"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['first_name'][0]}}</p>
                    </div>
                    <div class="field">
                      <label class="label">Last Name</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          v-model="formRegister.last_name"
                          placeholder="Last Name"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['last_name'][0]}}</p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Gender</label>
                        <div class="select is-fullwidth">
                          <select v-model="formRegister.gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Last Name</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          v-model="formRegister.phone_number"
                          placeholder="087xxxxxx"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-phone"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['phone_number'][0]}}</p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Address</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          v-model="formRegister.address"
                          placeholder="e.g. Address"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-home"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['address'][0]}}</p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Description</label>
                      <p class="control is-expanded has-icons-left">
                         <textarea
                          class="textarea"
                          v-model="formRegister.desc"
                          placeholder="e.g. Description"
                        >
                        </span></textarea>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['desc'][0]}}</p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Email</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="email"
                          v-model="formRegister.email"
                          placeholder="e.g. Email"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['email'][0]}}</p>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Password</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="password"
                          v-model="formRegister.password"
                          placeholder="password"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-key"></i>
                        </span>
                      </p>
                      <p v-if="isErrors" class="help is-danger">{{errorMsg['password'][0]}}</p>
                    </div>
                  </div>
                </div>


                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <label class="label">Re-Type Password</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="password"
                          v-model="formRegister.password_confirmation"
                          placeholder="password"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-key"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>


                <div class="field">
                  <p class="control">
                    <button
                      class="button is-primary"
                      @click.prevent="submitRegister"
                    >
                      <i class="fa-light fas fa-user-plus mr-2"></i> Register
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formRegister: {
        first_name: "",
        last_name: "",
        gender: "Male",
        phone_number: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        desc: "",
      },
      isErrors: false,
      errorMsg: {},
      isError: false,
      credential: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    submitRegister() {
      let res = this.register(this.formRegister);
      res.then((res) => {
        console.log(res.data);
        if (res.mode == 0) {
          this.isErrors = true;
          this.isError = false;
          this.errorMsg = res.errors;
        } else if (res.mode == 1) {
          this.isError = true;
          this.isErrors = false;
          this.credential = res.errors.email;
        } else {
          this.$router.push({ name: "logIn" });
        }
      });
    },
  },
};
</script>