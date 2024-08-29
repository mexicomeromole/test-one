<template>
    <div>
      <button class="etapaB" @click="abrirModal">Agregar etapa</button>
  
      <table class="registrosT" width="100%" v-if="etapas.length > 0">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Entregable</th>
            <th>Fecha inicio</th>
            <th>Fecha fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(etapa, index) in etapas" :key="index">
            <td>{{ etapa.titulo }}</td>
            <td>{{ etapa.descripcion }}</td>
            <td>{{ etapa.entregable }}</td>
            <td>{{ etapa.fechaInicio }}</td>
            <td>{{ etapa.fechaFin }}</td>
            <td>
              <button class="etapaC"  @click="editarEtapa(index)">Editar</button>
              <button class="etapaC"  @click="eliminarEtapa(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="modalAbierto" class="modal">
        <div class="modal-content">
          <h2>{{ modoEdicion ? 'Modificar' : 'Agregar' }} Etapa</h2>
          <form @submit.prevent="guardarEtapa">
            <div>
              <label for="titulo">Título de la iniciativa:</label>
              <input v-model="etapaActual.titulo" id="titulo" required>
            </div>
            <div>
              <label for="descripcion">Descripción de la etapa:</label>
              <textarea rows="3" v-model="etapaActual.descripcion" id="descripcion" required></textarea>
            </div>
            <div>
              <label for="entregable">Entregable de la etapa:</label>
              <input v-model="etapaActual.entregable" id="entregable" required>
            </div>
            <div>
              <label for="fechaInicio">Fecha inicio:</label>
              <input v-model="etapaActual.fechaInicio" id="fechaInicio" type="date" required>
            </div>
            <div>
              <label for="fechaFin">Fecha fin:</label>
              <input v-model="etapaActual.fechaFin" id="fechaFin" type="date" required>
            </div>
            <button type="submit">{{ modoEdicion ? 'Modificar' : 'Agregar' }}</button>
            <button type="button" @click="cerrarModal">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Etapa {
    titulo: string;
    descripcion: string;
    entregable: string;
    fechaInicio: string;
    fechaFin: string;
  }
  
  export default defineComponent({
    name: 'GestionEtapas',
    setup() {
      const etapas = ref<Etapa[]>([]);
      const modalAbierto = ref(false);
      const modoEdicion = ref(false);
      const etapaActual = ref<Etapa>({
        titulo: '',
        descripcion: '',
        entregable: '',
        fechaInicio: '',
        fechaFin: '',
      });
      const indiceEdicion = ref(-1);
  
      const abrirModal = () => {
        modalAbierto.value = true;
        modoEdicion.value = false;
        etapaActual.value = {
          titulo: '',
          descripcion: '',
          entregable: '',
          fechaInicio: '',
          fechaFin: '',
        };
      };
  
      const cerrarModal = () => {
        modalAbierto.value = false;
      };
  
      const guardarEtapa = () => {
        if (modoEdicion.value) {
          etapas.value[indiceEdicion.value] = { ...etapaActual.value };
        } else {
          etapas.value.push({ ...etapaActual.value });
        }
        cerrarModal();
      };
  
      const editarEtapa = (index: number) => {
        modoEdicion.value = true;
        indiceEdicion.value = index;
        etapaActual.value = { ...etapas.value[index] };
        modalAbierto.value = true;
      };
  
      const eliminarEtapa = (index: number) => {
        etapas.value.splice(index, 1);
      };
  
      return {
        etapas,
        modalAbierto,
        modoEdicion,
        etapaActual,
        abrirModal,
        cerrarModal,
        guardarEtapa,
        editarEtapa,
        eliminarEtapa,
      };
    },
  });
  </script>
  
  <style scoped>

button.etapaB {
	background-image: url('../assets/agregar.svg');
    background-size: 20px auto;
  background-position-x: left 5px;
  background-position-y: center;
}


  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>