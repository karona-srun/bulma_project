<template>
  <div class="container is-widescreen">
    <br />
    <nav class="level">
      <p class="level-item has-text-centered">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt=""
          style="height: 30px"
        />
      </p>
    </nav>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active">
          <a href="#" aria-current="page">Breadcrumb</a>
        </li>
      </ul>
    </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Product Category </a>

            <div class="navbar-dropdown">
              <router-link to="/about" class="navbar-item">About</router-link>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Languages </a>
            <div class="navbar-dropdown">
              <a class="navbar-item"> ភាសាខ្មែរ </a>
              <a class="navbar-item"> English </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/register" class="button is-primary"
                ><strong>
                  <i class="fa-light fas fa-user-plus mr-2"></i> Register</strong
                ></router-link
              >
              <router-link to="/login" class="button is-light">
                <i class="fa-solid fa-arrow-right-to-bracket mr-2"></i> Log In</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="mt-3"></router-view>
  </div>
</template>
<script>
export default {
  name: "FrontEnd",
};
</script>