<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Landing from '../src/views/Landing.vue'

export default {
  name: 'App',
  components: {
    'landing': Landing
  }
}
</script>
