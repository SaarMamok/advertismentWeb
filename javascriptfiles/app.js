class Advertisement{
    constructor(title, content, style, time)
    {
        this.title= title;
        this.content = content;
        this.style = style;
        this.time = time;   
    }

} 

let advertisementList=[];
advertisementList.push(new Advertisement("Happy Hanuka","Happy Hanuka","https://www.hrus.co.il/wp-content/uploads/shutterstock_319097270.jpg",5000));
advertisementList.push(new Advertisement("Happy Purim","Happy Purim","https://i.ytimg.com/vi/r4qHbKexLak/maxresdefault.jpg",3000));
advertisementList.push(new Advertisement("Happy Passover","Happy Passover","https://www.gov.il/BlobFolder/news/news-25-03-21/he/news_2021_03_news-25-03-21.jpg",4000));
advertisementList.push(new Advertisement("Happy Shavuot","Happy Shavuot","https://i.ytimg.com/vi/-VNC2FDtlSk/maxresdefault.jpg",4000));
advertisementList.push(new Advertisement("Happy sucot","Happy sucot","https://as2.ftcdn.net/v2/jpg/02/22/78/69/1000_F_222786910_fb6u9Kq4X1Uzax8JQQbgYRgBTmq00GeV.jpg",5000));


advertisementList.push(new Advertisement("NIKE","JUST DO IT","https://as2.ftcdn.net/v2/jpg/04/02/95/13/1000_F_402951349_kddXJErU5Y2rbgwCMuAkEFhlSnQTgHIH.jpg",5000));
advertisementList.push(new Advertisement("ADIDAS","SPORTS STYLE","https://as1.ftcdn.net/v2/jpg/04/40/72/76/1000_F_440727637_LdLWk4YgwdUFtb9U6YPI1tjoJrBEnWyq.jpg",4000));
advertisementList.push(new Advertisement("PUMA","RUN FASTER","https://as2.ftcdn.net/v2/jpg/03/26/64/11/1000_F_326641117_eLFmcZEtjbvgZGt7EsxGx5WJ6iiGane5.jpg",3000));
advertisementList.push(new Advertisement("REEBOK","SPORTS LIVING","https://as2.ftcdn.net/v2/jpg/04/03/74/97/1000_F_403749704_6ksVq7Su2nhlARXkt90Tvi9SVMiGF2gB.jpg",4000));
advertisementList.push(new Advertisement("UNDER ARMOUR","TRAIN HARD","https://as1.ftcdn.net/v2/jpg/03/42/56/20/1000_F_342562062_6idHhTR0NYrYsaMLXTrWk1pbELojm5gj.jpg",3000));

advertisementList.push(new Advertisement("AUDI","DRIVING IN STYLE","https://as2.ftcdn.net/v2/jpg/02/78/78/59/1000_F_278785930_AXMsvsjP5nYJaZykCSFdWnqGkaRzboMc.jpg",3000));
advertisementList.push(new Advertisement("MERCEDEZ","DRIVING WITH CLASS","https://as1.ftcdn.net/v2/jpg/03/08/73/14/1000_F_308731491_DlnGiXGy2fS5bT2QKCpSpLfgCtqlPaKT.jpg",5000));
advertisementList.push(new Advertisement("BUGGATI","BE THE FASTES ON ROAD","https://as2.ftcdn.net/v2/jpg/02/95/43/31/1000_F_295433165_dUeCPXFNuUHVjgWEdjlhYAURlQOug4O9.jpg",3000));
advertisementList.push(new Advertisement("TOYOTA","LIVING LONGER","https://as2.ftcdn.net/v2/jpg/03/00/48/11/1000_F_300481162_hbPypB18TiD92H4qPdlo7Yk8unJ4xaEV.jpg",5000));
advertisementList.push(new Advertisement("FERRARI","BE THE HORSE YOU WANT","https://as1.ftcdn.net/v2/jpg/02/98/35/82/1000_F_298358259_bwYxOvtrqJn7m8dfeYkkoNkusBSYNhep.jpg",3000));


myJason = JSON.stringify(advertisementList);
console.log(myJason);






$(document).ready(function(){
    var htmlPage = document.getElementById("index").className;
    console.log(htmlPage);
    index = 0;
    length = 5;
    if(htmlPage == "index1"){
        index = 0;
        length = 5;
        setInterval(swapAdvertisements, advertisementList[index++%length].time);
    }
    else if(htmlPage == "index2"){
        index = 5;
        length = 10;
        setInterval(swapAdvertisements, advertisementList[index++%length].time);
    }
    else if(htmlPage == "index3"){
        index =10;
        length = 15;
        setInterval(swapAdvertisements, advertisementList[index++%length].time);
    }
   

    function swapAdvertisements(){
        i = index++%advertisementList.length;
        $('#advertisment_title').text(advertisementList[i].content);
        $('#image_advrtisment').attr('src', advertisementList[i].style);
    }
    
});

