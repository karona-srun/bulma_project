<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Create Product Category</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <button @click.prevent="submitCreateProductCategory"
            class="button is-success navbar-item mr-2"
          >
            <i class="fas fa-save mr-2"></i>
            Save
          </button>
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
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <label class="label">Name in Khmer</label>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="productCategory.name_kh"
                    placeholder="Name is Khmer"
                  />
                </p>
              </div>
              <div class="field">
                <label class="label">Name in English</label>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="productCategory.name_en"
                    placeholder="Name is English"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <label class="label">Desc. in Khmer</label>
                <p class="control is-expanded">
                  <textarea
                    class="textarea"
                    v-model="productCategory.desc_kh"
                    placeholder="e.g. Description"
                  ></textarea>
                </p>
              </div>
              <div class="field">
                <label class="label">Desc. in English</label>
                <p class="control is-expanded">
                  <textarea
                    class="textarea"
                    v-model="productCategory.desc_en"
                    placeholder="e.g. Description"
                  ></textarea>
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <label class="label">Status</label>
                <div class="control">
                  <div class="select">
                    <select v-model="productCategory.status">
                      <option value="1">Active</option>
                      <option value="0">InActive</option>
                    </select>
                  </div>
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
      productCategory: {
        name_kh: '',
        name_en: '',
        desc_kh: '',
        desc_en: '',
        status: 1
      }
    }
  },
    methods: {
      ...mapActions(['CREATE_PRODUCT_CATEGORY']),
      submitCreateProductCategory(){
        alert(JSON.stringify(this.productCategory))
        this.CREATE_PRODUCT_CATEGORY(this.productCategory);
      }
    }
}
</script>