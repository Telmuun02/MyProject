const List = [];

if (List !== undefined){
    showList();
}

function showList(){
    let result = '';
    for (let i = 0; i <= List.length - 1; i++){
        result = result + "<input type='checkbox'>" + (i+1) + ". " + List[i].name + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;" + List[i].calendar + `&nbsp;&nbsp;&nbsp;&nbsp;<button class='delete' onclick='deleteItem(${i})'>Delete</button><br>`;
    }
    document.querySelector('.show').innerHTML = result;
}   


function addItem(){
    const name = document.querySelector('.name').value;
    const calendar = document.querySelector('.calendar').value;
    if (name !== '' && calendar !== ''){
        document.querySelector('.name').value = '';
        document.querySelector('.calendar').value = '';

        const ListObject = {
            name: name,
            calendar: calendar 
        };

        List.push(ListObject);

        showList();
    }
    
}

function resetList(){
    document.querySelector('.show').innerHTML = "";
}

function deleteItem(i){
    List.splice(i, 1);
    showList();
}