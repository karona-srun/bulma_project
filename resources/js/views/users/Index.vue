<template>
  <div class="is-primary">
    <div class="mb-4"></div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="is-size-5">Users</span>
        </p>
        <button class="card-header-icon" aria-label="more options">
          <router-link to="/create-user" class="button is-success navbar-item mr-2">
            <i class="fas fa-user-plus mr-2"></i>
            Create User
          </router-link>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th><abbr title="Position">Pos</abbr></th>
                  <th>Team</th>
                  <th><abbr title="Played">Pld</abbr></th>
                  <th><abbr title="Won">W</abbr></th>
                  <th><abbr title="Drawn">D</abbr></th>
                  <th><abbr title="Lost">L</abbr></th>
                  <th><abbr title="Goals for">GF</abbr></th>
                  <th><abbr title="Goals against">GA</abbr></th>
                  <th><abbr title="Goal difference">GD</abbr></th>
                  <th><abbr title="Points">Pts</abbr></th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <a
                      href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                      title="Leicester City F.C."
                      >Leicester City</a
                    >
                    <strong>(C)</strong>
                  </td>
                  <td>38</td>
                  <td>23</td>
                  <td>12</td>
                  <td>3</td>
                  <td>68</td>
                  <td>36</td>
                  <td>+32</td>
                  <td>81</td>
                  <td>
                    <p class="buttons">
                      <router-link
                        :to="{
                          name: 'ShowUser',
                          params: { title: 'karona_title',id: 12452 },
                          props: { id: 1223 },
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
                          params: { title: 'karona_title',id: 12452 },
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "USER",
};
</script>