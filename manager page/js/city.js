const list_item = [
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},

    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
    {id:1,name:"ایران",nik:"IRI"},
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
            $(userListContainer).append('<div class="ajans_container"><div class="ajansName"><span class="titlee">نام کشور</span><span id="ajName" class="cap"></span></div><div class="ajansNickname"><span class="titlee">نام اختصار</span><span id="ajNickname" class="cap"></span></div><div class="ajansEdit"><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-city" ></i></span><p class="text">شهر ها</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-edit iconn"></i></span><p class="text">ویرایش</p></button><button class="bookmarkBtn"><span class="IconContainer"><i class="bx bxs-trash iconn"></i></span><p class="text">حذف</p></button></div></div>');
            $('#ajName').html(user.name)
            $('#ajName').attr('id',str+user.id)
            $('#ajNickname').html(user.nik)
            $('#ajNickname').attr('id',str+user.id+'NN')
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