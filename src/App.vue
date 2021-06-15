<template>
  <div
    id="app"
    class="app-container"
    :class="{ ['with-sidebar']: !hideSidebar }"
  >
    <!-- sidebar -->
    <v-sidebar :class="{ closed: !sidebar }" class="sidebar" />
    <div class="main-wrapper">
      <!-- header -->
      <v-header />
      <div class="page-body">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import "material-icons";
import VHeader from "@/components/layout/VHeader";
import VSidebar from "@/components/layout/VSidebar";

export default {
  name: "app",
  components: {
    VSidebar,
    VHeader,
  },
  data() {
    return {};
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
    hideSidebar() {
      const { hideSidebar } = this.$route.meta;
      return hideSidebar;
    },
  },
};
</script>
<style lang="scss">
body {
  color: var(--color-green-6);
  background: var(--color-gray-1);
}
.app-container {
  position: relative;
}
.bg-1 {
  background: #fff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03), 0px 1px 5px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}

:root {
  --sidebar-width: 192px;
  --sidebar-width-closed: calc(2rem + 2rem);
  --settings-verification-closed: 250px;
  --settings-verification-expanded: 400px;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background: var(--color-gray-1);
}
::-webkit-scrollbar-thumb {
  background: var(--color-gray-3);
  border-radius: 1rem;
}
.with-sidebar {
  .main-wrapper {
    width: calc(100% - var(--sidebar-width-closed));
    margin-left: var(--sidebar-width-closed);
  }
  .sidebar,
  .main-wrapper {
    transition: all 0.5s ease;
  }
  .sidebar {
    width: var(--sidebar-width-closed);
    &.open,
    &:hover {
      width: var(--sidebar-width);
    }
  }
  .sidebar:hover + .main-wrapper,
  .sidebar.open + .main-wrapper {
    width: calc(100% - var(--sidebar-width));
    margin-left: var(--sidebar-width);
  }
}
@media (max-width: 769px) {
  .with-sidebar,
  .main-wrapper {
    width: 100vw !important;
    margin-left: 0 !important;
  }
  .closed {
    // display: none;
  }
  .sidebar {
    width: 100vw !important;
  }
}
</style>
