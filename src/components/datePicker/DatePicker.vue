<template>
  <v-row justify="space-around" style="margin: 0px -6px;">
    <v-menu v-model="menu" transition="scale-transition" offset-y>
      <template v-slot:activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="date"
          label=""
          prepend-inner-icon="mdi-calendar"
          readonly
          density="compact"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" color="primary" @update:modelValue="menu = false"></v-date-picker>
    </v-menu>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const date = ref(null);
const menu = ref(false);
</script>
