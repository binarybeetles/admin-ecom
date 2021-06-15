<template>
  <div class="sidebar">
    <div class="wrapper">
      <div class="list">
        <ul>
          <li class="logo-list">
            <router-link to="/"> Admin </router-link>
          </li>
          <div class="divider" />

          <li
            v-for="(option, index) in featureOptions"
            :key="index"
            @click="toggleSidebar"
          >
            <div class="option">
              <div v-if="option.subTitle">
                <div
                  class="title-container"
                  @click="
                    selectedTitle !== option.title
                      ? (selectedTitle = option.title)
                      : (selectedTitle = null)
                  "
                >
                  <div>
                    <i class="material-icons">{{ option.icon }}</i>
                    <span class="title-heading"> {{ option.title }}</span>
                  </div>
                  <i
                    class="arrow material-icons"
                    :class="{ rotate: selectedTitle === option.title }"
                  >
                    chevron_right
                  </i>
                </div>
                <div
                  class="sub-title-wrapper"
                  :class="{ showTitle: selectedTitle === option.title }"
                >
                  <router-link
                    v-for="(subOption, subIndex) in option.subTitle"
                    class="sub-title"
                    :key="subIndex"
                    :to="`/${option.route}/${subOption.route}`"
                  >
                    <span class="sub-option"> {{ subOption.title }}</span>
                  </router-link>
                </div>
              </div>
              <router-link v-else :to="`/${option.route}`">
                <i class="material-icons">{{ option.icon }}</i>
                <span class="title-heading"> {{ option.title }}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-sidebar",
  computed: {},
  data() {
    return {
      featureOptions: [
        { route: "", icon: "dashboard", title: "Dashboard" },
        {
          route: "vendor",
          icon: "storefront",
          title: "Vendor",
          subTitle: [
            { route: "list", title: "List" },
            { route: "create", title: "Create" },
            { route: "product", title: "Product" },
          ],
        },
        {
          route: "product",
          icon: "widgets",
          title: "Products",
          subTitle: [
            { route: "list", title: "All Products" },
            { route: "create", title: "Add Product" },
            { route: "more-photo", title: "Add More Image" },
          ],
        },
        {
          route: "categories",
          icon: "format_list_bulleted",
          title: "Categories",
          subTitle: [
            { route: "list", title: "All Categories" },
            { route: "create", title: "Add Category" },
            { route: "sub-create", title: "Add Sub-Category" },
            { route: "sub-child-create", title: "Add Child-Category" },
          ],
        },
        {
          route: "locations",
          icon: "location_on",
          title: "Locations",
          subTitle: [
            { route: "list", title: "All Locations" },
            { route: "create", title: "Add Location" },
          ],
        },
        {
          route: "areas",
          icon: "map",
          title: "Areas",
          subTitle: [
            { route: "list", title: "All Area" },
            { route: "create", title: "Add Area" },
          ],
        },
        { route: "customers", icon: "groups", title: "Customers" },
        { route: "payment", icon: "attach_money", title: "Payment" },
      ],
      selectedTitle: null,
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
    userAccess(type) {
      if (type === "bar_chart") {
        return this.isPremiumPlan;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100vh - 1rem);
  border-radius: 0px 0px 8px 0px;
  background: #173ab8;

  ul {
    list-style: none;
    .logo-list {
      display: flex;
      align-items: center;
      font-size: 2rem;
      padding: 0 1rem;
      margin-bottom: 0.8rem !important;
      a {
        opacity: 0;
        color: #c7c7c7;
        visibility: hidden;
        transition: all 0.2s ease;
      }
      .logo {
        width: 30px;
        margin-right: 0.3rem;
      }
    }
    &:not(:last-child) {
      margin: 0.8rem 0;
    }
    li {
      white-space: nowrap;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
      // for opacity
      span {
        transition: all 0.2s ease;
        opacity: 1;
        visibility: hidden;
        color: #c7c7c7;
      }
      a {
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
      }
      .option {
        padding: 0.25rem 1rem;
        .title-container {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sub-title {
          padding: 0.25rem 1rem;
          width: 180px;
          height: 40px;
          span {
            margin-left: 35px;
          }
          &:hover {
            span {
              color: white;
            }
          }
        }
        &:hover {
          .title-heading,
          .material-icons {
            color: white;
          }
        }
        .sub-option {
          &:hover {
            color: white;
          }
        }
      }
    }
  }
  &.open,
  &:hover {
    ul {
      .logo-list a {
        opacity: 1;
        visibility: visible;
        color: white;
      }
      li span {
        opacity: 1;
        visibility: visible;
      }
      li a {
        color: #c7c7c7;
      }
    }
    a {
      text-decoration: none;
      outline: none;
      &.match.router-link-active,
      &.router-link-active,
      &.router-link-exact-active {
        color: #c7c7c7;
      }
    }
  }
  .arrow {
    color: #c7c7c7;
    font-size: 22px !important;
    margin: 0;
    transition: all 0.2s ease;
  }
  .rotate {
    transform: rotate(90deg);
    transition: all 0.2s ease;
  }
  .sub-title-wrapper {
    height: 0px;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition: all 0.2s ease;
  }
  .showTitle {
    height: 100%;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition: all 0.2s ease;
  }
  .material-icons {
    color: #c7c7c7;
    font-size: 26px;
    margin-right: 1rem;
  }
  .material-icons,
  a {
    display: inline-block;
    vertical-align: middle;
  }
  a {
    color: #c7c7c7;
    text-decoration: none;
    outline: none;
    &.match.router-link-active,
    &.router-link-active,
    &.router-link-exact-active {
      color: #c7c7c7;
      font-weight: 500;
    }
  }
  .wrapper {
    height: 100%;
    width: 220px;
    padding: 1rem 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #173ab8;
    .divider {
      border-bottom: 1px solid var(--color-gray-2);
      margin: 0rem 1rem 1.75rem 1rem;
    }
  }
}
@media (max-width: 769px) {
  .sidebar {
    margin-top: 3.5rem;
    height: 100%;
    position: absolute;
    ul {
      .logo-list {
        a {
          width: 100%;
          opacity: 10;
          visibility: visible;
          color: #c7c7c7;
        }
      }
      li span {
        opacity: 10;
        visibility: visible;
        color: #c7c7c7;
        font-size: 1.5rem;
      }
    }
    a {
      color: #c7c7c7;
      width: 100%;
    }
  }
  .wrapper {
    display: block !important;
    z-index: 1;
    position: relative;
    background: #173ab8;
  }
}
</style>
