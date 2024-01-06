
const list_item = [
    {id:1,name:"آراس سیر تبریز",loc:"تبریز"},
    {id:2,name:"آراس سیر شیراز",loc:"شیراز"},
    {id:3,name:"آراس سیر مشهد",loc:"مشهد"},
    {id:4,name:"آراس سیر تهران",loc:"تهران"},
    {id:5,name:"آراس سیر خرمشهر",loc:"خوزستان"},
    
    {id:6,name:"آراس سیر شیراز",loc:"شیراز"},
    {id:7,name:"آراس سیر تبریز",loc:"تبریز"},
    {id:8,name:"آراس سیر مشهد",loc:"مشهد"},
    {id:9,name:"آراس سیر تهران",loc:"تهران"},
    {id:10,name:"آراس سیر خرمشهر",loc:"خوزستان"},
    
    {id:11,name:"آراس سیر مشهد",loc:"مشهد"},
    {id:12,name:"آراس سیر شیراز",loc:"شیراز"},
    {id:13,name:"آراس سیر تبریز",loc:"تبریز"},
    {id:14,name:"آراس سیر تهران",loc:"تهران"},
    {id:15,name:"آراس سیر خرمشهر",loc:"خوزستان"},
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
            $(userListContainer).append('<div class="ajans_container"><div class="ajansName"><span class="titlee">نام آژانس</span><span id="ajName" class="cap"></span></div><div class="ajansLoc"><span class="titlee">موقعیت آژانس</span><span id="ajLoc" class="cap">علی جوجو</span></div><div class="ajansEdit"><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bx-conversation icon"></i></span><p class="text">پیامک</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bx-text icon"></i></span><p class="text">امضا</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit-location icon"></i></span><p class="text">ادرس</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-buildings icon"></i></span><p class="text">لوگو</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit icon"></i></span><p class="text">ویرایش</p></button></div></div>');
            $('#ajName').html(user.name)
            $('#ajName').attr('id',str+user.id)
            $('#ajLoc').html(user.loc)
            $('#ajLoc').attr('id',str+user.id+'L')
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

$(document).ready(function(){
    $('ul#nav li div#travelDRP a#ajanss').click(function(){
        $('#content').empty();
        $('#content').append('<div class="topbar"><div class="searchBar"><i class="bx bx-search-alt-2"></i><input type="text" placeholder="جست و جو ..."></div><div class="showsearch"></div><button class="backbtn">بازگشت</button></div>');
        $('#content').append('<div class="pageContent" id="pageIne"></div>');
        $('#content').append('<div class="pageButtens" id="pageBtn"></div>');
        let userListContainer = document.querySelector("#pageIne")
        let paginationContainer = document.querySelector("#pageBtn")
        let currentPage = 1
        let rowCount = 5

        function changePage(n){
            currentPage = n;
            displayUserContent(list_item,userListContainer,rowCount,currentPage)
            setPagination(list_item,paginationContainer,rowCount)
        }

            $(document).ready(function(){
                $(userListContainer).empty();
            });

            let endid = rowCount*currentPage
            let strid = endid - rowCount

            let inPageUser = allUserArray.slice(strid,endid)
            let str = "new";
            inPageUser.forEach(function(user) {
                $(document).ready(function(){
                    $(userListContainer).append('<div class="ajans_container"><div class="ajansName"><span class="titlee">نام آژانس</span><span id="ajName" class="cap"></span></div><div class="ajansLoc"><span class="titlee">موقعیت آژانس</span><span id="ajLoc" class="cap">علی جوجو</span></div><div class="ajansEdit"><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bx-conversation icon"></i></span><p class="text">پیامک</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bx-text icon"></i></span><p class="text">امضا</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit-location icon"></i></span><p class="text">ادرس</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-buildings icon"></i></span><p class="text">لوگو</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit icon"></i></span><p class="text">ویرایش</p></button></div></div>');
                    $('#ajName').html(user.name)
                    $('#ajName').attr('id',str+user.id)
                    $('#ajLoc').html(user.loc)
                    $('#ajLoc').attr('id',str+user.id+'L')
                });
            });

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
        });
});