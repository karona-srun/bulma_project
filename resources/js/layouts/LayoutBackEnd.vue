<template>
  <div class="container is-widescreen">
    <nav
      class="navbar pb-1 pt-1"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma"
            width="112"
            height="28"
          />
        </a>

        <div class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div class="navbar-end menu-end">
          <div class="navbar-item">
            <a class="navbar-item"> Docs </a>

            <div class="dropdown is-right is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu6"
                >
                  <span>
                    <i class="far fa-user mr-1"></i>
                    Account</span
                  >
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item"> Overview </a>
                  <a href="#" class="dropdown-item"> Settings </a>
                  <hr class="dropdown-divider" />
                  <router-link to="/" class="has-text-danger navbar-item">
                    <i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    Sign Out
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns">
      <div class="column is-one-quarter">
        <div class="navbar-menu mt-3" id="navMenu">
          <aside class="menu">
            <p class="menu-label">MAIN MENU</p>
            <ul class="menu-list">
              <li><router-link to="/dashboard" class=" navbar-item">
                 <i class="fa-solid fa-chalkboard-user mr-2"></i> Dashboard
                </router-link>
              </li>
            </ul>
            <p class="menu-label">PRODUCT MANAGEMENT</p>
            <ul class="menu-list">
              <li>
                <router-link to="/users" class=" navbar-item">
                 <i class="fa-solid fa-bag-shopping mr-2"></i> Products
                </router-link>
              </li>
              <li>
                <router-link to="/users" class="is-primary navbar-item">
                  <i class="fa-solid fa-basket-shopping mr-2"></i> Product Category
                </router-link>
              </li>
            </ul>
            <p class="menu-label">USER MANAGEMENT</p>
            <ul class="menu-list">
              <li>
                <router-link to="/users" class="is-primary navbar-item">
                  <i class="fa-solid fa-user mr-2"></i> Users
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="column">
        <div class="pl-3 pr-3">
          <router-view class="mt-3"> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>