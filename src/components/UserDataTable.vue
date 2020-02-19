
<template>
    <div>
        <el-alert title="Адрес эндпоинта с данными"  type="info" dark center> {{this.$store.getters.userDataEndpointUrl}} </el-alert>
        <div class="fetching-animation" v-if="this.fetchingComplete ===  false">
            <fetching-data-animation></fetching-data-animation>
        </div>
        <div v-else>
            <div v-if="this.fetchingError === true">
                <el-alert
                        title="Ошибка подключения. Попробуйте повторить попытку позже"
                        type="error"
                        effect="dark"
                center>
                <el-alert
                    :title="fetchingErrorMesage.toString()"
                    type="error"
                    show-icon
                    center>
            </el-alert>
                </el-alert>


            </div>
            <div v-else>

                <el-table
                           @row-click="rowClicked"
                           ref="tableData"
                           :data="this.userDataAsArray"
                           :default-sort = "{prop: 'last_name', order: 'ascending'}"
                >
                    <el-table-column type="expand" >

                        <template  slot-scope="props">
                              <user-data-user-signals-chart   :usersignalsdata="userSignalsData(props.row.id) " ></user-data-user-signals-chart>
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
                            label="Телефон"
                            sortable>
                    </el-table-column>
                </el-table>

            </div>
        </div>


    </div>
</template>

<script>
    //import UserDataUserSignalsChart from "@/components/UserDataUserSignalsChart";
    import UserDataUserSignalsChart from "@/components/UserDataUserSignalsChartV2";
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
              //для отображения в таблице
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
            userSignalsData(id){
                //пакуем данные о силе сигнала и времени в формат для графика
                return this.usersData[id].signals.map(item=>{
                    return [item['ts'],  item['rssi']]
                })
            }

        },
        created(){

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
        margin-top: 1.5em;

    }


</style>