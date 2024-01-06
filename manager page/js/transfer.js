const list_item = [
    {id:1,name:"ماهان",engName:"Mahan Airlines",code:"W5"},
    {id:2,name:"کیش ایر",engName:"Kish Air",code:"Y9"},
    {id:3,name:"ایران ایر",engName:"Iran Air",code:"IR"},
    {id:4,name:"قشم ایر",engName:"Qheshm Air",code:"QB"},
    {id:5,name:"زاگرس",engName:"Zagros",code:"ZV"},

    {id:6,name:"ماهان",engName:"Mahan Airlines",code:"W5"},
    {id:7,name:"ماهان",engName:"Mahan Airlines",code:"W5"},
    {id:8,name:"ماهان",engName:"Mahan Airlines",code:"W5"},
    {id:9,name:"ماهان",engName:"Mahan Airlines",code:"W5"},
    {id:10,name:"ماهان",engName:"Mahan Airlines",code:"W5"},

    {id:11,name:"زاگرس",engName:"Zagros",code:"ZV"},
    {id:12,name:"زاگرس",engName:"Zagros",code:"ZV"},
    {id:13,name:"زاگرس",engName:"Zagros",code:"ZV"},
    {id:14,name:"زاگرس",engName:"Zagros",code:"ZV"},
    {id:15,name:"زاگرس",engName:"Zagros",code:"ZV"},

    {id:16,name:"قشم ایر",engName:"Qheshm Air",code:"QB"},
    {id:17,name:"قشم ایر",engName:"Qheshm Air",code:"QB"},
];

let userListContainer = document.querySelector("#pageIne")
let paginationContainer = document.querySelector("#pageBtn")
let currentPage = 1
let rowCount = 5

function changePage(n){
    currentPage = n;
    displayUserContent(list_item,userListContainer,rowCount,currentPage)
    setPagination(list_item,paginationContainer,rowCount)
}

function displayUserContent(allUserArray, userContainer, rowCount, currentPage){
    $(document).ready(function(){
        $(userListContainer).empty();
    });

    let endid = rowCount*currentPage
    let strid = endid - rowCount

    let inPageUser = allUserArray.slice(strid,endid)
    let str = "new";
    inPageUser.forEach(function(user) {
        $(document).ready(function(){
            $(userListContainer).append('<div class="ajans_container"><div class="ajansName"><span class="titlee">نام فارسی</span><span id="ajName" class="cap"></span></div><div class="ajansLoc"><span class="titlee">نام انگلیسی</span><span id="ajLoc" class="cap"></span></div><div class="ajansNickname"><span class="titlee">نام اختصار</span><span id="ajNick" class="cap"></span></div><div class="ajansEdit"><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit iconn"></i></span><p class="text">ویرایش</p></button></div></div>');
            $('#ajName').html(user.name)
            $('#ajName').attr('id',str+user.id)
            $('#ajLoc').html(user.engName)
            $('#ajLoc').attr('id',str+user.id+'L')
            $('#ajNick').html(user.code)
            $('#ajNick').attr('id',str+user.id+'N')
        });
    });
}

function setPagination(allUserArray,pagesContainer,rowCount){
    $(document).ready(function(){
        $(pagesContainer).empty();
    });

    let pageCount = Math.ceil(allUserArray.length / rowCount);

    for(let i = 1; i < pageCount + 1; i++){
        $(document).ready(function(){
            $(paginationContainer).append('<button id="mmd" class="pageBtn" onclick="changePage()"></button>')
            $('#mmd').html(i)
            $('#mmd').attr('onclick',"changePage("+ i +")")
            if(i === currentPage){
                $('#mmd').addClass('active')
            }
            $('#mmd').attr('id',"new"+i)
        });
    }
}

displayUserContent(list_item,userListContainer,rowCount,currentPage)
setPagination(list_item,paginationContainer,rowCount)