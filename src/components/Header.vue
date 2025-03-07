<template>
  <header class="header-container">
    <h2 class="header-title">{{ routeLabel }}</h2>
    <UserMenu/>
  </header>
</template>

<script setup>
  import UserMenu from '@/components/userMenu/UserMenu.vue';

  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  const route = useRoute();
  const routeLabel = computed(() => route.meta.label || 'Sem título');

</script>

<style scoped>
.header-container
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  color: #6d2b75;
  background: #f8fdff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.header-title
{
  margin-left: 15px;
}
</style>
