<template>
    <apexchart v-once  height="300" :options="chartOptions" :series="this.seriesWrapper"></apexchart>
</template>

<script>
    let ru = require("apexcharts/dist/locales/ru.json");
    export default {
        name: "UserDataUserSignalsChart",
        data(){
            return{
                chartOptions: {
                    chart: {
                        locales: [ru],
                        defaultLocale: 'ru',
                        type: 'bar',
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'flat',

                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 0.2,
                        colors: ['black']
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            datetimeFormatter: {
                                year: 'yyyy',
                                month: 'MMM \'yy',
                                day: 'dd MMM',
                                hour: 'HH:mm',

                            },


                        },
                    },
                    yaxis: {
                        title: {
                            text: ' dBm ',

                        },
                        max: 0,
                        min: -120,
                        tickAmount: 6,





                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        x:{
                            show:true,
                            format: 'HH:mm:ss dd.MM.yyyy'

                        },
                        y: {
                            formatter: function(value) {
                                return value +" dBm"
                            }
                        }
                    }
                },
            }
        },
        props: {
            usersignalsdata: Array,
        },
        computed:{
            seriesWrapper(){
                //apex chart принимает данные в таком формате
                return [{
                    "name":"RSSI",
                    "data":this.usersignalsdata
                }]
            }
        }
    }
</script>

<style scoped>

</style>