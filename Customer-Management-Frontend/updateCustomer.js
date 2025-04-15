function updateCustomer() {

    let id = document.getElementById("txtId").value;
    let name = document.getElementById("txtName").value;
    let address = document.getElementById("txtAddress").value;
    let salary = document.getElementById("txtSalary").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "id": id,
      "name": name,
      "address": address,
      "salary": salary
    });
    
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
    };
    
    fetch("http://localhost:8080/customer/update-customer", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

}

function fillForm(row) {
    document.getElementById("txtId").value = row.cells[0].innerHTML;
    document.getElementById("txtName").value = row.cells[1].innerHTML;
    document.getElementById("txtAddress").value = row.cells[2].innerHTML;
    document.getElementById("txtSalary").value = row.cells[3].innerHTML;
}

loadCustomer();
