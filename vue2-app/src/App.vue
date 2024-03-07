<template>
  <div id="app">
    <b-navbar class="mb-5" toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="/">Home</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/manage-page">Create New Page</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-container>
      <router-view></router-view> <!-- This renders the current route's component -->
    </b-container>
  </div>
</template>
