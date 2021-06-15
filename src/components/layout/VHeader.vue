<template>
  <header
    class="v-header page-header bg-1"
    :class="{ 'sticky-header': $route.name === 'Menu' }"
  >
    <div class="container-full content">
      <div class="d-flex vertical-center">
        <i
          v-if="!$store.state.sidebar"
          @click="toggleMenu"
          class="material-icons hamburger"
          >menu</i
        >
        <i v-else @click="toggleMenu" class="material-icons hamburger">clear</i>
        <ul>
          <li class="page"></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
  components: {},
  computed: {},
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
    closeModal() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-header {
  margin-left: 0rem;
  margin-right: 0rem;
  border-radius: 0 0 8px 8px;
  top: 0;
  &.sticky-header {
    z-index: 10;
    position: sticky;
  }
  .container-full {
    height: 64px;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    list-style: none;
    .page {
      font-size: 1.25rem;
    }
  }
  a {
    color: #333;
    text-decoration: none;
    outline: none;
    &.match.router-link-active,
    &.router-link-exact-active {
    }
  }
  .dropdown-menu {
    width: 2rem;
    margin-top: 0.6rem;
    text-align: end;
    .options {
      margin-top: 20px;
      border-radius: 4px;
      position: absolute;
      left: -150px;
      list-style: none;
      width: 200px;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
      li {
        .list-option {
          align-items: center;
          i {
            margin-right: 1rem;
            color: var(--color-gray-3);
          }
        }
      }
    }
  }
  .user {
    margin-right: 1.3rem;
    letter-spacing: 0.25px;
    text-align: right;
    span {
      text-align: right;
      font-size: 14px;
      margin-top: 3px;
      color: var(--color-gray-3);
    }
  }
  .initials {
    height: 42px;
    width: 42px;
    text-align: center;
    margin-right: 0.3rem;
    border: 3px solid var(--color-green-2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
}
@media (min-width: 769px) {
  .hamburger {
    display: none;
    visibility: hidden;
  }
  .v-header {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media (max-width: 769px) {
  .v-header {
    z-index: 1;
    position: sticky;
  }
  .hamburger {
    display: block;
    visibility: visible;
    cursor: pointer;
    margin-right: 1rem;
  }
  .dropdown-menu {
    position: relative;
  }
}
</style>
