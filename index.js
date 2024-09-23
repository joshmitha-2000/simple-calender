const months = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"
    ]

    const totalDaysOfTheWeek = 6 
    const today= new Date();
    today.setDate(21);
    today.setMonth(8);
    
    const currentMonthIndex = today.getMonth();
    document.getElementById("current-month").textContent = months[currentMonthIndex];
    document.getElementById("full-date").textContent = today.getFullYear();

    
    const firstDayOfTheMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();//day=0 sunday,day=1 monday,
    console.log(firstDayOfTheMonth);//4=rhursday

   
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay();
    console.log(lastDay)//6
   
    const numberOfDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    console.log(numberOfDaysInMonth);//31 days

    let daysHTML = "";

    const daysElement = document.querySelector(".days");

    
    for (let index = 0; index < firstDayOfTheMonth; index++) {
        daysHTML += "<p class=\"date\">" + "</p>"
    }


    
    for (let date = 1; date <= numberOfDaysInMonth; date++) {
        if (today.getDate() === date) {

            daysHTML += "<p class=\"date today\">" + date + "</p>"
        } else {
            daysHTML += "<p class=\"date\">" + date + "</p>"
        }
    }

    
    // if (lastDay < totalDaysOfTheWeek) {
    //     console.log(lastDay)
        for (let index = lastDay; index < totalDaysOfTheWeek; index++) {
            daysHTML += "<p class=\"date\">" + "</p>"
        }
    // }



    // console.log(daysHTML);
    daysElement.innerHTML = daysHTML;

