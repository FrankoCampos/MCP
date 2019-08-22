<template>
  <v-layout justify-center>
    <v-dialog v-model="get_user_edit.dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md4>
                <v-text-field label="Username" v-model="get_user_edit.user.username"></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md4>
                <v-combobox
                  v-model="select"
                  :items="[1,2,3,4,5]"
                  label="Modulos"
                  multiple
                  chips
                ></v-combobox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialogUser">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateUserDialog(get_user_edit)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name:"DialogOptions",
    updated() {
      if(this.get_user_edit.dialog == true && this.times == 0){
        this.select = this.get_user_edit.user.modules
        this.times = 1;
      }
    },
    data() {
      return {
        times: 0,
        select: []
      }
    },
    methods: {
      ...mapActions(["updateUser"]),
      ...mapMutations(["SET_LOADER","CLOSE_DIALOG_USER"]),
      closeDialogUser(){
        this.times = 0;
        this.CLOSE_DIALOG_USER();
      },
      updateUserDialog(item){
        //console.log("USER", user);
        this.times = 0;
        this.SET_LOADER({status: true, message: "Verificando datos..."});
        this.updateUser({user: item.user, modules: this.select});
      }
    },
    computed:{
      ...mapGetters(["get_user_edit"])
    }
}
</script>