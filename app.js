const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
// app.set('views', __dirname);



app.get("/", function(req, res) {

    var temp= "00.00";
    var weatherDescription, mintemp, icon, imgurl, maxtemp, pressure, humidity, vission, location, country,clouds ;

    // res.sendFile(__dirname + "/index.html");

    app.post("/", function(req, res){
        // var temp3=2;

        const locations = req.body.cityname;
        const appid = "c2a2015e4344910f2830c1b621b8ad36";
        const units = "metric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + locations + "&appid=" + appid + "&units=" + units;
        https.get(url, function(response){
            console.log(response.statusCode);

            response.on("data", function(data){
                const weatherdata = JSON.parse(data);
                temp = weatherdata.main.temp;
                weatherDescription = weatherdata.weather[0].description;
                icon = weatherdata.weather[0].icon;
                imgurl = "http://openweathermap.org/img/wn/" + icon + ".png"
                
                mintemp = weatherdata.main.temp_min + " C";
                maxtemp = weatherdata.main.temp_max + " C";
                pressure = weatherdata.main.pressure + " hPa";
                humidity = weatherdata.main.humidity + " %";
                vission = weatherdata.visibility + " km";
                location = weatherdata.name;
                country = weatherdata.sys.country;
                clouds = weatherdata.clouds.all + " %";
                // res.render("weath", {temp1:temp});
                res.render("weath", {
                    weatherDescription1:weatherDescription,
                    temp1:temp,
                    icon:imgurl,
                    mintemp:mintemp,
                    maxtemp:maxtemp,
                    date:datetime,
                    pressure:pressure,
                    humidity:humidity,
                    vission:vission,
                    location:location,
                    country:country,
                    clouds:clouds
                });
                // const hha = res.write("temp" + temp);
                // const edit = document.getElementsByName('hhha');
                // edit = res.send(hha);
            })
        })
        // res.render(__dirname + "/main.html", {temp:temp});
    })
    // res.render("weath", {temp1:temp});

    var currentdate = new Date();
    var waar = currentdate.getDay();
    var tarik = currentdate.getDate();
    var month = currentdate.getMonth();
    var year = currentdate.getFullYear();
    var day="";
    var mon="";
    switch(waar) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3: 
            day = "Wed";
            break;
        case 4:
            day = "Thru";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "sat";
            break;
        default:
            console.log("error date");
    }

    switch(month) {
        case 0:
            mon = "Jan";
            break;
        case 1:
            mon = "Feb";
            break;
        case 2:
            mon = "Mar";
            break;
        case 3:
            mon = "Apr";
            break;
        case 4:
            mon = "may";
            break;
        case 5:
            mon = "jun";
            break;
        case 6:
            mon = "jul";
            break;
        case 7:
            mon = "Aug";
            break;
        case 8:
            mon = "Sep";
            break;
        case 9:
            mon = "Oct";
            break;
        case 10:
            mon = "Nov";
            break;
        case 11:
            mon = "Dec";
            break;
        default:
            console.log("error  month"); 
    }


    var datetime = mon + " " + tarik
    + " " + day + "            " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    res.render("weath", {
        weatherDescription1:weatherDescription,
        temp1:temp,
        icon:imgurl,
        mintemp:mintemp,
        maxtemp:maxtemp,
        date:datetime,
        pressure:pressure,
        humidity:humidity,
        vission:vission,
        location:location,
        country:country,
        clouds:clouds
    });



});

// app.post("/", function(req, res){



// })
app.listen(3000, function() {
    console.log("server is running at 3000");
})