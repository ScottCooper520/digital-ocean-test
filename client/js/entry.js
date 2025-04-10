addHandlers();

function addHandlers() {
    $('#getTitle').off().on('click', () => {
        console.log("Clicked Title");
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