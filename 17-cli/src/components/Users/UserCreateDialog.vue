<template>
  <v-layout justify-center>
    <v-dialog v-model="get_create_user_create_dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New User</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="create_form">
            <v-container grid-list-xs grid-list-md grid-list-xl>
              <v-layout wrap>
                <v-layout>
                  <v-flex xs6>
                    <v-text-field label="Name" name="user" v-model="new_user.name"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field label="Username" name="username" v-model="new_user.username"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs6>
                    <v-text-field
                      label="Password"
                      name="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[v => !!v || 'Contraseña obligatoria']"
                      prepend-icon="mdi-lock-outline"
                      :type="show1 ? 'text' : 'password'"
                      v-model="passToMatch"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      label="Confirm password"
                      name="confirm-password"
                      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="passConfirmationRules"
                      prepend-icon="mdi-lock-outline"
                      :type="show2 ? 'text' : 'password'"
                      v-model="new_user.password"
                      @click:append="show2 = !show2"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-flex xs12 sm12 md12>
                  <v-combobox
                    v-model="new_user.modules"
                    :items="modules_actives"
                    label="Modulos"
                    multiple
                    chips
                  ></v-combobox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <pre>{{ new_user }}</pre>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeCreateUser">Close</v-btn>
          <v-btn color="blue darken-1" text @click="createUserDialog">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "UserCreateDialog",
  props: {
    dialogHandle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modules_actives: [1, 2, 3, 4, 5],
      passToMatch: "",
      new_user: {
        name: "",
        username: "",
        password: "",
        modules: []
      },
      show1: false,
      show2: false
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    ...mapMutations(["SET_LOADER", "HANDLE_CREATE_DIALOG"]),
    closeCreateUser() {
      this.new_user.name = "";
      this.new_user.username = "";
      this.new_user.password = "";
      this.new_user.modules = [];
      this.passToMatch = "";
      this.HANDLE_CREATE_DIALOG();
    },
    createUserDialog() {
      if (this.$refs.create_form.validate()) {
        this.SET_LOADER({
          status: true,
          message: "Esperando respuesta del servidor..."
        });
        this.createUser(this.new_user);
        //this.$refs.create_form.reset();
      }
    },
    createSuccess(){
      this.$refs.create_form.reset();
      this.HANDLE_CREATE_DIALOG();
    }
  },
  computed: {
    ...mapGetters(["get_api_response", "get_create_user_create_dialog"]),
    passConfirmationRules() {
      return [
        () =>
          this.new_user.password === this.passToMatch || "Password must match",
        v => !!v || "Confirmation password is required"
      ];
    }
  },
  watch: {
    get_api_response: function(response) {
      if (response.status == 201) {
        this.createSuccess();
      }
    }
  }
};
</script>
