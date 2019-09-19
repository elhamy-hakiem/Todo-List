var noteArray;


if(localStorage.getItem("notes")==null)
{
    noteArray=[];
}
else
    {
        noteArray=JSON.parse(localStorage.getItem("notes"));
        displayNote();
    }

$("#addBtn").click(function(){
      if($("#myInp").val()=="")
        {
            alert("You must write something!");
        }
    else{
        addNote();
        clearForm();
    }
})


function addNote()
{
    let noteContent;
    noteContent=$("#myInp").val();
    noteArray.push(noteContent);
    localStorage.setItem("notes",JSON.stringify(noteArray));
    displayNote();
}

function displayNote()
{
    var noteList=``;
    for(let i=0;i<noteArray.length;i++)
        {
            noteList +=`<li>
                            <p class="float-left m-0  py-3 pl-3">`+noteArray[i]+`</p>
                            <div class="float-right py-3 text-right px-3 closeIcon"onclick="deleteNote(`+i+`)"><i  class="fas fa-times" id="lClose"></i></div>
                            <div class="clearfix"></div>
                    </li>`
        }
    $(".myList").html(noteList);
    //Check off Specific Todos By Clicking
    $("li p").click(function(){
    $(this).toggleClass("completed");
})

}

//Click on X to delete Todo
function deleteNote(id)
{
    noteArray.splice(id,1);
    localStorage.setItem("notes",JSON.stringify(noteArray));
    displayNote();
}

function clearForm()
{
    $("#myInp").val("");
}

