function getGrade(score) {
    if(score>=0 && score <25){
        return "F";
    }
     else if(score>=25 && score<45){
        return "E";
    }
     else if(score>=45 && score<50){
        return "D";
    }
    else if(score>=50 && score<60){
        return "C";
    }
    else if(score>=60 && score<80){
        return "B";
    }
    else if(score>=80 && score<=100){
        return "A";
    }
    else{

        return "Invalid";
        
    }
}


module.exports = getGrade;
