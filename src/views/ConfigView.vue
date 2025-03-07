<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="#8d5ba8"
    >
      <v-tab value="one">Certificados</v-tab>
      <v-tab value="two">Integrações</v-tab>
      <v-tab value="three">Dados</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab" :style="{ height: tableHeight + 'px' }" color="#f4f4f4" >
        <v-tabs-window-item value="one">
          One
        </v-tabs-window-item>

        <v-tabs-window-item value="two" >
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three"  >
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
<script >
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
<script setup>
    import { ref } from 'vue'
    const tableHeight = ref(window.innerHeight - 200)
</script>
