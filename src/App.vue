<script setup lang="ts">
import datos from './components/datos.vue'
import PredictiveInput from './components/PredictiveInput.vue'
import search from './components/search.vue'
import registros from './components/registros.vue'
</script>

<template>
  <div class="footer">Grupo Salinas <span class="amarillo">|</span> Actualización Octubre 2021</div>
  <div class="header">
    <div class="burguer">
      <img src="./assets/hamburguesa.svg" alt="Menu" />
    </div>
    <div class="home">
      <img src="./assets/home.svg" alt="Home" />
    </div>
    <div class="space">
     
    </div>
    <div class="user">
      <img src="./assets/user.png" alt="User" />
    </div>
  </div>
  <div class="content">
    <div class="wrap">
  <div class="tabMenu">
    <div class="menuItem datosMenu active">Datos</div>
    <div class="menuItem planMenu">Plan</div>
  </div>
  <div class="formsBox">
    <div class="orc">
      <datos/>
    </div>
    <div class="search"><search/></div>
  </div>

    <div class="predictiveInput"><PredictiveInput/></div>
    <div class="registros"><registros/></div>

  
</div>
</div>
</template>
<style scoped>
.datosMenu {
  /* Aplica la imagen de fondo */
  background-image: url('./assets/datos-generales.svg');
  background-size: 35px auto;
  background-position-x: left 30px;
  background-position-y: center;
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}
.planMenu {
  /* Aplica la imagen de fondo */
  background-image: url('./assets/plandetrabajo.svg');
  background-size: 30px auto;
  background-position-x: left 30px;
  background-position-y: center;
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}
</style>