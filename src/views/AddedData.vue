<template>
  <div>
    <user-data-table></user-data-table>
  </div>
</template>

<script>
  // @ is an alias to /src

  import UserDataTable from "@/components/UserDataTable";

  export default {
    name: 'AddedData',
    components: {
      UserDataTable
    },
    beforeCreate(){
        this.$store.commit('changeDataEndpointUrlToAddedData')
    }
  }
</script>


