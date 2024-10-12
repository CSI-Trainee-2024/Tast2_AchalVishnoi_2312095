
/*const endTime=new Date("13 oct, 21::05").getTime();
const startDate=new Date().getTime();

function updateTimer(){
     const now =new Date().getTime();
     const dist=now-startDate;
    // const distVoid=endTime-now;
    // const cover=endTime-startDate-distVoid;
     const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((dist % (1000 * 60)) / 1000);
     document.getElementById("hour").innerHTML=hours;
     document.getElementById("min").innerHTML=mins;
     document.getElementById("sec").innerHTML=secs;
     const pecent=dist/(startDate-endTime);
     document.getElementById("progress_bar").style.width=pecent*100 +"%";
     console.log(pecent)

}setInterval(updateTimer,1000);*/
//===================timer===========//

let sec=0;
let min=0;
let hrs=0;
let count=0;
let endTime=30;
 function update(  ){
         sec++;
         if(sec==60){
            sec=0
           min++;
         
         if(min==60){
            hrs++;
            min=0;
         }
        }
        count++;
       
         s=sec<10? "0"+sec:sec;
         h=hrs<10? "0"+hrs:sec;
         m=min<10? "0"+min:sec;
         document.getElementById("hour").innerHTML=h;
         document.getElementById("min").innerHTML=m;
         document.getElementById("sec").innerHTML=s;
         let percent=(count)*100/(endTime);
 document.getElementById("progress_bar").style.width=percent+"%";
           if(endTime<=count)
            clearInterval(timer);

      }
      let timer=setInterval(update,1000);
      
         
   

