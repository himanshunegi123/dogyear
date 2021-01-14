function ageConvert(){
    let human=document.getElementById("hAge").value;
    let humanmonth=document.getElementById("hAge2").value;
    let dogyear;
    let dyear2;
    let dmonth;
    let res;
    let res2;
    if(human>0){
    if(human==2 || human==1)
    {
    dogyear=10.5*human;
    dmonth=(10.5*humanmonth)/12;
    dogyear+=dmonth;
    }
    else{
    dyear2=10.5*2;
    dmonth=(4*humanmonth)/12;
    dogyear=((human-2)*(4)+dyear2)+dmonth;
    res=Math.floor(dogyear/12);
    res2=Math.floor(dogyear);
    }
    }
    document.write(res2+" year "+res+" Month ");
    }