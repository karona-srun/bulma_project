<template>
    <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Show User</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link to="/users" class="button is-link navbar-item">
            <i class="fas fa-arrow-left mr-2"></i>
            Back
          </router-link>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <table>
            <tbody>
              <tr>
                <td>Description</td>
                <td></td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>{{id}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>