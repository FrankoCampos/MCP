<template>
  <v-card>
    <v-card-title>
      <v-btn class="mx-2" fab dark small color="primary" @click="HANDLE_CREATE_DIALOG">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      &nbsp;
      Usuarios
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="data" :search="search">
      <template v-slot:item.options="{ item }">
        <v-icon @click="SET_USER_UPDATE(item)" >mdi-pencil</v-icon>
        &nbsp;
        <v-icon @click="SET_DELETE_USER(item)" >mdi-delete</v-icon>
      </template>
    </v-data-table>
    
  </v-card>
</template>

<script>

import { mapMutations } from 'vuex';
export default {
  name: "UsersTable",
  props:{
    data:{
      type: Array
    }
  },
  data() {
    return {
      search: "",
      headers: [
        { text:"Id", value:"id"},
        {
          text: "Nombre de usuario",
          align: "left",
          value: "username"
        },
        { text: "Módulos", value: "modules" },
        { text: "Creado", value: "created_at" },
        { text: "Opciones", sortable: false, value: "options"}
      ]
    };
  },
  methods: {
    ...mapMutations(["SET_USER_UPDATE","SET_DELETE_USER", "HANDLE_CREATE_DIALOG"])

  }
};
</script>