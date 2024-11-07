

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
function relod(){
   window.location.reload(true);
}




       


function startTimer(end){
let sec=0;
let min=0;
let hrs=0;
let count=0;
let endTime =  end;
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
    
      sm=sec<10? "0"+sec:sec;
      hm=hrs<10? "0"+hrs:sec;
      mm=min<10? "0"+min:sec;
      document.getElementById("hour").innerHTML=hm;
      document.getElementById("min").innerHTML=mm;
      document.getElementById("sec").innerHTML=sm;
      let percent=(count)*100/(endTime);
 document.getElementById("progress_bar").style.width=percent+"%";
        if(endTime<=count)
         clearInterval(timer);
      }
      let timer =setInterval(update,1000);

   }
   

      //============display by addition===============//
      
const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2")
const input__exercise = document.getElementById("exercise")
const h =document.getElementById("h");
const m =document.getElementById("m");
const s =document.getElementById("s");

const section1 =document.getElementById("display")
const add = document.getElementById("add");
const end__work =document.getElementById("end__work")
const begin__workout=document.getElementById("start")
const clockView=document.getElementById("container");
const topH=document.getElementById("top__heading");
const addPart=document.getElementById("addPart");



const exeArray =[]
const timeStorage=[]
// Adding Exercise




input__exercise.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      if(input__exercise.value==""||h.value>2||m.value>60||s.value>60
         ||h.value<0||m.value<0||s.value<0){
         alert("invalid input!!");
       }
      else{
      let exe = input__exercise.value;
   
      let se=s.value;
      let he=h.value;
      let me=m.value;
      let sec=se<10&&se>0? "0"+se:se;
      let hrs=he=he<10&&he>0?  "0"+he:he;
      let min=me<10&&me>0? "0"+me:me;
   
      let time =hrs+':'+min+':'+sec;
      if(exeArray.length<7){
      exeArray.push({exe , he,me,se,time});
      console.log(exeArray);
      addToPage(exe,time);
      }
      else
      {
         alert("can't add more exercise!!");
      }
      }
    }
   
   }
)
   
   
   
   
     


add.addEventListener("click",()=>{
   if(input__exercise.value==""||h.value>2||m.value>60||s.value>60
      ||h.value<0||m.value<0||s.value<0){
      alert("invalid input!!");
    }
   else{
   let exe = input__exercise.value;

   let se=s.value;
   let he=h.value;
   let me=m.value;
   let sec=se<10&&se>0? "0"+se:se;
   let hrs=he=he<10&&he>0?  "0"+he:he;
   let min=me<10&&me>0? "0"+me:me;

   let time =hrs+':'+min+':'+sec;
   if(exeArray.length<7){
   exeArray.push({exe , he,me,se,time});
   console.log(exeArray);
   addToPage(exe,time);
   }
   else
   {
      alert("can't add more exercise!!");
   }
   }
 })
 const addToPage =(exe,time)=>{
   let element =document.createElement("div")
  element.innerHTML= `<h4>${exe}</h4> <h5>${time}</h5>`
  section1.appendChild(element);
} 



  
/*     start         */
begin__workout.addEventListener("click",()=>{
   if(exeArray.length==0){
       console.log("First Add Something");
       alert("Plz add something!!")
       return;
   } 
   else{
      startWork(exeArray.length);
   }
   
})

    function startWork(count){

  //topH.style.display="none";
  //addPart.style.display="none";
  let i=0;
  runExercise(i,exeArray.length);
  
    }



