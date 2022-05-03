jQuery(document).ready(function ($) {

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function (e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    // JavaScript Chart
    var doughnutData = [{
        value: 95,
        color: "#1abc9c"
    },
    {
        value: 5,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

    // bootstrap Chart
    var doughnutData = [{
        value: 80,
        color: "#1abc9c"
    },
    {
        value: 20,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

    // jquery Chart
    var doughnutData = [{
        value: 75,
        color: "#1abc9c"
    },
    {
        value: 25,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(doughnutData);

    // angularjs Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
    },
    {
        value: 30,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("angularjs").getContext("2d")).Doughnut(doughnutData);

    // angular Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
    },
    {
        value: 30,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("angular").getContext("2d")).Doughnut(doughnutData);

    // net Chart
    var doughnutData = [{
        value: 80,
        color: "#1abc9c"
    },
    {
        value: 20,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("net").getContext("2d")).Doughnut(doughnutData);

    // core Chart
    var doughnutData = [{
        value: 60,
        color: "#1abc9c"
    },
    {
        value: 40,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("core").getContext("2d")).Doughnut(doughnutData);

    // mvc Chart
    var doughnutData = [{
        value: 85,
        color: "#1abc9c"
    },
    {
        value: 15,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("mvc").getContext("2d")).Doughnut(doughnutData);

    // api Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
    },
    {
        value: 30,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("api").getContext("2d")).Doughnut(doughnutData);

    // sql Chart
    var doughnutData = [{
        value: 90,
        color: "#1abc9c"
    },
    {
        value: 10,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("sql").getContext("2d")).Doughnut(doughnutData);

    // windows Chart
    var doughnutData = [{
        value: 60,
        color: "#1abc9c"
    },
    {
        value: 40,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("windows").getContext("2d")).Doughnut(doughnutData);

    // wcf Chart
    var doughnutData = [{
        value: 65,
        color: "#1abc9c"
    },
    {
        value: 35,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("wcf").getContext("2d")).Doughnut(doughnutData);

    // tfs Chart
    var doughnutData = [{
        value: 90,
        color: "#1abc9c"
    },
    {
        value: 10,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("tfs").getContext("2d")).Doughnut(doughnutData);

    // gitlab Chart
    var doughnutData = [{
        value: 75,
        color: "#1abc9c"
    },
    {
        value: 25,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("gitlab").getContext("2d")).Doughnut(doughnutData);

    // jira Chart
    var doughnutData = [{
        value: 65,
        color: "#1abc9c"
    },
    {
        value: 35,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("jira").getContext("2d")).Doughnut(doughnutData);

    // azuredevops Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
    },
    {
        value: 30,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("azuredevops").getContext("2d")).Doughnut(doughnutData);

    // project Chart
    var doughnutData = [{
        value: 80,
        color: "#1abc9c"
    },
    {
        value: 20,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("project").getContext("2d")).Doughnut(doughnutData);

    // visio Chart
    var doughnutData = [{
        value: 90,
        color: "#1abc9c"
    },
    {
        value: 10,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("visio").getContext("2d")).Doughnut(doughnutData);

    // checkmarx Chart
    var doughnutData = [{
        value: 80,
        color: "#1abc9c"
    },
    {
        value: 20,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("checkmarx").getContext("2d")).Doughnut(doughnutData);

    // wireframe Chart
    var doughnutData = [{
        value: 90,
        color: "#1abc9c"
    },
    {
        value: 10,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("wireframe").getContext("2d")).Doughnut(doughnutData);

    // azure Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
    },
    {
        value: 30,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("azure").getContext("2d")).Doughnut(doughnutData);

    // aws Chart
    var doughnutData = [{
        value: 50,
        color: "#1abc9c"
    },
    {
        value: 50,
        color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("aws").getContext("2d")).Doughnut(doughnutData);
});
