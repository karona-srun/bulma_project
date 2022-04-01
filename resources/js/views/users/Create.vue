<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Create User</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link to="/users" class="button is-success navbar-item mr-2">
            <i class="fas fa-save mr-2"></i>
            Save
          </router-link>
          <router-link to="/users" class="button is-link navbar-item">
            <i class="fas fa-arrow-left mr-2"></i>
            Back
          </router-link>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>