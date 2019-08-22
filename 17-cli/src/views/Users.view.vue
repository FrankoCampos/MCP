<template>
  <v-container>
    <menu-nav/>
    <users-table :data="get_users"/>
    <user-dialog />
    <user-confirm-dialog />
    <user-create-dialog  />
    <br>
    <br>
    <br>

    <hr>
    <pre>{{ $data }}</pre>
    <footer-mcp/>
  </v-container>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import UsersTable from '../components/Users/UsersTable';
import DialogOptions from '../components/Users/UsersDialog';
import UserConfirmDialog from '../components/Users/UserConfirmDialog';
import UserCreateDialog from '../components/Users/UserCreateDialog';
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.SET_LOADER({status: true, message: "Obteniendo datos..."});
    this.getAllUsers();
  },
  methods: {
    ...mapActions(["getAllUsers"]),
    ...mapMutations(["SET_LOADER"]),
  },
  computed:{
    ...mapGetters(["get_api_response", "get_users"]),

  },
  components:{
    "footer-mcp": Footer,
    "menu-nav": Menu,
    "users-table": UsersTable,
    "user-dialog": DialogOptions,
    "user-confirm-dialog": UserConfirmDialog,
    "user-create-dialog": UserCreateDialog
  }
}
</script>

