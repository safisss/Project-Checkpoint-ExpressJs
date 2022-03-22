

const day = new Date().getDay() //returns the day
const hour = new Date().getHours() //returns hour

function NewDate(req, res, next) {
    if (hour > 8 && hour < 17 && day > 0 && day < 6) {
        next();
    } else {
        res.send('<h1 style="text-align:center; margin-top:70px; color:red"> Sorry we are closed Now !</h1> <h3 style="text-align:center; margin-top:40px; color:red"> Our working hours : from Monday to Friday from 9am to 17pm </h3> <h4 style="text-align:center; margin-top:40px; color:red"> Please try to enter later on time...</h4> <p style="text-align:center; margin-top:40px; color:red"> Thanks for your comprehension :) </p>')
    }
}

module.exports = NewDate;