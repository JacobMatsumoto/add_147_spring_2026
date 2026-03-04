//https://www.calendardate.com/year2026_holidays.php

function calculate() {
    let year = parseInt(document.getElementById("year").value);
    
    let jan = []
    let feb = []
    let mar = []
    let apr = []
    let jun = []
    let jul = []
    let aug = []
    let sep = []
    let oct = []
    let nov = []
    let dec = []
    let may = []

    switch(year){
         
        case 2025:
            jan = [
            "01/01 New Year's Day",
            "01/20 Martin Luther King Jr. Day"
            ];

            feb = [
            "02/02 Groundhog Day",
            "02/17 Presidents' Day"
            ];

            mar = [
            "03/17 St. Patrick's Day",
            "03/14 Pi Day"
            ];

            apr = [
            "04/01 April Fools' Day",
            "04/05 Easter"
            ];

            may = [
            "05/11 Mother's Day",
            "05/26 Memorial Day"
            ];

            jun = [
            "06/15 Fathers' Day",
            "06/19 Juneteenth"
            ];

            jul = [
            "07/04 Independence Day",
            "07/26 Parents' Day"
            ];

            aug = [
            "08/21 Senior Citizens Day",
            "08/26 Women's Equality Day"
            ];

            sep = [
            "09/01 Labor Day",
            "09/11 Patriot Day"
            ];

            oct = [
            "10/31 Halloween",
            "10/13 Columbus Day"
            ];

            nov = [
            "11/11 Veterans Day",
            "11/27 Thanksgiving"
            ];

            dec = [
            "12/25 Christmas",
            "12/31 New Year's Eve"
            ];
            break;
        
        case 2026:
            jan = [
            "01/01 New Year's Day",
            "01/15 Martin Luther King Jr. Day"
            ];

            feb = [
            "02/02 Groundhog Day",
            "02/16 Presidents' Day"
            ];

            mar = [
            "03/17 St. Patrick's Day",
            "03/14 Pi Day"
            ];

            apr = [
            "04/01 April Fools' Day",
            "04/05 Easter"
            ];

            may = [
            "05/10 Mother's Day",
            "05/25 Memorial Day"
            ];

            jun = [
            "06/21 Fathers' Day",
            "06/19 Juneteenth"
            ];

            jul = [
            "07/04 Independence Day",
            "07/26 Parents' Day"
            ];

            aug = [
            "08/21 Senior Citizens Day",
            "08/26 Women's Equality Day"
            ];

            sep = [
            "09/07 Labor Day",
            "09/11 Patriot Day"
            ];

            oct = [
            "10/31 Halloween",
            "10/12 Columbus Day"
            ];

            nov = [
            "11/11 Veterans Day",
            "11/26 Thanksgiving"
            ];

            dec = [
            "12/25 Christmas",
            "12/31 New Year's Eve"
            ];
            break;
        
        case 2027:
            jan = [
            "01/01 New Year's Day",
            "01/18 Martin Luther King Jr. Day"
            ];

            feb = [
            "02/02 Groundhog Day",
            "02/15 Presidents' Day"
            ];

            mar = [
            "03/17 St. Patrick's Day",
            "03/14 Pi Day"
            ];

            apr = [
            "04/01 April Fools' Day",
            "Easter actually lands in march on 03/28 in 2027"
            ];

            may = [
            "05/09 Mother's Day",
            "05/31 Memorial Day"
            ];

            jun = [
            "06/20 Fathers' Day",
            "06/19 Juneteenth"
            ];

            jul = [
            "07/04 Independence Day",
            "07/26 Parents' Day"
            ];

            aug = [
            "08/21 Senior Citizens Day",
            "08/26 Women's Equality Day"
            ];

            sep = [
            "09/06 Labor Day",
            "09/11 Patriot Day"
            ];

            oct = [
            "10/31 Halloween",
            "10/11 Columbus Day"
            ];

            nov = [
            "11/11 Veterans Day",
            "11/27 Thanksgiving"
            ];

            dec = [
            "12/25 Christmas",
            "12/31 New Year's Eve"
            ];
            break;

    }



    let jan_holiday = "";
    let feb_holiday = "";
    let mar_holiday = "";
    let apr_holiday = "";
    let may_holiday = "";
    let jun_holiday = "";
    let jul_holiday = "";
    let aug_holiday = "";
    let sep_holiday = "";
    let oct_holiday = "";
    let nov_holiday = "";
    let dec_holiday = "";


    for (let i = 0; i < 2; i++) {
        jan_holiday += jan[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        feb_holiday += feb[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        mar_holiday += mar[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        apr_holiday += apr[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        may_holiday += may[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        jun_holiday += jun[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        jul_holiday += jul[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        aug_holiday += aug[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        sep_holiday += sep[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        oct_holiday += oct[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        nov_holiday += nov[i] + "<br>";
    }
    for (let i = 0; i < 2; i++) {
        dec_holiday += dec[i] + "<br>";
    }
    
    document.getElementById("jan").innerHTML = jan_holiday;
    document.getElementById("feb").innerHTML = feb_holiday;
    document.getElementById("mar").innerHTML = mar_holiday;
    document.getElementById("apr").innerHTML = apr_holiday;
    document.getElementById("may").innerHTML = may_holiday;
    document.getElementById("jun").innerHTML = jun_holiday;
    document.getElementById("jul").innerHTML = jul_holiday;
    document.getElementById("aug").innerHTML = aug_holiday;
    document.getElementById("sep").innerHTML = sep_holiday;
    document.getElementById("oct").innerHTML = oct_holiday;
    document.getElementById("nov").innerHTML = nov_holiday;
    document.getElementById("dec").innerHTML = dec_holiday;


}
