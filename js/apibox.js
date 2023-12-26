// let slectspan = document.getElementById("AirSelectSpan");
// slectspan.textContent = "انتخاب مبدأ";
// options = document.getElementsByClassName("AirSigleLink");

// let slectspan2 = document.getElementById("AirSelectSpan2");
// slectspan2.textContent = "انتخاب مقصد";
// options2 = document.getElementsByClassName("AirSigleLink2");

function change(n,whichapi){
    let sid = whichapi+"SelectSpan";
    let sid2 = whichapi+"SigleLink";
    let slectspan = document.getElementById(sid);
    options = document.getElementsByClassName(sid2);
    slectspan.textContent = options[n-1].textContent;
}

function change2(n,whichapi){
    let sid = whichapi+"SelectSpan2";
    let sid2 = whichapi+"SigleLink2";
    let slectspan = document.getElementById(sid);
    options = document.getElementsByClassName(sid2);
    slectspan.textContent = options[n-1].textContent;
}

function showoptions(whichapi) {
    let sid = whichapi+"OptDiv";
    var x = document.getElementById(sid);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showoptions2(whichapi) {
    let sid = whichapi+"OptDiv2";
    var x = document.getElementById(sid);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function switchspan(whichapi) {
    let sid = whichapi+"SelectSpan";
    let sid2 = whichapi+"SelectSpan2";
    let slectspan = document.getElementById(sid);
    let slectspan2 = document.getElementById(sid2);
    let temp = slectspan2.textContent;
    slectspan2.textContent = slectspan.textContent;
    slectspan.textContent = temp;
}

let AirSetNum = document.getElementById("AirSetNumber");
let AirAdult = document.getElementById("AirAdultNum");
let AirKid = document.getElementById("AirKidNum");
let AirChild = document.getElementById("AirChildNum");
let AirAdultspan = document.getElementById("AirAdult");
let AirKidspan = document.getElementById("AirKid");
let AirChildspan = document.getElementById("AirChild");
let AirAdultnum = 1;
let AirKidnum = 0;
let AirChildnum = 0;
AirAdult.textContent = AirAdultnum+" "+"بزرگسال"+" ,";
AirKid.textContent = AirKidnum+" "+"کودک"+" ,";
AirChild.textContent = AirChildnum+" "+"نوزاد";
AirAdultspan.textContent = AirAdultnum;
AirKidspan.textContent = AirKidnum;
AirChildspan.textContent = AirChildnum;

function AirIncrease(what) {
    switch(what){
        case 'adult':
            if(AirAdultnum<9)
                AirAdultnum++;
            AirAdultspan.textContent = AirAdultnum;
            AirAdult.textContent = AirAdultnum+" "+"بزرگسال"+" ,";
            AirSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(AirKidnum<9)
                AirKidnum++;
            AirKidspan.textContent = AirKidnum;
            AirKid.textContent = AirKidnum+" "+"کودک"+" ,";
            AirSetNum.style.opacity = 0;
            break;
        case 'child':
            if(AirChildnum<9)
                AirChildnum++;
            AirChildspan.textContent = AirChildnum;
            AirChild.textContent = AirChildnum+" "+"نوزاد";
            AirSetNum.style.opacity = 0;
            break;
    }
}

function AirDecrese(what) {
    switch(what){
        case 'adult':
            if(AirAdultnum>0)
                AirAdultnum--;
            AirAdultspan.textContent = AirAdultnum;
            AirAdult.textContent = AirAdultnum+" "+"بزرگسال"+" ,";
            AirSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(AirKidnum>0)
                AirKidnum--;
            AirKidspan.textContent = AirKidnum;
            AirKid.textContent = AirKidnum+" "+"کودک"+" ,";
            AirSetNum.style.opacity = 0;
            break;
        case 'child':
            if(AirChildnum>0)
                AirChildnum--;
            AirChildspan.textContent = AirChildnum;
            AirChild.textContent = AirChildnum+" "+"نوزاد";
            AirSetNum.style.opacity = 0;
            break;
    }
}

function AirShowSetNumber(){
    if(AirSetNum.style.opacity == 0){
        AirSetNum.style.opacity = 1;
        AirSetNum.style.pointerEvents = "all";
    }
    else{
        AirSetNum.style.opacity = 0;
        AirSetNum.style.pointerEvents = "none";
    }
}

let TrSetNum = document.getElementById("TrSetNumber");
let TrAdult = document.getElementById("TrAdultNum");
let TrKid = document.getElementById("TrKidNum");
let TrChild = document.getElementById("TrChildNum");
let TrAdultspan = document.getElementById("TrAdult");
let TrKidspan = document.getElementById("TrKid");
let TrChildspan = document.getElementById("TrChild");
let TrAdultnum = 1;
let TrKidnum = 0;
let TrChildnum = 0;
TrAdult.textContent = TrAdultnum+" "+"بزرگسال"+" ,";
TrKid.textContent = TrKidnum+" "+"کودک"+" ,";
TrChild.textContent = TrChildnum+" "+"نوزاد";
TrAdultspan.textContent = TrAdultnum;
TrKidspan.textContent = TrKidnum;
TrChildspan.textContent = TrChildnum;

function TrIncrease(what) {
    switch(what){
        case 'adult':
            if(TrAdultnum<9)
                TrAdultnum++;
            TrAdultspan.textContent = TrAdultnum;
            TrAdult.textContent = TrAdultnum+" "+"بزرگسال"+" ,";
            TrSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(TrKidnum<9)
                TrKidnum++;
            TrKidspan.textContent = TrKidnum;
            TrKid.textContent = TrKidnum+" "+"کودک"+" ,";
            TrSetNum.style.opacity = 0;
            break;
        case 'child':
            if(TrChildnum<9)
                TrChildnum++;
            TrChildspan.textContent = TrChildnum;
            TrChild.textContent = TrChildnum+" "+"نوزاد";
            TrSetNum.style.opacity = 0;
            break;
    }
}

function TrDecrese(what) {
    switch(what){
        case 'adult':
            if(TrAdultnum>0)
                TrAdultnum--;
            TrAdultspan.textContent = TrAdultnum;
            TrAdult.textContent = TrAdultnum+" "+"بزرگسال"+" ,";
            TrSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(TrKidnum>0)
                TrKidnum--;
            TrKidspan.textContent = TrKidnum;
            TrKid.textContent = TrKidnum+" "+"کودک"+" ,";
            TrSetNum.style.opacity = 0;
            break;
        case 'child':
            if(TrChildnum>0)
                TrChildnum--;
            TrChildspan.textContent = TrChildnum;
            TrChild.textContent = TrChildnum+" "+"نوزاد";
            TrSetNum.style.opacity = 0;
            break;
    }
}

function TrShowSetNumber(){
    if(TrSetNum.style.opacity == 0){
        TrSetNum.style.opacity = 1;
        TrSetNum.style.pointerEvents = "all";
    }
    else{
        TrSetNum.style.opacity = 0;
        TrSetNum.style.pointerEvents = "none";
    }
}

let FlySetNum = document.getElementById("FlySetNumber");
let FlyAdult = document.getElementById("FlyAdultNum");
let FlyKid = document.getElementById("FlyKidNum");
let FlyChild = document.getElementById("FlyChildNum");
let FlyAdultspan = document.getElementById("FlyAdult");
let FlyKidspan = document.getElementById("FlyKid");
let FlyChildspan = document.getElementById("FlyChild");
let FlyAdultnum = 1;
let FlyKidnum = 0;
let FlyChildnum = 0;
FlyAdult.textContent = FlyAdultnum+" "+"بزرگسال"+" ,";
FlyKid.textContent = FlyKidnum+" "+"کودک"+" ,";
FlyChild.textContent = FlyChildnum+" "+"نوزاد";
FlyAdultspan.textContent = FlyAdultnum;
FlyKidspan.textContent = FlyKidnum;
FlyChildspan.textContent = FlyChildnum;

function FlyIncrease(what) {
    switch(what){
        case 'adult':
            if(FlyAdultnum<9)
                FlyAdultnum++;
            FlyAdultspan.textContent = FlyAdultnum;
            FlyAdult.textContent = FlyAdultnum+" "+"بزرگسال"+" ,";
            FlySetNum.style.opacity = 0;
            break;
        case 'kid':
            if(FlyKidnum<9)
                FlyKidnum++;
            FlyKidspan.textContent = FlyKidnum;
            FlyKid.textContent = FlyKidnum+" "+"کودک"+" ,";
            FlySetNum.style.opacity = 0;
            break;
        case 'child':
            if(FlyChildnum<9)
                FlyChildnum++;
            FlyChildspan.textContent = FlyChildnum;
            FlyChild.textContent = FlyChildnum+" "+"نوزاد";
            FlySetNum.style.opacity = 0;
            break;
    }
}

function FlyDecrese(what) {
    switch(what){
        case 'adult':
            if(FlyAdultnum>0)
                FlyAdultnum--;
            FlyAdultspan.textContent = FlyAdultnum;
            FlyAdult.textContent = FlyAdultnum+" "+"بزرگسال"+" ,";
            FlySetNum.style.opacity = 0;
            break;
        case 'kid':
            if(FlyKidnum>0)
                FlyKidnum--;
            FlyKidspan.textContent = FlyKidnum;
            FlyKid.textContent = FlyKidnum+" "+"کودک"+" ,";
            FlySetNum.style.opacity = 0;
            break;
        case 'child':
            if(FlyChildnum>0)
                FlyChildnum--;
            FlyChildspan.textContent = FlyChildnum;
            FlyChild.textContent = FlyChildnum+" "+"نوزاد";
            FlySetNum.style.opacity = 0;
            break;
    }
}

function FlyShowSetNumber(){
    if(FlySetNum.style.opacity == 0){
        FlySetNum.style.opacity = 1;
        FlySetNum.style.pointerEvents = "all";
    }
    else{
        FlySetNum.style.opacity = 0;
        FlySetNum.style.pointerEvents = "none";
    }
}

let HoSetNum = document.getElementById("HoSetNumber");
let HoAdult = document.getElementById("HoAdultNum");
let HoKid = document.getElementById("HoKidNum");
let HoChild = document.getElementById("HoChildNum");
let HoAdultspan = document.getElementById("HoAdult");
let HoKidspan = document.getElementById("HoKid");
let HoChildspan = document.getElementById("HoChild");
let HoAdultnum = 1;
let HoKidnum = 0;
let HoChildnum = 0;
HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
HoChild.textContent = HoChildnum+" "+"نوزاد";
HoAdultspan.textContent = HoAdultnum;
HoKidspan.textContent = HoKidnum;
HoChildspan.textContent = HoChildnum;

function HoIncrease(what) {
    switch(what){
        case 'adult':
            if(HoAdultnum<9)
                HoAdultnum++;
            HoAdultspan.textContent = HoAdultnum;
            HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(HoKidnum<9)
                HoKidnum++;
            HoKidspan.textContent = HoKidnum;
            HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'child':
            if(HoChildnum<9)
                HoChildnum++;
            HoChildspan.textContent = HoChildnum;
            HoChild.textContent = HoChildnum+" "+"نوزاد";
            HoSetNum.style.opacity = 0;
            break;
    }
}

function HoDecrese(what) {
    switch(what){
        case 'adult':
            if(HoAdultnum>0)
                HoAdultnum--;
            HoAdultspan.textContent = HoAdultnum;
            HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(HoKidnum>0)
                HoKidnum--;
            HoKidspan.textContent = HoKidnum;
            HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'child':
            if(HoChildnum>0)
                HoChildnum--;
            HoChildspan.textContent = HoChildnum;
            HoChild.textContent = HoChildnum+" "+"نوزاد";
            HoSetNum.style.opacity = 0;
            break;
    }
}

function HoShowSetNumber(){
    if(HoSetNum.style.opacity == 0){
        HoSetNum.style.opacity = 1;
        HoSetNum.style.pointerEvents = "all";
    }
    else{
        HoSetNum.style.opacity = 0;
        HoSetNum.style.pointerEvents = "none";
    }
}