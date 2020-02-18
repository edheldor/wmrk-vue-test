<template>
  <div class="home">
   <user-data-table></user-data-table>
  </div>
</template>

<script>
// @ is an alias to /src

import UserDataTable from "@/components/UserDataTable";

export default {
  name: 'Home',
  components: {
    UserDataTable
  },
    beforeCreate(){
        this.$store.commit('changeDataEndpointUrlToOriginalWrapped')
    }
}
</script>
