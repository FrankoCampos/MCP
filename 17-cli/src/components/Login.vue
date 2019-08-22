<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      
      <v-flex xs6 md5>
        <v-card class="elevation-12">
          
          <v-toolbar color="primary" dark flat>
            
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon largehref="" target="_blank" v-on="on">
                    <v-icon>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>

          </v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-text-field label="Username" name="username" :rules="usernameRules" prepend-icon="mdi-account" type="text" v-model="username"></v-text-field>

                <v-text-field id="password" label="Password" name="password" :rules="[v => !!v || 'Contraseña obligatoria']" prepend-icon="mdi-lock-outline" type="password" v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          
        </v-card>
        <br>
        <hr>
        <pre>{{ $data }}</pre> 
        <hr>
        <pre>{{ get_api_response }}</pre> 
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import router from '@/router';
  export default {
    name:"login",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      username: '',
      password: '',
      usernameRules: [
        v => !!v || 'Username es obligatorio',
        v => (v && v.length <= 10) || 'Debe ser menor a 10 caracteres',
      ]
    }),
    methods:{
      ...mapActions(["loginUser"]),
      ...mapMutations(["SET_LOADER", "SET_USER_LOGIN"]),
      login(){
        if (this.$refs.form.validate()) {
          this.SET_LOADER({status: true, message: "Verificando datos..."});
          this.loginUser({username: this.username, password: this.password});
        }
      }

    },
    computed:{
      ...mapGetters(["get_api_response"])
    },
    watch:{
      get_api_response: response =>{
        if(response.status != 401){
          console.log(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
          router.push({ name: 'users' })
        }
      }
    }
  }
</script>
