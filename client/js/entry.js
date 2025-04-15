// window.API_ENDPOINT = "http://localhost:5000";
window.API_ENDPOINT = "https://amazing-electro-lab.com";

addHandlers();

function addHandlers() {
    $('#getTitle').off().on('click', () => {
        console.log("Clicked Title");
        console.log("In addHandlers = " + window.API_ENDPOINT);
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
    // let urlString = "http://localhost:5000/msg";
    let urlString = window.API_ENDPOINT + "/msg";
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
        $('#results').append("In Ajax call = " + window.API_ENDPOINT);

    });

    request.fail((jqXHR, msg) => {
        console.log("Return FAIL from level api. msg = " + msg);
    });
}