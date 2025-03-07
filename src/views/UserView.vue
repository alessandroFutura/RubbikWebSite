<template>
  <v-card
    flat
  >
    <v-text-field
      v-model="search"
      label="Busca rápida"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
      density="compact"
    ></v-text-field>

    <v-data-table
      :style="{ height: tableHeight + 'px' }"
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'

  const tableHeight = ref(window.innerHeight - 140)
  const search = ref('')
  const headers = [
    {
      align: 'start',
      key: 'image',
      sortable: false,
      title: '',
    },
    { key: 'userId', title: 'Código' },
    { key: 'userName', title: 'Usuário' },
    { key: 'email', title: 'Email' },
    { key: 'dateUpdate', title: 'Atualização' },
    { key: 'dateRegister', title: 'Cadastro' },
  ]
  const desserts = [
    {
      image: '',
      userId: '0001',
      userName: 'Heloise Isabela Silveira',
      email: 'heloise@gmail.com',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      userId: '0001',
      userName: 'Heloise Isabela Silveira',
      email: 'heloise@gmail.com',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      userId: '0001',
      userName: 'Heloise Isabela Silveira',
      email: 'heloise@gmail.com',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      userId: '0001',
      userName: 'Heloise Isabela Silveira',
      email: 'heloise@gmail.com',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },

  ]
</script>
