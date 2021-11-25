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
content = "Happy Hanuka";
style="https://www.hrus.co.il/wp-content/uploads/shutterstock_319097270.jpg";
time=5000;
period="";
advertisementList.push(new Advertisement(title,content,style,time,period));
advertisementList.push(new Advertisement("Happy Purim","Happy Purim","https://i.ytimg.com/vi/r4qHbKexLak/maxresdefault.jpg",2000,period));
advertisementList.push(new Advertisement("Happy Passover","Happy Passover","https://www.gov.il/BlobFolder/news/news-25-03-21/he/news_2021_03_news-25-03-21.jpg",10000,period));
advertisementList.push(new Advertisement("Happy Shavuot","Happy Shavuot","https://i.ytimg.com/vi/-VNC2FDtlSk/maxresdefault.jpg",2000,period));
myJason = JSON.stringify(advertisementList);
console.log(myJason);

//document.getElementById("advertisment_title").innerHTML = advertisementList[1].content;


$(document).ready(function(){

    index = 0;


    function swapAdvertisements(){
        $('#advertisment_title').text(advertisementList[index++%advertisementList.length].content);
        $('#image_advrtisment').attr('src', advertisementList[index++%advertisementList.length].style)
    }
    setInterval(swapAdvertisements, advertisementList[index++%advertisementList.length].time);
    

});

