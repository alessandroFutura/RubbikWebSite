<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        bg-color=""
        theme=""
        permanent
      >
        <v-list class="header-sidebar">
          <img  :src="logoRubbik" alt="Logo Futura" />
        </v-list>

        <v-divider></v-divider>
        <v-list nav>
          <v-list-item :to="{ name: 'home' }" prepend-icon="mdi-view-dashboard" title="Dashboard" value="home"  class="item-menu"></v-list-item>
          <v-list-item :to="{ name: 'company' }" prepend-icon="mdi-domain" title="Empresa" value="company" class="item-menu"></v-list-item>
          <v-list-item :to="{ name: 'document' }" prepend-icon="mdi-file-code" title="Documentos" value="document" class="item-menu"></v-list-item>
          <v-list-item :to="{ name: 'user' }" prepend-icon="mdi-account-group" title="Usuários" value="user" class="item-menu"></v-list-item>
          <v-list-item :to="{ name: 'config' }" prepend-icon="mdi-cog" title="Configurações" value="config" class="item-menu"></v-list-item>
        </v-list>

        <div class="footer-sidebar">
          <img style="width: 122px;" :src="logoFutura" alt="Logo Futura" />
        </div>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import logoFutura from '@/assets/futura.png';
  import logoRubbik from '@/assets/rubbik.png';
</script>

<style scoped>
  .footer-sidebar
  {
    position: absolute;
      bottom: 0px;
      display: flex;
      justify-content: center;
      width: 255px;
      align-items: center;
      background-color: #5c2e74;
      height: 60px;
  }
  .header-sidebar
  {
    display: flex;
    height: 60px;
    justify-content: center;
    background-color: #f8fdff !important;
  }
  .item-menu
  {
    color: #5c2e74;
  }
</style>
