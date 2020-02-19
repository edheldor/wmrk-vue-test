<template>
    <apexchart v-once  height="300" :options="chartOptions" :series="this.seriesWrapper"></apexchart>
</template>

<script>
    let ru = require("apexcharts/dist/locales/ru.json");
    export default {
        name: "UserDataUserSignalsChartV2",
        data(){
            return{
                chartOptions: {
                    chart: {
                        locales: [ru],
                        defaultLocale: 'ru',
                        type: 'rangeBar',
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
                        tooltip:{
                            enabled: true
                        }
                    },
                    yaxis: {
                        title: {
                            text: ' dBm ',
                            offsetX: 15,
                            offsetY: 0,



                        },
                        max: 0,
                        min: -120,
                        tickAmount: 6,
                        tooltip:{
                            enabled: false,

                        }

                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        // eslint-disable-next-line no-unused-vars
                        custom: function({series, seriesIndex, dataPointIndex, w}) {
                            let rssiValue =  w.config.series[0].data[dataPointIndex][1][1];
                            let date = w.globals.tooltip.xaxisTooltipText.innerText;

                            return '<div class="apexcharts-tooltip-box">' +
                                '<span>' + date  + '</span>' + "<p></p>" +
                                '<span>' + rssiValue + " dBm" + '</span>' +
                                '</div>'
                        },
                        x:{

                            format: 'HH:mm:ss dd.MM.yyyy'

                        },
                        theme: "light",


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
                let wrappedData = this.usersignalsdata.map(item=>{
                    return [item[0], [-120, item[1]]] //-120 чтобы график сторился от -120 dBm
                });
                return [{
                    "name":"RSSI",
                    "data":wrappedData
                }]
            }
        }
    }
</script>

<style >
.apexcharts-tooltip-box{
    margin: 10px;
    margin-left: 25px;
    margin-right: 25px;
}
.apexcharts-tooltip {

}
</style>