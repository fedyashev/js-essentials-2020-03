// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         const num = Math.floor(Math.random() * 100);
//         if (num >= 20) {
//             resolve(num);
//         } else {
//             reject(num);
//         }
//     }, 2000);
// });

// promise
//     .then(function(num) {
//         console.log('Resolve', num);
//     })
//     .catch(function(err) {
//         console.error('Reject', err);
//     });

// const fetch = new Promise(function(resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://randomuser.me/api/?results=10');
//     xhr.send();

//     // let users = null;
    
//     // xhr.onload = function() {
//     //     if (xhr.status >= 400) {
//     //         console.log(xhr.status, xhr.statusText);
//     //         return;
//     //     }
//     //     users = JSON.parse(xhr.response);
//     //     console.log(users);
//     //     callback(users);
//     // }

//     xhr.onload = () => resolve(xhr);
//     xhr.onerror = () => reject(xhr);
// });

// fetch
//     .then(xhr => {
//         if (xhr.status >= 400) {
//             console.log(xhr.status, xhr.statusText);
//             return;
//         }
//         users = JSON.parse(xhr.response);
//         console.log('then 1');
//         return users;
//     })
//     .then(users => { console.log('then 2', users); })
//     .catch(console.log)
//     .finally(function() {
//         console.log('Finish!');
//     });

// fetch('https://randomuser.me/api/?results=10', {
//     method: 'GET',
//     headers: {
//         'Content-Type' : 'application/json;charset=utf-8'
//     }
// })
//     .then(response => {
//         if (response.status >= 400) {
//             console.log('Resource not find');
//         }
//         return response.json();
//     })
//     .then(users => {
//         console.log(users);
//     })
//     .catch(err => console.log(err));

function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const head_tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'id';
    head_tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerText = 'Name'
    head_tr.appendChild(th2);
    thead.appendChild(head_tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(function(item) {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        tdId.innerText = item._id;
        tdName.innerText = item.name;
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    return table;
}

function createTableWithBtnDelete(data, btnDeleteOnClickHandler) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const head_tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'id';
    head_tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerText = 'Name'
    const th3 = document.createElement('th');
    th3.innerText = 'Action'
    head_tr.appendChild(th2);
    thead.appendChild(head_tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(function(item) {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        const tdBtnDelete = document.createElement('td');
        const btnDelete = document.createElement('button');

        tdId.innerText = item._id;
        tdName.innerText = item.name;

        btnDelete.innerText = 'Delete';
        btnDelete.setAttribute('data-id', item._id);
        btnDelete.addEventListener('click', btnDeleteOnClickHandler);

        tdBtnDelete.appendChild(btnDelete);

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdBtnDelete);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    return table;
}



const btnGetExpenses = document.querySelector('#btnGetExpenses');
btnGetExpenses.onclick = function(e) {
    e.preventDefault();
    const tp = document.querySelector('#table-placeholder');

    api.getAllExpenses()
        .then(users => {
            tp.innerHTML = '';
            const table = createTable(users);
            tp.appendChild(table);
        })
        .catch(err => {
            console.log(err);
        });
}

const btnCreate = document.querySelector('#btnCreate');
const inputCreate = document.querySelector('#inputCreate');
btnCreate.addEventListener('click', function(e) {
    e.preventDefault();
    const name = inputCreate.value.trim();
    api.createExpense(name)
        .then(function(isSuccess) {
            alert('Расход добавлен');
        })
        .catch(function(err) {
            console.log(err);
        });
});

const btnGetExpensesForDelete = document.querySelector('#btnGetExpensesForDelete');
btnGetExpensesForDelete.addEventListener('click', function(e) {
    e.preventDefault();
    const tp = document.querySelector('#table-delete-placeholder');

    api.getAllExpenses()
        .then(data => {
            tp.innerHTML = '';
            function btnDeleteOnClickHandler(e) {
                e.preventDefault();
                const btn = this;
                const id = this.getAttribute('data-id');
                api.deleteExpenseById(id)
                    .then(function (isSuccess) {
                        btn.parentElement.parentElement.remove();
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
            const table = createTableWithBtnDelete(data, btnDeleteOnClickHandler);
            tp.appendChild(table);
        })
        .catch(err => {
            console.log(err);
        });
});
