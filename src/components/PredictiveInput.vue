<template>
  <div class="predictive-input-container">
    <div v-for="field in fields" :key="field.name" class="input-field">
      <label>{{field.label2}}</label>
      <input
        :placeholder="`Agregar ${field.label}...`"
        v-model="field.value"
        @input="updateSuggestions(field)"
      />
      <ul v-if="field.suggestions.length" class="suggestions">
        <li v-for="suggestion in field.suggestions" :key="suggestion" @click="selectSuggestion(field, suggestion)">
          <span class="initials">{{ getInitials(suggestion) }}</span>
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import nombresMexicanos from "./nombresMexicanos.json";

interface Field {
  name: string;
  label: string;
  label2: string;
  value: string;
  suggestions: string[];
}

export default defineComponent({
  name: "PredictiveInput",
  setup() {
    const fields = reactive<Field[]>([
      { name: "responsable", label: "Responsable", label2: "Responsables del proyecto", value: "", suggestions: [] },
      { name: "administrador", label: "Administrador", label2: "Administrador", value: "", suggestions: [] },
      { name: "involucrado", label: "Involucrado", label2: "Involucrados (opcional)", value: "", suggestions: [] },
    ]);

    const updateSuggestions = (field: Field) => {
      if (field.value.length > 0) {
        field.suggestions = nombresMexicanos.filter(name =>
          name.toLowerCase().startsWith(field.value.toLowerCase())
        ).slice(0, 5);
      } else {
        field.suggestions = [];
      }
    };

    const selectSuggestion = (field: Field, suggestion: string) => {
      field.value = suggestion;
      field.suggestions = [];
    };

    const getInitials = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return initials.substring(0, 2); // Regresa solo las dos primeras iniciales
};

    return {
      fields,
      updateSuggestions,
      selectSuggestion,
      getInitials,
    };
  },
});
</script>
