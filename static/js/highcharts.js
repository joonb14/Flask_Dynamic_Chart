var chart;  //실제 그릴 차트
/**
 * Request data from the server, add it to the graph and set a timeout
 * to request again
 */
var PrevPacket;
//이전 json

var major_list=[];
//Major name list


function requestData() {
    $.ajax({
        url:'http://165.132.105.119:3000/new_data',
        dataType : "json",

        success: function(point) {
            if(PrevPacket == null || (PrevPacket.timestamp!=point.timestamp || PrevPacket.major!=point.major)){
                if (major_list==null||!major_list.includes(point.major)){
                    //console.log(point);
                    //console.log(point.major);
                    //console.log(point.timestamp);
                    var series = new Highcharts.Series();
                    series.name = "Major " + point.major;
                    chart.addSeries(series)
                    major_list.push(point.major)
                }
                chart.series.forEach((series_major) => {
                    //console.log(series_major.getName());
                    if(series_major.name == ("Major " + point.major)){
                        series_major.addPoint([point.timestamp, point.temp],true,false);
                    }
                });
                //console.log(chart.series);
                //var series = chart.series[0];
                // add the point
                //console.log(chart.series)
                //chart.series[0].addPoint(point,true,false);
                //chart.addSeries()
                //chart.series에 addpoint하는 방식으로 data에 추가

                // call it again after one second
            }

            PrevPacket = point
            setTimeout(requestData, 1000);
        },
        cache: false,
        error: function(error) {
            console.log(error);
        }
    });
}

$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container',
            defaultSeriesType: 'spline',
            events: {
                load: requestData
            }
        },
        title: {
            text: 'Temperature'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150, //millisecond 단위
            minRange: 20 * 1000 //If minRange is set to 3600000, you can't zoom in more than to one hour.
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Temperature',
                margin: 80
            }
        }
    });

});