<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Edit Product Category</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link
            to="/product-category"
            class="button is-success navbar-item mr-2"
          >
            <i class="fas fa-save mr-2"></i>
            Save
          </router-link>
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
                    placeholder="e.g. Description"
                  ></textarea>
                </p>
              </div>
              <div class="field">
                <label class="label">Desc. in English</label>
                <p class="control is-expanded">
                  <textarea
                    class="textarea"
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
                    <select>
                      <option value="active">Active</option>
                      <option value="in-active">InActive</option>
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
export default {
    
}
</script>