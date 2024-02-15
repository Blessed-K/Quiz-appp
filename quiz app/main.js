function goHome(){
    window.location.href="index.html";
}

function goToQuizPage(){
    window.location.href="quiz.html";
}
function submitAnswer(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
   
    var count=0;
    var p_score=0;
    var grade;
    var comment;

    if(question1=="B"){
        count++;
        p_score=count*20;
    }

    if(question2=="B"){
        count++;
        p_score=count*20;
    }

    if(question3=="A"){
        count++;
        p_score=count*20;
    }

    if(question4=="B"){
        count++;
        p_score=count*20;
    }
    if(question5=="B"){
        count++;
        p_score=count*20;
    }

    if(p_score<21){
        grade="F";
        comment="very poor"
    }
    if(p_score>20 && p_score<61){
        grade="B";
        comment="Good"
    }
    if(p_score>60){
        grade="A";
        comment=" Excellent"
    }

    document.getElementById("score").innerHTML=count;
    document.getElementById("p_score").innerHTML=p_score;
    document.getElementById("grade").innerHTML=grade;
    document.getElementById("comment").innerHTML=comment;
}