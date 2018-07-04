var rawData;

$(document).ready(function() {
    fakeAjaxCall();
});

var fakeAjaxCall = function() {
    // do ajax

    // on success
    rawData = [
        /* year, sales, expenses */
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ];

    initChart();

    // on error TODO
};

function initChart() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawFinanceChart);
}

function drawFinanceChart() {
    var data = new google.visualization.arrayToDataTable(
        appendHeader(rawData)
    );

    var options = {
        width: 500,
        height: 500,
        colors: ['#17A589', '#B7950B'],
        chart: {
            title: 'Finances'
        },
        series: {
            0: { axis: 'Sales' },
            1: { axis: 'Expenses' }
        },
        axes: {
            y: {
                Sales: { label: 'Dollars (in millions)' }
            }
        }
    };

    var chart = new google.charts.Bar(
        document.getElementById('finance_chart')
    );
    chart.draw(data, options);
}

function appendHeader(rawData) {
    rawData.unshift(
        ['Year', 'Sales', 'Expenses']
    );
    return rawData;
}
