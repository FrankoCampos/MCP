<template>
  <v-layout justify-center>
    <v-dialog v-model="get_user_delete.dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text>User <span class="font-weight-black font-italic" >{{ get_user_delete.username }}</span> will be deleted.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="CLOSE_CONFIRM_DIALOG_USER">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="deleteUserDialog(get_user_delete)">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: 'UserConfirmDialog',
    data () { 
      return {
        dialog: false,
      }
    },
    methods: {
      ...mapActions(["deleteUser"]),
      ...mapMutations(["SET_LOADER","CLOSE_CONFIRM_DIALOG_USER"]),
      deleteUserDialog(user){
        this.SET_LOADER({status: true, message: "Verificando datos..."});
        this.deleteUser(user.id);
      }
    },
    computed:{
      ...mapGetters(["get_user_delete"])
    }
}
</script>