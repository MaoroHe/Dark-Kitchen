
function validateForm() {
    var customerName = document.getElementById('customerName').value;
    var customerAddress = document.getElementById('customerAddress').value;
    var items = document.getElementById('items').value;

    if (customerName === "" || customerAddress === "" || items === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    return true;
}


