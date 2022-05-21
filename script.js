const calcy =() =>{
    let mrks1 = document.getElementById('mrks1').value;

    let mrks2 = document.getElementById('mrks2').value;

    let mrks3 = document.getElementById('mrks3').value;

    let mrks4 = document.getElementById('mrks4').value;

    let mrks5 = document.getElementById('mrks5').value;
    let grades= "";
 
  let totalGrades = parseFloat(mrks1) + parseFloat(mrks1) + parseFloat(mrks1) + parseFloat(mrks1) +parseFloat(mrks1);
  alert(totalGrades);
  
  let perc = (totalGrades/500)*100;
  alert(perc);
  
  if(perc <=100 && perc >=80){
      grades ="A";
  } else if(perc <=79 && perc >=60){
      grades ="B";
  }else if(perc <=59 && perc >=40){
      grades ="C";
  }
  else{
      grades ="F";
  }

  if(perc>=39.5)
  {
    document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and percentage is ${perc}%.    <br> your grade is ${grades}. You are Pass.`
  }

  else{
    document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and percentage is ${perc}%.    <br> your grade is ${grades}. You are fail.`
  }

  
  
  
  

}
