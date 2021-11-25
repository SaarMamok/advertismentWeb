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
time="";
period="";
advertisementList.push(new Advertisement(title,content,style,time,period));
advertisementList.push(new Advertisement("Happy Purim","This Purim in Roladin 10 Haman's Ear for 10 shekels",style,time,period));
advertisementList.push(new Advertisement("Happy Passover","This Passover in Yohananof 10 Matzot for 10 shekels",style,time,period));
advertisementList.push(new Advertisement("Happy Shavuot","This Shavuot in Roladin 10 Milk for 10 shekels",style,time,period));
myJason = JSON.stringify(advertisementList);
console.log(myJason);
