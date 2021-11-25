class Advertisement{
    constructor(title, content, style, time, period)
    {
        this.title= title;
        this.content = content;
        this.style = style;
        this.time = time;
        this.period = period;     
    }

} 

let advertisementList=[];
title = "Happy Hanuka";
content = "This Hanuka in Roladin 10 Sufganyot for 10 shekels";
style="";
time=10000;
period="";
advertisementList.push(new Advertisement(title,content,style,time,period));
advertisementList.push(new Advertisement("Happy Purim","This Purim in Roladin 10 Haman's Ear for 10 shekels",style,2000,period));
advertisementList.push(new Advertisement("Happy Passover","This Passover in Yohananof 10 Matzot for 10 shekels",style,10000,period));
advertisementList.push(new Advertisement("Happy Shavuot","This Shavuot in Roladin 10 Milk for 10 shekels",style,2000,period));
myJason = JSON.stringify(advertisementList);
console.log(myJason);

//document.getElementById("advertisment_title").innerHTML = advertisementList[1].content;


$(document).ready(function(){

    index = 0;


    function swapAdvertisements(){
        $('#advertisment_title').text(advertisementList[index++%advertisementList.length].content);
    }
    setInterval(swapAdvertisements, 1000);
    

});

