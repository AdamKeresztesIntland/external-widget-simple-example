const api = new window.CbWidgetApi.WidgetApi(window, 'widget-id', '*');

api.authenticate()
    .then(response => response.token)
    .then(token => fetch('http://localhost:8080/cb/api/v3/projects',{
        headers: {
            authorization: 'Bearer ' + token
        }
    }))
    .then(response => response.json())
    .then(projects => console.log(projects));

api.onSelectedItemChange((itemId) => {
    console.log("onSelectedItemChange");
    console.log(itemId);
    let messagesDiv = document.getElementById('messages');

    messagesDiv.innerHTML += "<br>onSelectedItemChange: <br>";
    messagesDiv.innerHTML += itemId.toString();
    post(itemId);
});

document.addEventListener("DOMContentLoaded",function(){
    api.getSelectedItem().then(selectedItem => {
        console.log("selectedItemId");
        console.log(selectedItem);
        let messages = document.getElementById('messages');
        messages.innerHTML += "<br>selectedItemId: " + selectedItem.itemId;
        post(selectedItem.itemId);
    });
});

const post = (itemId) => {
    (async () => {
        const rawResponse = await fetch('http://localhost:3080/api/example', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({itemId: itemId})
        });
        const content = await rawResponse.json();

        console.log(content);
    })();
}
