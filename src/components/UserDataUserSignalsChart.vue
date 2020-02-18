<template>
    <apexchart type="bar" height="350" :options="chartOptions" :series="this.seriesWrapper"></apexchart>
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
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    xaxis: {
                        type: 'datetime',
                        // labels: {
                        //     format: 'HH:mm:ss  dd/MM/yyyy',
                        // }
                        labels: {
                            datetimeFormatter: {
                                year: 'yyyy',
                                month: 'MMM \'yy',
                                day: 'dd MMM',
                                hour: 'HH:mm',
                                minute: 'HH:mm:ss',
                            }
                        }

                    },
                    yaxis: {
                        title: {
                            text: 'db'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        x:{
                            show:true,
                            format: 'HH:mm:ss:ff  dd.MM.yyyy'

                        },
                        y: {
                            formatter: function(value) {
                                return value +" db"
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
                    "data":this.usersignalsdata}]
            }
        }
    }
</script>

<style scoped>

</style>