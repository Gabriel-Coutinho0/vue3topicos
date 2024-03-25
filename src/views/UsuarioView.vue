<template>
  <div>
    <h1>Welcome {{ nome }}</h1>
    <input type="text" v-model="nome" />
    <input type="text" v-model="senha" />

    <p v-if="nome.length > 10">O nome é muito longo</p>

    <CustumTable :usuarios="usuarios" />
    <button type="submit" @click="novoUsuario">Clica</button>
    <div v-if="erro">{{ erro }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CustumTable from '@/components/CustumTable.vue'
import axios, { AxiosError } from 'axios'
const nome = ref('')
const senha = ref('')
const erro = ref('')

const usuarios = ref([])
const busca = async () => {
  const response = await axios.get('usuario')
  usuarios.value = response.data
}
const novoUsuario = async () => {
  try {
    usuarios.value.push(await axios.post('usuario', { nome: nome.value, senha: senha.value }))
  } catch (error) {
    erro.value = (error as AxiosError).message
  }
}

onMounted(() => {
  busca()
})
</script>
