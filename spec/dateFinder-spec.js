import {Dayz} from './../src/dateFinder'


describe ('this app should check and find the correct month day and year for any given date given', function(){

  it('should given correct month for any date given future or past', function(){

    let day1 = new Dayz (10,8,1979);
    expect(day1.monthName()).toEqual("October");

  });
  //
  it('should validate and make sure the day in any given date given is 1-31', function(){
    let day1 = new Dayz (10,8,1979);

    expect(day1.dayValidator()).toEqual(true);

  });

  it('should give the name of the day of any date that is given once validated', function(){
    let day = new Dayz (10,8,1979);

    expect(day.nameOfDay()).toEqual("Monday");
  });

  it('should validate any year that is given and make sure that its a correct year', function(){
    let day = new Dayz (10,8,1979);

    expect(day.yearValidator()).toEqual(true);
  });

});
