const questions=[{  //these are the object acess it by their index 
  'que':'Which of the following is the markup language',
  'a':'HTML',
  'b':'CSS',
  'c':'JAVA SCRIPT',
  'd':'NONE OF ABOVE',
  'correct':'a'
},
{
    'que':'What Year was java launched ',
    'a':'1996',
    'b':'1995',
    'c':'1998',
    'd':'1994',
    'correct':'b'
  },

  {
    'que':'Which CSS property is used to change the background color? ',
    'a':'color',
    'b':'background-color',
    'c':'bgcolor',
    'd':'bg-color',
    'correct':'b'
  },
  {
    'que':'Which CSS property controls the text size?? ',
    'a':'font-style',
    'b':'text-size',
    'c':'font-size',
    'd':'text-style',
    'correct':'c'
  },

  {
    'que':' How do you add a comment in CSS? ',
    'a':'<!-- This is a comment -->',
    'b':'/* This is a comment */',
    'c':'// This is a comment',
    'd':'** This is a comment **',
    'correct':'b'
  },

  {
    'que':' Which of the following is the correct syntax to create a function in JavaScript? ',
    'a':'function = myFunction()',
    'b':'function myFunction()',
    'c':'create myFunction()',
    'd':'def myFunction()',
    'correct':'b'
  },

  {
    'que':'Which of the following is used to declare a variable in JavaScript? ',
    'a':'let',
    'b':'var',
    'c':'const',
    'd':'All of the above',
    'correct':'d'
  },
  {
    'que':' Which CSS property is used to create space between the content of an element and its border? ',
    'a':'margin',
    'b':'padding',
    'c':'border-spacing',
    'd':'space',
    'correct':'b'
  },
  {
    'que':'What will the following JavaScript code output? (console.log(0.1 + 0.2 === 0.3);)',
    'a':'true',
    'b':'false',
    'c':'undefined',
    'd':'NaN',
    'correct':'b'
  },

  {
    'que':' Which method is used to attach an event handler to an element in JavaScript? ',
    'a':'addEventListener()',
    'b':'attachEvent()',
    'c':'onEvent()',
    'd':'bindEvent()',
    'correct':'a'
  }
];



const questio= document.getElementById("Question");
const option=document.querySelectorAll(".options")

let idx=0;
  const loadQues=()=>{
    // console.log(idx +" "+ total);
    if(idx===total){
      endQuiz();
      return;
    }
    resetCheckPoint();
  let data = questions[idx];
     questio.innerText =`${idx+1})  ${data.que}`;

     option[0].nextElementSibling.innerText = data.a; //nextElementSibling is used to get the next element 
     option[1].nextElementSibling.innerText = data.b;
     option[2].nextElementSibling.innerText = data.c;
     option[3].nextElementSibling.innerText = data.d;
}





let right=0;
let wrong=0;
let total=questions.length;

const submitQuiz=()=>{
    const data=questions[idx];
    let ans=ansValue();
    if(ans===data.correct){
      right++;
    }
    else{
      wrong++;
    }
    idx++;
    loadQues();
   
   return;
}



const ansValue =()=>{
  let answer;
    option.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    ) 
    return answer;   
}



const resetCheckPoint=()=>{
  option.forEach(
    (input)=>{
        input.checked=false;
    }
) 
}


const endQuiz = ()=>{
 document.getElementById("box").innerHTML = `<h3>Thank You for Playing Quiz </h3> 
   <h3>Your Score is ${right}/${total}`;
}


loadQues();



