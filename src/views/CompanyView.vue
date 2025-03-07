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
    { key: 'companyId', title: 'Código' },
    { key: 'companyName', title: 'Razão Social' },
    { key: 'CNPJ', title: 'CNPJ' },
    { key: 'dateUpdate', title: 'Atualização' },
    { key: 'dateRegister', title: 'Cadastro' },
  ]
  const desserts = [
    {
      image: '',
      companyId: '0001',
      companyName: 'DAFEL COMERCIAL DE FERRO E ALUMÍNIO LTDA - MATRIZ',
      CNPJ: '53.785.310/0001-25',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      companyId: '0002',
      companyName: 'DAFEL COMERCIAL DE FERRO E ALUMÍNIO LTDA - MATRIZ',
      CNPJ: '53.785.310/0001-25',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      companyId: '0003',
      companyName: 'DAFEL COMERCIAL DE FERRO E ALUMÍNIO LTDA - MATRIZ',
      CNPJ: '53.785.310/0001-25',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      companyId: '0004',
      companyName: 'DAFEL COMERCIAL DE FERRO E ALUMÍNIO LTDA - MATRIZ',
      CNPJ: '53.785.310/0001-25',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
    {
      image: '',
      companyId: '0005',
      companyName: 'DAFEL COMERCIAL DE FERRO E ALUMÍNIO LTDA - MATRIZ',
      CNPJ: '53.785.310/0001-25',
      dateUpdate: '06/03/2025',
      dateRegister: '06/03/2025'
    },
  ]
</script>
