searchCustomer();

function deleteCustomer() {
    const customerId = document.getElementById("txtId").value;
    fetch("http://localhost:8080/customer/delete/" + customerId, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                alert("Customer deleted successfully!");
                document.getElementById("txtId").value = "";
                document.getElementById("txtName").value = "";
                document.getElementById("txtAddress").value = "";
                document.getElementById("txtSalary").value = "";
            } else {
                alert("Failed to delete customer!");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error deleting customer!");
        });
}