/*===================start timer=================*/



 const runExercise=(i,count)=>{
   if(i==count){
     console.log("WorkOut Done");
    
     setLocal(count,timeStorage);
     displayResult(count,exeArray,timeStorage);
     return;
   }
   view1.style.display = "none";
  view2.style.display ="flex";
  view2.style.height="100vh";
  view2.style.justifyContent="center";
  view2.style.alignItems="center";
  
  /* ==============to remove watch from front================*/
  view2.innerHTML=
      `<div  id="container">
      <h1>Timer</h1>
      <div id="countdown" >
          <div >
           <span id="hour">00</span>
           hrs
       </div>
          <div>
           <span id="min">00</span>
           mins
       </div>
          <div>
           <span id="sec">00</span>
           secs
       </div>
       
      </div>
     
    
      `
       

    
  let breakTime ;  
  const container= document.getElementById("container");
  const h1 = container.querySelector("h1");
  if(i==0){
   h1.innerHTML= "starting in ";
   breakTime=6;
  }
   else{
      h1.innerHTML= "Break";
      breakTime=6;
   } 
  
  
  
 

 

 // For Giving Break After Each Exercise AND at begining

        let breakTimer= setInterval(()=>{
       breakTime--

          if(breakTime<0){
              clearInterval(breakTimer);  

      /*to add stop button and progress bar*/

      
      
           
      const doneBtn=document.getElementById("doneBtn"); 
      
      view2.innerHTML=
`<div  id="container">
<h1>Timer</h1>
<div id="countdown" >
    <div >
     <span id="hour">00</span>
     hrs
 </div>
    <div>
     <span id="min">00</span>
     mins
 </div>
    <div>
     <span id="sec">00</span>
     secs
 </div>
 
</div>
<h2>progress:</h2>

<div class="progress_container">
 <div id="progress_bar">
   </div>
 </div>
  
</div>

 <i id="doneBtn" class="fa-regular fa-circle-stop" style="color: rgb(46, 90, 101); "></i>
`

            
    beginExercise(i);  

 
     return;
    }


sm = breakTime<10 ? "0"+breakTime:breakTime;

document.getElementById("hour").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML=sm;
  
 },1000)


}


//Begin Exercise Function
const beginExercise = (i) => {
   const startClock = () => {
      const startTime = new Date().getTime() / 1000;
      const container = document.getElementById("container");
      const h1 = container.querySelector("h1");
      h1.innerHTML = "Start " + exeArray[i].exe + " (" + (i + 1) + "):";

      let sec = 0, min = 0, hrs = 0;
      let k = 0;
      let endTime = exeArray[i].he * 60 * 60 + exeArray[i].me * 60 + exeArray[i].se;

      // This function updates the timer display for the current exercise
      function update() {
         sec++;
         if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
               hrs++;
               min = 0;
            }
         }
         k++;

         // Display the current time
         const sse = sec < 10 ? "0" + sec : sec;
         const hhe = hrs < 10 ? "0" + hrs : hrs;
         const mme = min < 10 ? "0" + min : min;
         document.getElementById("hour").innerHTML = hhe;
         document.getElementById("min").innerHTML = mme;
         document.getElementById("sec").innerHTML = sse;

         // Update progress bar
         const percent = (k * 100) / endTime;
         document.getElementById("progress_bar").style.width = percent + "%";

         // Add event listener to "done" button to store time and move to the next exercise
         document.getElementById("doneBtn").onclick = () => {
            clearInterval(timer); // Stop the timer

            // Push the time taken for this exercise to timeStorage
            timeStorage.push({
               exercise: exeArray[i].exe,
               timeTaken: hhe + ":" + mme + ":" + sse
            });

            // Move to the next exercise
            runExercise(i + 1, exeArray.length);
         };
      }

      const timer = setInterval(update, 1000); // Start the interval timer for the exercise
   };
   startClock(); // Start the exercise timer
};

// Adjust displayResult to show the correct final results
const displayResult = (count, exeArray, timeStorage) => {
   view2.innerHTML = "";
   const table = document.createElement("table");
   table.setAttribute("class", "wholeTable");
   table.innerHTML = `
      <thead>
         <tr>
            <th>Exercise</th>
            <th>Planned</th>
            <th>Time Taken</th>
         </tr>
      </thead>`;

   // Populate the table with planned and actual times
   for (let a = 0; a < count; a++) {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
         <td>${exeArray[a].exe}</td>
         <td>${exeArray[a].time}</td>
         <td>${timeStorage[a] ? timeStorage[a].timeTaken : "N/A"}</td>`;
      table.appendChild(newRow);
   }

   const resultHeading = document.createElement("h2");
   resultHeading.setAttribute("Id", "tableHeading");
   resultHeading.innerText = "Workout Completed!";
   const resultDescription = document.createElement("p");
   resultDescription.setAttribute("Id", "tableDescription");
   resultDescription.innerText = "Well done! Here is your performance chart";

   view2.appendChild(resultHeading);
   resultHeading.appendChild(resultDescription);
   view2.appendChild(table);
   view2.style.backgroundColor = "rgb(46, 90, 101)";
   view2.style.paddingLeft = "10vw";
   view2.style.paddingRight = "10vw";
};
const setLocal =(count,timeStorage)=>{
   let i=0;
   while(i<count){
      localStorage.setItem("Exercise", JSON.stringify(timeStorage))
      let myData = localStorage.getItem("Exercise");
      console.log(JSON.parse(myData));
      i++;
   }
}