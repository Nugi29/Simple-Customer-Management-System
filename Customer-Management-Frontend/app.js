loadCustomer();
function loadCustomer() {
    return fetch("http://localhost:8080/customer/get-all")
        .then(response => response.json())
        .then(data => {

            let tableRow = `
                <caption>2025 Customers</caption>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
        </tr>`;

            let customertable = document.getElementById("tblCustomer");
            data.forEach(customer => {
                tableRow += `
                <tr onclick="fillForm(this)">
                    <td>${customer.id}</td>
                        <td>${customer.name}</td>
                        <td>${customer.address}</td>
                        <td>${customer.salary}</td>
                    </tr>`;
            });
            customertable.innerHTML = tableRow;
        })
}








