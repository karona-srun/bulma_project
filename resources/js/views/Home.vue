<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Home</p>
        <p class="subtitle">
          Everything you need to <strong>create a website</strong> with Bulma
        </p>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Search..." />
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-info is-fullwidth">
                <i class="fa-solid fa-magnifying-glass mr-2"></i> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container m-4">
      <div class="columns">
        <div class="column">
          <div class="box">
            <p class="is-3">Flexible column</p>
            <p class="">This column is only 200px wide.</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="is-3">Flexible column</p>
            <p class="">This column is only 200px wide.</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="is-3">Flexible column</p>
            <p class="subtitle">
              This column will take up the remaining space available.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="is-3">Flexible column</p>
            <p class="subtitle">
              This column will take up the remaining space available.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="title is-3">Flexible column</p>
            <p class="subtitle">
              This column will take up the remaining space available.
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer mt-5">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>