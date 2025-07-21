 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const date = new Date();
            let day = date.getUTCDate();
            let month = months[date.getMonth()];
            let currentMonth = date.getMonth() + 1;
            let year = date.getFullYear();
            let shortyear = year.toString().slice(-2);
            document.getElementById("day").innerHTML = day;
            document.getElementById("month").innerHTML = month;
            document.getElementById("year").innerHTML = year;
            document.getElementById("created").innerHTML = currentMonth + "/" + day + "/" + shortyear;