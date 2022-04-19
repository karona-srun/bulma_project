<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Product Category</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link
            to="/create-product-category"
            class="button is-success navbar-item mr-2"
          >
            <i class="fas fa-plus mr-2"></i>
            Create Product Category
          </router-link>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th><abbr title="Number">No</abbr></th>
                  <th><abbr title="Name in Khmer">Name Kh</abbr></th>
                  <th><abbr title="Name in English">Name En</abbr></th>
                  <th><abbr title="Description in Khmer">Desc. Kh</abbr></th>
                  <th><abbr title="Description in Khmer">Desc. En</abbr></th>
                  <th><abbr title="Status">Status</abbr></th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Khmer</td>
                  <td>English</td>
                  <td>Description Khmer</td>
                  <td>Description English</td>
                  <td>
                    <span class="tag is-medium is-primary">Active</span>
                  </td>
                  <td>
                    <p class="buttons">
                      <router-link
                        :to="{
                          name: 'ShowProductCategory',
                          params: { name:'test' , id: '2'}
                        }"
                        title="Info"
                        class="button is-small is-link is-outlined"
                      >
                        <span class="icon">
                          <i class="fas fa-eye"></i>
                        </span>
                      </router-link>
                      <router-link
                        :to="{
                          name: 'EditUser',
                          params: { name: 'karona_title' },
                          props: { id: 12452 },
                        }"
                        title="Edit"
                        class="button is-small is-warning is-outlined"
                      >
                        <span class="icon">
                          <i class="fas fa-edit"></i>
                        </span>
                      </router-link>
                      <button
                        title="Delete"
                        class="button is-small is-danger is-outlined"
                      >
                        <span class="icon">
                          <i class="fas fa-trash"></i>
                        </span>
                      </button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {{productCategory}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { response } from 'express';
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      productCategoryList: {}
    }
  },
  mounted(){
    this.fetchProductCategory()
  },
    methods: {
      ...mapActions(['PRODUCT_LIST']),

      fetchProductCategory(){
        var repon = this.PRODUCT_LIST()
        repon.then((response) => {
          this.productCategoryList = response.data
          console.log(response.data)
        })
      }
    }
}
</script>