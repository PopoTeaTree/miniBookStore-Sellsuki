// navbar to navigate to any page
<template>
    <nav class="navbar  fixed-top navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/">
        <div class="logo-image">
              <img src="./Pic/navBar/bookLogo.png" class="img-fluid">
        </div>
      </a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        &emsp;&emsp;
        <b-nav-item><router-link to="/manga" class="color-leter-bar">Manga</router-link></b-nav-item>&emsp;&nbsp;
        <b-nav-item><router-link to="/novel" class="color-leter-bar">Novel</router-link></b-nav-item>&emsp;&nbsp;
        <b-nav-item><router-link to="/history" class="color-leter-bar">History</router-link></b-nav-item>&emsp;&nbsp;
        <b-nav-item><router-link to="/promotion" class="color-leter-bar">Promotion</router-link></b-nav-item>&emsp;&nbsp;
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/cart" class="color-leter-bar">Cart</router-link>
        </b-nav-item>
        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em class="color-leter-barUser">User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </nav>
</template>

<style scoped>
  .logo-image{
    width: 100px;
    margin-top: -6px;
  }
  .navbar {
    background-color: #BA8458;
    color: #5A2B17;
  }
  .color-leter-barUser {
    color: #5A2B17;
    font-weight: bold;
  }
  .color-leter-bar {
    color: #5A2B17;
    font-weight: bold;
  }
  .color-leter-bar:active {
    background-color: #5A2B17;
    color: #BA8458;
    font-weight: bold;
  }
  .color-leter-bar:hover {
    background-color: #5A2B17;
    color: #BA8458;
    font-weight: bold;
  }
  .imgCart {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>