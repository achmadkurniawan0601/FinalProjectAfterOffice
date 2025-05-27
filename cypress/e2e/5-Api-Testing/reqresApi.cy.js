describe('API Reqres', () => {
    it('TC01_ListUsers', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('per_page');
        });
    });

    it('TC02_Create', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Achmad",
                "job": "QA"
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', 'Achmad');
            expect(response.body).to.have.property('job', 'QA');
            expect(response.body).to.have.property('id'); // server generate ID
            expect(response.body).to.have.property('createdAt');
        });
    });

    it('TC03_Update', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('job', 'zion resident');
        });
    });

    it('TC04_Delete', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            expect(response.status).to.equal(204);
            expect(response.body).to.be.empty;
        });
    });
});
