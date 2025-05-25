<template>
  <div class="container-fluid">
      <header>
        <h2>Vue CLI - Router / Formularios</h2>
      </header>

      <main>
        <Formulario />
      </main>
  </div>
</template>

<script>
/* componentes de simple archivo (template, script y style) */
import Formulario from './components/Formulario.vue'

export default {
  name: 'app',
  components: {
    Formulario,
  }
}
</script>

<style scoped>

</style>
