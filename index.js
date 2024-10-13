
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
function breakTimer(){
  
   startTimer(20);
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
   let sec=se<10? "0"+se:se;
   let hrs=he=he<10? "0"+he:he;
   let min=me<10? "0"+me:me;

   let time =hrs+':'+min+':'+sec;
   if(exeArray.length<7){
   exeArray.push({exe , he,me,se});
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
       return;
   } 
   else{
      start(exeArray);
   }
   
})

    function start(exeArray){

  topH.style.display="none";
  addPart.style.display="none";
  
    }



/*===================start timer=================*/


const startWork=(count)=>{
   let i=0;
   runExercise(i,count)
 }
 const runExercise=(i,count)=>{
   if(i>=count){
     console.log("WorkOut Done")  // Display Work Out Result here
     displayResult(count,exeArray,timeStorage)
     return;
   }
   view1.style.display = "none";
  view2.style.display ="flex";

 let breakTime =2
 const exeElement= document.createElement("h3");
 exeElement.innerText=`start ${exeArray[i].exe} in ${breakTime}`
 view2.innerHTML = ""; 
 view2.classList.remove("newView")
 view2.classList.add("updateView")
 view2.appendChild(exeElement)

 // For Giving Break After Each Exercise AND at begining

 let breakTimer= setInterval(()=>{
   breakTime--
if(breakTime== 0){
  clearInterval(breakTimer)                 // clearing Break if Timer Reaches zeRO
  exeElement.innerText=`START Doing ${exeArray[i].exe}`//Derefering an Object value
  const timeElement = document.createElement("div")
  timeElement.setAttribute("id","container")
  const container = document.getElementById("container");
  
  view2.appendChild(timeElement)
  const startTime = new Date().getTime();  //Capturing Time of Starting an Exercise
  beginExercise();    
  createDoneBtn(i,startTime); //Once Exercise Begins Create A button to move to next Exercise
  return;   // Important Here otherwise Next Code Block will Execute
}
  exeElement.innerText = `START ${exeArray[i].exe} in ${breakTime}`
  view2.appendChild(exeElement)
 },1000)
}

//Begin Exercise Function
const beginExercise=()=>{
const startClock =()=>{
  let time = 0
  let count =document.getElementById("countDown")
  const startTimer =()=>{
      time++
      let hrs = Math.floor(time/3600) 
      let mins =Math.floor((time%3600)/60);
      let sec = time%60
      count.innerHTML=`${hrs}:${mins}:${sec}`
  }
 setInterval(startTimer,1000)
}
startClock() //Calling to start Stop Watch
}

//Creating a Done Button
const createDoneBtn =(i,startTime)=>{
const doneBtn =document.createElement("button")
doneBtn.setAttribute("id","doneBtn")
doneBtn.innerText="Done"
view2.appendChild(doneBtn)

//Adding What Action to perform After Clicking Done button
doneBtn.addEventListener("click",()=>{
  //Sore timing to new array as an object inside
  const endTime = new Date().getTime();
  const totalTime = Math.floor((endTime-startTime)/1000)
  timeStorage.push({
    exercise: exeArray[i].exe,
    timeTaken: totalTime
  })
  runExercise(i + 1, exeArray.length); //Loop Back to run next exercise
})
}

//Displaying The Result by Making a Table
const displayResult= (count,exeArray,timeStorage)=>{
  view2.innerHTML=""
  const table =document.createElement("table");
  table.setAttribute("class",("wholeTable"))
  table.innerHTML=` <thead>
        <tr>
            <th>Exercise</th>
            <th>Estimate</th>
            <th>Time Taken</th>
        </tr>
    </thead>`
    
     for( let a=0;a<count;a++){
      let newRow =document.createElement("tr")
      newRow.innerHTML=`<td>${exeArray[a].exe}</td>
                        <td>${exeArray[a].time}</td>
                        <td>${timeStorage[a].timeTaken}</td>
                       `
      table.appendChild(newRow);
     }
     const resultHeading =document.createElement("h2");
     resultHeading.setAttribute("Id","tableHeading")
     resultHeading.innerText="Workout Completed!"
     const resultDescription =document.createElement("p");
     resultDescription.setAttribute("Id","tableDescription")
     resultDescription.innerText="Well Done! Here Are Your Workout Stats"
     view2.appendChild(resultHeading);
     resultHeading.appendChild(resultDescription);
     view2.appendChild(table);
}

