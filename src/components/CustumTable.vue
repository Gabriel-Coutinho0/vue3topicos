<template>
  <table>
    <thead>
      <td>ID</td>
      <td>Nome</td>
    </thead>
    <tbody>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td>{{ usuario.id }}</td>
        <td>{{ usuario.nome }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
defineProps<{
  usuarios: { id: number; nome: string }[]
}>()
</script>
