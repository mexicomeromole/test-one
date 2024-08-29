<template>
    <div class="searchBox">
        <label>ID Proyecto</label>
      <input
        type="text"
        v-model="searchId"
        @input="searchProject"
        placeholder="Escribe el número de ID Proyectos Sipres"
      />
      <div class="campos">
        <p class="labelP"><label>Nombre del Proyecto:</label><span class="answ"><span  v-if="project">{{ project.nombre_proyecto }}</span> &nbsp; </span></p>
        <p class="labelP"><label>Descripción del Proyecto: </label><span class="answ"><span  v-if="project"> {{ project.descripcion_proyecto }}</span>&nbsp;  </span></p>
        <div class="searchCols">
        <p class="labelP"><label>Fecha de Creación: </label><span class="answ"><span  v-if="project"> {{ project.fecha_creacion }}</span>&nbsp;  </span></p>
        <div class="mitades">
        <p class="labelP"><label>Capex:</label><span class="answ"> <span  v-if="project"> {{ project.capex }}</span>&nbsp;  </span></p>
        <p class="labelP"><label>Opex:</label><span class="answ"> <span  v-if="project"> {{ project.opex }}</span> &nbsp; </span></p>
        </div>
        </div>
        <div class="searchCols">
        <p class="labelP"><label>Pilar del Proyecto:</label> <span class="answ"> <span  v-if="project">{{ project.pilar_proyecto }}</span>&nbsp;  </span></p>
        <p class="labelP"><label>Clasificación Comité de Inversión: </label><span class="answ"> <span  v-if="project">{{ project.clasificacion_comite_inversion }}</span> &nbsp; </span></p>
        </div>  
    </div>
     
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const projects = ref([
        { id: 1, nombre_proyecto: "Proyecto Alpha", descripcion_proyecto: "Implementación de nuevas tecnologías", fecha_creacion: "15/01/2024", capex: 50000, opex: 10000, pilar_proyecto: "Innovación", clasificacion_comite_inversion: "Alta prioridad" },
        { id: 2, nombre_proyecto: "Proyecto Beta", descripcion_proyecto: "Expansión de mercado", fecha_creacion: "20/02/2024", capex: 30000, opex: 15000, pilar_proyecto: "Crecimiento", clasificacion_comite_inversion: "Media prioridad" },
        { id: 20, nombre_proyecto: "Proyecto Zeta", descripcion_proyecto: "Optimización de recursos", fecha_creacion: "30/07/2024", capex: 45000, opex: 20000, pilar_proyecto: "Eficiencia", clasificacion_comite_inversion: "Baja prioridad" }
      ]);
  
      const searchId = ref('');
      const project = ref(null);
  
      const searchProject = () => {
        const foundProject = projects.value.find(p => p.id === Number(searchId.value));
        project.value = foundProject || null;
      };
  
      return {
        searchId,
        project,
        searchProject
      };
    }
  });
  </script>