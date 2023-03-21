var cells = document.getElementsByClassName('cell');
var Colors=['FF0000','0000FF','00FF00','00FFFF','A52A2A','FFA500'];
for( var i=0 ;i<cells.length;i++)
{
  cells[i].style.backgroundColor='#'+Colors[Math.floor(Math.random()*6)];
}
var cells2 = document.getElementsByClassName('cell2');
for(i=0 ;i<cells2.length-1;i++)
{
  cells2[i].style.backgroundColor='#'+Colors[Math.floor(Math.random()*6)];
}
cells2[cells2.length-1].style.backgroundColor='#211F1F';
var starttime;
var endtime;
var time;
function start(){
     function starttimer(){
          starttime=Date.now();
          time  = setInterval(function printTime() {
               let endtime = Date.now() - starttime;
               document.getElementById("timer").innerHTML=timetostring(endtime);
          }, 10);
     }
     function timetostring(time){
          let H = time/3600000;
          let hh = Math.floor(H);
          let M = (H-hh)*60;        
          let mm = Math.floor(M);
          let S = (M-mm)*60;
          let ss = Math.floor(S);
          let MS = (S-ss)*1000;
          let ms = Math.floor(MS); 
      
          let finalM = mm.toString().padStart(2,"0");
          let finalS = ss.toString().padStart(2,"0");
          let finalMS = ms.toString().padStart(3,"0");
     
          return `${finalM}:${finalS}:${finalMS}`;
     }
     var nmoves=0;
     starttimer();
     for (i = 0; i < cells2.length; i++)
     {
          (function(index){
               cells2[i].onclick = function(){
                    move(index);
                    chk();
               }
          })(i);
     }
     function  move (index)
     {

          var temp = cells2[index].style.backgroundColor; 
          if((index+5<25) && cells2[index+5].style.backgroundColor === "rgb(33, 31, 31)"){
            cells2[index].style.backgroundColor = "rgb(33,31,31)";
            cells2[index+5].style.backgroundColor = temp;
            nmoves++;
          }
          else if((index-5>=0) && cells2[index-5].style.backgroundColor ==="rgb(33, 31, 31)"){
            cells2[index].style.backgroundColor = "rgb(33,31,31)";;
            cells2[index-5].style.backgroundColor = temp;
            nmoves++; 
          }
          else if((index+1<25) && cells2[index+1].style.backgroundColor ==="rgb(33, 31, 31)"){
            cells2[index].style.backgroundColor = "rgb(33,31,31)";;
            cells2[index+1].style.backgroundColor = temp;
            nmoves++;
          }
          else if((index-1>=0) && cells2[index-1].style.backgroundColor ==="rgb(33, 31, 31)"){
            cells2[index].style.backgroundColor = "rgb(33,31,31)";
            cells2[index-1].style.backgroundColor = temp;
            nmoves++;
          }
     }
     function chk()
     {
          var cells = document.getElementsByClassName('cell');
          var cells2 = document.getElementsByClassName('cell2');
          var i=0,j=0;
          if((cells2[6].style.backgroundColor === cells[0].style.backgroundColor)
          &&(cells2[7].style.backgroundColor === cells[1].style.backgroundColor)
          &&(cells2[8].style.backgroundColor === cells[2].style.backgroundColor)
          &&(cells2[11].style.backgroundColor === cells[3].style.backgroundColor)
          &&(cells2[12].style.backgroundColor === cells[4].style.backgroundColor)
          &&(cells2[13].style.backgroundColor === cells[5].style.backgroundColor)
          &&(cells2[16].style.backgroundColor === cells[6].style.backgroundColor)
          &&(cells2[17].style.backgroundColor === cells[7].style.backgroundColor)
          &&(cells2[18].style.backgroundColor === cells[8].style.backgroundColor))
          {
               stoptimer();
               alert("You Win!");
               alert("No of moves:"+nmoves);
               alert("Time Taken:"+document.getElementById("timer").innerText);
          }
     }
     function stoptimer(){
          clearInterval(time);
     }
}

  
