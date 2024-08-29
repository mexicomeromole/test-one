<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css'

// Variables para los campos
const orcId = ref('');
const projectName = ref('');
const projectDescription = ref('');
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const selectedObjective = ref('');

// Función para manejar el clic en el input del DatePicker
const handleInputClick = (event: MouseEvent, togglePopover: () => void) => {
  event.preventDefault();
  togglePopover();
};

const handleSubmit = () => {
  console.log("ID Sistema ORC´s:", orcId.value);
  console.log("Nombre del proyecto:", projectName.value);
  console.log("Descripción del proyecto:", projectDescription.value);
  console.log("Fecha de inicio:", startDate.value);
  console.log("Fecha de fin:", endDate.value);
  console.log("Objetivo seleccionado:", selectedObjective.value);
};
</script>
<template>
<form @submit.prevent="handleSubmit" name="form_1">
  <div class="formField">
    <label>ID Sistema ORC´s</label>
    <input type="text" v-model="orcId" />
  </div>
  <div class="formField">
    <label>Nombre del proyecto</label>
    <input type="text" v-model="projectName" />
  </div>
  <div class="formField">
    <label>Descripción del proyecto</label>
    <input type="text" v-model="projectDescription" />
  </div>

  <div class="formField formFieldHalf date-picker-wrapper">
    <DatePicker
      v-model="startDate"
      :is-inline="false"
      :popover="{ placement: 'bottom-start' }"
    >
      <template #default="{ inputValue, togglePopover }">
        <input
          type="text"
          :value="inputValue"
          class="date-input"
          placeholder="Fecha de inicio"
          :readonly="true"
        />
        <span class="calendar-icon" @click="togglePopover">
        <img  width="20" src="../assets/calendario.svg">
        </span>
      </template>
    </DatePicker>
  </div>
  <div class="formField formFieldHalf date-picker-wrapper">
    <DatePicker
      v-model="endDate"
      :is-inline="false"
      :popover="{ placement: 'bottom-start' }"
    >
      <template #default="{ inputValue, togglePopover }">
        <input
          type="text"
          :value="inputValue"
          class="date-input"
          placeholder="Fecha de fin"
          :readonly="true"
        />
        <span class="calendar-icon" @click="togglePopover">
        <img width="20" src="../assets/calendario.svg">
        </span>
      </template>
    </DatePicker>
  </div>

  <div>
    <label for="objective">Selecciona un objetivo:</label>
    <select v-model="selectedObjective" class="custom-select">
      <option disabled value="">Selecciona un objetivo...</option>
      <option value="2021 CHGS Garantizar que los datos y estadística relacionada con gente...">2021 CHGS Garantizar que los datos y estadística relacionada con gente...</option>
      <option value="2021 CHGS Asegurar que los Directivos de unidades...">2021 CHGS Asegurar que los Directivos de unidades...</option>
      <option value="2021 CH AyC. Gestionar a los equipos Directivos bajo el Modelo...">2021 CH AyC. Gestionar a los equipos Directivos bajo el Modelo...</option>
      <option value="2021 CH BOFF Fortalecer una cultura de alto desempeño...">2021 CH BOFF Fortalecer una cultura de alto desempeño...</option>
    </select>
  </div>

  <button type="submit">Prioridad del proyecto</button>
</form>
</template>
