// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
  }
  saturdayFun();
  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  console.log(mondayWork("work from home"));
  
  function wrapAdjective(decoration = "*") {
    return (adjective = "special") => {
      return `You are ${decoration}${adjective}${decoration}!`;
    };
  }
  // console.log(wrapAdjective()())
  const mindit= wrapAdjective()
  console.log(mindit());