const DOMEN = 'http://jscourseexpense.herokuapp.com';

const api = {
    getAllExpenses: function() {
        return fetch(DOMEN + '/api/v1/expenses', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json;charset=utf-8'
            }
        })
        .then(response => {
            if (response.status >= 400) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        });
    },

    getExpenseById: function(id) {
        return 'getExpenseById';
    },

    createExpense: function(name) {
        return fetch(DOMEN + '/api/v1/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ name })
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return true;
        });
    },

    updateExpenseById: function (id, newName) {
        return 'updateExpenseById';
    },

    deleteExpenseById: function(id) {
        return fetch(DOMEN + `/api/v1/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return true;
        });
    },


    getAll: () => new Promise(function(resolve, reject) {
        const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        const xhr = new XHR();
        xhr.open('GET', DOMEN, true);
        xhr.send();
        xhr.onload = () => resolve(xhr);
        xhr.onerror = () => reject(xhr);
    })
}