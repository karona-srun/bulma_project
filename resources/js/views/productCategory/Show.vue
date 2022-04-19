<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Show Product Catetory</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link
            to="/product-category"
            class="button is-link navbar-item"
          >
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
                <td>Name in Khmer</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Name in English</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Description in Khmer</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Description in English</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Created At</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Created By</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Updated At</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Updated By</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td> {{ this.$route.params.id }} </td>
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
  data() {
    return {
    };
  },
  mounted(){
    console.log(this.$route.params.id)
  }
};
</script>