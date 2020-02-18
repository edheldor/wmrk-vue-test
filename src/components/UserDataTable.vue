
<template>
    <div>
        <div class="fetching-animation" v-if="this.fetchingComplete ===  false">
            <fetching-data-animation></fetching-data-animation>
        </div>
        <div v-else>
            <div v-if="this.fetchingError === true">
                Оишбка сети, попробуйте пожже
            </div>
            <div v-else>

                <el-table  lazy
                           @row-click="rowClicked"
                           ref="tableData"
                           :data="this.userDataAsArray"
                           :default-sort = "{prop: 'last_name', order: 'ascending'}"
                >
                    <el-table-column type="expand" >
                        <template slot-scope="props">
                        <p>{{props.row.id}}</p>
                            <user-data-user-signals-chart :series="userSignalsRssi(props.row.id)" :categories="userSignalsTimestamps(props.row.id)"></user-data-user-signals-chart>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="last_name"
                            label="Фамилия"
                            sortable>
                    </el-table-column> ]
                    <el-table-column
                            prop="first_name"
                            label="Имя"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="mac"
                            label="MAC"
                            sortable>
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="phone"
                            sortable>
                    </el-table-column>
                </el-table>

            </div>
        </div>


    </div>
</template>

<script>
    import UserDataUserSignalsChart from "@/components/UserDataUserSignalsChart";
    import FetchingDataAnimation from "@/components/FetchingDataAnimation";
    export default {
        name: "UserDataTable",
        components: {FetchingDataAnimation, UserDataUserSignalsChart},
        data(){
            return{
                fetchingError: false,
                fetchingComplete: false,
                usersData: {},
                fetchingErrorMesage: "",


            }
        },
        computed:{
          userDataAsArray(){
              let arr = [];
              for (let key in this.usersData){
                  arr.push({id: key,  last_name:this.usersData[key].last_name, first_name: this.usersData[key].first_name,
                      mac: this.usersData[key].mac, phone: this.usersData[key].phone,  signals: this.usersData[key].signals})
              }
              return arr;
          },


        },

        methods: {
            rowClicked(row) {
                this.$refs.tableData.toggleRowExpansion(row);
            },
            userSignalsTimestamps(id){
                return this.usersData[id].signals.map(item=>item['ts'])
            },
            userSignalsRssi(id){
                return this.usersData[id].signals.map(item=>Math.abs(item['rssi']))
            }
        },
        async created(){
            console.log(this.$store.getters.userDataEndpointUrl);
            this.axios.get(this.$store.getters.userDataEndpointUrl)
                .then(response=>{
                    this.usersData = response.data;
                    this.fetchingComplete = true;
                 })
                .catch(error=>{
                    this.fetchingError = true;
                    this.fetchingErrorMesage = error;
                    this.fetchingComplete = true;
                })
        }
    }
</script>

<style scoped>
    .fetching-animation{
        display: flex;
        justify-content: center;
        align-content: center;

    }


</style>