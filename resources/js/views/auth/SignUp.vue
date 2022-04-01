<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Sign Up</p>
        <p class="subtitle">
          Fill info <strong>to</strong>,
          sign up account .
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
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="text"
                      placeholder="First Name"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="text"
                      placeholder="Last Name"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Re-Type Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-primary">
                      <i class="fa-light fas fa-user-plus mr-2"></i> Sign up</button>
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