$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

const api_key = "1320836b49e8ca149922abf1dcb4a74e"


function  displayWeather1(json, town)
{
    let temp = json.main.temp;
    let feels_like = json.main.feels_like;
    let min_temp = json.main.temp_min;
    let max_temp = json.main.temp_max;
    let pressure = json.main.pressure;
    let humidity = json.main.humidity;
    let wind_speed = json.wind.speed;
    let id_of_icon = json.weather[0].icon;
    let weather_name = json.weather[0].main;
    let weather_desc = json.weather[0].description;

    let table_data = {
        "Teplota" : temp + " °C",
        "Pocitová teplota" : feels_like + " °C",
        "Minimální teplota" : min_temp + " °C",
        "Maximální teplota" : max_temp + " °C",
        "Tlak" : pressure + " hPa",
        "Vlhkost" : humidity + " %",
        "Rychlost větru" : wind_speed + " km/h",
    };

    let card1header = document.getElementById("card1Header");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '. ' + yyyy;

    card1header.innerHTML = `<h3><strong>${town}, ${today}</strong></h3>`;
    let card1List = document.getElementById("card1List");
    let newItem = document.createElement("li");
    newItem.className += " list-group-item text-center";
    newItem.innerHTML = ` <span style="font-weight: bolder; font-size: 18px;">${weather_desc}</span>` + "<img src='http://openweathermap.org/img/wn/"+id_of_icon.toString()+"@2x.png' width='30%' />" ;;
    card1List.innerHTML = "";
    card1List.appendChild(newItem);

    let table1tbody = document.getElementById("table1tbody");
    table1tbody.innerHTML = "";
    for (const [key, value] of Object.entries(table_data))
    {
        let row = document.createElement("tr");
        let key_element = document.createElement("td");
        key_element.innerHTML = key;
        let value_element = document.createElement("td");
        value_element.innerHTML = value;

        row.appendChild(key_element);
        row.appendChild(value_element);
        table1tbody.appendChild(row);
    }

    document.getElementById("tab2").style.display = "block";
}

let graph = null;
function  displayWeather2(json, town)
{
    let count = json.cnt;
    let list = json.list;

    let ctx = document.getElementById('graph').getContext('2d');
    let axis_y = [];
    let axis_x = [];

    for( let i = 0; i < count; i++)
    {
        let temp = list[i].main.temp;
        let dateTime = list[i].dt_txt;
        axis_y.push(temp);
        axis_x.push(dateTime);
    }

    if(graph!=null){
        graph.destroy();
    }

    graph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: axis_x,
            datasets: [{
                label: "Teplota °C",
                data: axis_y,
                fill: false,
                borderColor: "blue",
                borderWidth: 5,
                lineTension: 0,
                tension: 0.1,
            }]
        },
        options: {
            legend: {
                display: true,
            },
            fill: false,
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "black",
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Časový úsek",
                        fontColor: "black"
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        color: "black"
                    },
                    ticks: {
                        fontColor: "black",

                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Teplota °C",
                        fontColor: "black"
                    }
                }]
            }
        }
    });

}
function getJson(url, town){
    // read text from URL location
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(this.responseText);
            displayWeather1(myArr, town);
        }else if (this.readyState === 4 && this.status !== 200)
        {
            alert("Pro zadané město neexistuje záznam");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}
function getJson2(url, town){
    // read text from URL location
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(this.responseText);
            displayWeather2(myArr, town);
        }else
        {
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

function validateForm2(){
    let town = document.getElementById("townInput2").value;
    let pattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if(pattern.test("town") && town.length > 0)
    {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${api_key}&units=metric&lang=cz`;
        getJson(url, town);
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=${api_key}&units=metric&lang=cz`;
        getJson2(url2, town);
    }else
    {
        alert("Zadejte název města!");
        document.getElementById("townInput2").focus();
    }


}