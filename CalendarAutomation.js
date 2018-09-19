function RedTest() {
  var keywords = ["Test","test","Quiz","quiz","Midterm","midterm","Final","final","FINAL"]; //All words that should turn red.
  var now = new Date();
  var endRange = new Date(now.getTime() + 120*(24 * 60 * 60 * 1000)); //Checks the next 4 months
  var events  = CalendarApp.getCalendarById('l1nqvi0i2out7p2d2ti2oidv4o@group.calendar.google.com').getEvents(now, endRange); //stores all events marked as assignment in next two months
  var title ="";
  for(var i = 0; i<events.length; i++){
    title = events[i].getTitle();
    for(var j = 0; j<keywords.length; j++){ //loops through all words that should be checked
       if(title.indexOf(keywords[j])>-1){ //if it contains the keyword
        events[i].setColor("11");  //sets color to red
        break; //Doesn't need to keep checking after it finds one. goes onto next event.
        }
   
    }
  
}
}

