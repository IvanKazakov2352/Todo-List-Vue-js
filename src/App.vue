<template>
  <div id="app">
    <Navbar></Navbar>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
