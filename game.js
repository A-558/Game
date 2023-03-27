function E(){
      var a = document.getElementById("NUM").value;
      var N = Math.random()*2
      var B = Math.floor(N)
     if(B==a){
         document.getElementById('Game').innerHTML= 'You win &#128525'
         document.getElementById('Game').style.color= "green"
      }
      else {
         document.getElementById('Game').innerHTML = 'You Lost &#128552'
         document.getElementById('Game').style.color= "red"
      }
    //  document.write(Math.floor(N))
    //  document.getElementById('Game').innerHTML = B
    //  document.getElementById('Game').style.color="yellow"
  
     document.getElementById('Game').style.fontSize= "100px"
    
      }