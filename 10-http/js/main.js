function getUsers(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/?results=10');
    xhr.send();

    let users = null;
    
    xhr.onload = function() {
        if (xhr.status >= 400) {
            console.log(xhr.status, xhr.statusText);
            return;
        }
        users = JSON.parse(xhr.response);
        console.log(users);
        callback(users);
    }
}

// name, age, email, phone

function createUsersTable(users) {
    const table = document.createElement('table');
    for (let i = 0; i < users.length; i++) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = users[i].name;
        const tdAge = document.createElement('td');
        tdAge.innerText = users[i].age;
        const tdEmail = document.createElement('td');
        tdEmail.innerText = users[i].email;
        const tdPhone = document.createElement('td');
        tdPhone.innerText = users[i].phone;
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);
        table.appendChild(tr);
    }
    return table;
}

const btnGetUsers = document.querySelector('#btnGetUsers');
btnGetUsers.onclick = function(e) {
    e.preventDefault();
    const resultDiv = document.querySelector('#results');
    resultDiv.innerHTML = '';
    getUsers(function(users) {
        const persons = users.results.map(function (item) {
            return {
                name: `${item.name.first} ${item.name.last}`,
                age: item.dob.age,
                email: item.email,
                phone: item.cell
            };
        });
        const table = createUsersTable(persons);
        resultDiv.appendChild(table);
    });
}