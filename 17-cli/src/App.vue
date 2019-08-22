<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <api-loader :dialog="get_loader.status" :message="get_loader.message"></api-loader>
    </v-content>
  </v-app>
</template>

<script>
import ApiLoader from './components/ApiLoader';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    ApiLoader
  },
  computed:{
    ...mapGetters(["get_loader"])
  }
};
</script>
