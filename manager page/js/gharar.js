const list_item = [
    {id:1,name:"بلیط پرواز داخلی"},
    {id:2,name:"بلیط پرواز خارجی"},
    {id:3,name:"بلیط پرواز داخلی"},
    {id:4,name:"بلیط پرواز داخلی"},
    {id:5,name:"بلیط پرواز داخلی"},
    {id:6,name:"بلیط پرواز داخلی"},
    {id:7,name:"بلیط پرواز داخلی"},
    {id:8,name:"بلیط پرواز داخلی"},
    {id:9,name:"بلیط پرواز داخلی"},
    {id:10,name:"بلیط پرواز داخلی"},
    {id:11,name:"بلیط پرواز داخلی"},
];

let userListContainer = document.querySelector("#pageIne")
let paginationContainer = document.querySelector("#pageBtn")
let currentPage = 1
let rowCount = 11

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
            $(userListContainer).append('<div class="ajans_container"><div class="ajansName"><span class="titlee">عنوان قرارداد</span><span id="ajName" class="cap"></span></div><div class="ajansEdit"><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bx-printer"></i></span><p class="text">پرینت</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit iconn"></i></span><p class="text">ویرایش</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-trash iconn"></i></span><p class="text">حذف</p></button></div></div>');
            $('#ajName').html(user.name)
            $('#ajName').attr('id',str+user.id)
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