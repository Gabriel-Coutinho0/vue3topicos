<template>
  <div>
    <h1>Welcome {{ nome }}</h1>
    <input  type="text" v-model="nome"/>
    <p v-if="nome.length > 10">O nome é muito longo </p>

    <CustumTable :usuarios="usuarios"/>
  </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import CustumTable from '@/components/CustumTable.vue';
const nome = ref('nome');

const usuarios = ref([{id:1, nome:'geraldo'}, {id: 2, nome:'geraldo2'}])

</script>
