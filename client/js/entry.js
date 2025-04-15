addHandlers();

function addHandlers() {
    $('#getTitle').off().on('click', () => {
        console.log("Clicked Title");
        ajaxCallTest();
    });
    $('#getTags').off().on('click', () => {
        console.log("Clicked Tags");
    });
    $('#getAll').off().on('click', () => {
        console.log("Clicked All");
    });
    $('#update').off().on('click', () => {
        console.log("Clicked Update");
    });
    $('#del').off().on('click', () => {
        console.log("Clicked Delete");
    });
}

function ajaxCallTest() {
    let urlString = "http://localhost:5000/msg";
    let request = $.ajax({
        method: "GET",
        url: urlString,
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        data: null
    });

    request.done((msg) => {
        console.log(msg);
        $('#results').html("Successfully returned from server...");
    });

    request.fail((jqXHR, msg) => {
        console.log("Return FAIL from level api. msg = " + msg);
    });
}