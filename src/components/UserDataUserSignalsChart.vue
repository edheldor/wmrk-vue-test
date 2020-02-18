<template>
    <apexchart type="bar" height="350" :options="chartOptions" :series="this.seriesWrapper"></apexchart>
</template>

<script>
    export default {
        name: "UserDataUserSignalsChart",
        data(){
            return{
                chartOptions: {
                    chart: {
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
                        categories: this.categories,

                    },
                    yaxis: {
                        title: {
                            text: 'db'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                },
            }
        },
        props: {
            series: Array,
            categories: Array
        },
        computed:{
            seriesWrapper(){
                return [{"data":this.series}]
            }
        }
    }
</script>

<style scoped>

</style>