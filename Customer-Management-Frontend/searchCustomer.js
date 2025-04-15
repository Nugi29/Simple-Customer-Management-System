function searchCustomer() {
    fetch("http://localhost:8080/customer/search-by-id/" + document.getElementById("txtSearchId").value)
        .then((response) => response.json())
        .then((customer) => {
            document.getElementById("txtId").value = customer.id;
            document.getElementById("txtName").value = customer.name;
            document.getElementById("txtAddress").value = customer.address;
            document.getElementById("txtSalary").value = customer.salary;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}