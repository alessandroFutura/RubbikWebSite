<template>
<v-container style="padding: 0;">
  <v-row>
    <v-col
      style="padding-bottom: 0;"
      cols="12"
      md="3"
    >
    <v-select
      clearable
      chips
      label=""
      density="compact"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>

    </v-col>

    <v-col
      style="padding-bottom: 0;"
      cols="12"
      md="2"
    >
      <DatePicker/>
    </v-col>
    <v-col
      style="padding-bottom: 0;"
      cols="12"
      md="2"
    >
      <DatePicker/>
    </v-col>
    <v-col
      style="padding-bottom: 0;"
      cols="12"
      md="3"
    >
      <v-text-field
        v-model="lastname"
        label="Documento"
        density="compact"
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      md="2"
    >
      <v-btn style="width: 100%;" color="primary">Filtrar</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <v-data-table
        :style="{ height: tableHeight + 'px' }"
        :headers="headers"
        :item-value="item => `${item.name}-${item.version}`"
        :items="desserts"
        items-per-page="5"
        show-select
      ></v-data-table>

    </v-col>
  </v-row>
</v-container>
</template>
<script setup>
  import DatePicker from '@/components/datePicker/DatePicker.vue';
  import { ref } from 'vue'

  const tableHeight = ref(window.innerHeight - 200)
  const headers = [
    { title: 'Série', align: 'start', key: 'serie'},
    { title: 'Número', align: 'start', key: 'documentCode' },
    { title: 'CNPJ/Fornecedor', align: 'start', key: 'CNPJ' },
    { title: 'Nome Fornecedor', align: 'start', key: 'providerName' },
    { title: 'Status', align: 'start', key: 'status' },
    { title: 'Valor', align: 'start', key: 'documentValue' },
  ]
  const desserts = [
    {
      serie: '1',
      documentCode: '50708',
      CNPJ: '81.315.426/0001-36',
      providerName: 'TUPER S.A DIV. TUBOS',
      status: 'OK',
      documentValue: 'R$ 11.125,19',
    },
    {
      serie: '1',
      documentCode: '50708',
      CNPJ: '81.315.426/0001-36',
      providerName: 'TUPER S.A DIV. TUBOS',
      status: 'OK',
      documentValue: 'R$ 11.125,19',
    },
    {
      serie: '1',
      documentCode: '50708',
      CNPJ: '81.315.426/0001-36',
      providerName: 'TUPER S.A DIV. TUBOS',
      status: 'OK',
      documentValue: 'R$ 11.125,19',
    },
    {
      serie: '1',
      documentCode: '50708',
      CNPJ: '81.315.426/0001-36',
      providerName: 'TUPER S.A DIV. TUBOS',
      status: 'OK',
      documentValue: 'R$ 11.125,19',
    },
  ]
</script>
