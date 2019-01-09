class Dayz {
   constructor(month,day,year){

   this.month = month;
   this.day = day;
   this.year = year;

  }
  monthName(){
    // if digit is given return what name of month
    const moName = ["","January","Febuary","March","April","May","June","July","August","September","October","November","December"];

    return moName[this.month];

  }

  dayValidator(){
    if (this.day > 0 && this.day <= 31) {
      return true;
    }
    return false;
    // iven a digit between 1-31 give nan val if other numbers are given and return name of day
  }

  nameOfDay() {
  // var birthday = new Date('August 19, 1975 23:15:30');
    let dayOfWeekNum = new Date(`'${this.monthName()} ${this.day}, ${this.year}'`).getDay();

    const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return dayName[dayOfWeekNum];
    // given the correct day digit what is the name of the day
  }

  yearValidator(){
    const yeardig = this.year.toString().length;

    if (yeardig === 4) {
      return true;
    }
    return true;
    // make sure year has at least four digits and not more or less.
  }


}
export {Dayz};
