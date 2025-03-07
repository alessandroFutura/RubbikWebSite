<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <Header />
      <div class="page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from '@/components/SideBar.vue'
  import Header from '@/components/Header.vue'
</script>

<style scoped>
  .container {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: black;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .page-content {
    position: fixed;
    left: 256px;
    top: 60px;
    right: 0;
    bottom: 0;
    padding: 20px;
  }
</style>
