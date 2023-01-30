/// <reference types ="Cypress" />

describe('Ngo Request Tests', () => {
    let token = ''
    let ngoName = 'MD Test NGO'
    before('GetJwt Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://dev-keycloak.ugdevops.com/auth/realms/UG/protocol/openid-connect/token',
            form: true,
            body: {
                "client_id": "UserService",
                "client_secret": "4555bac1-bf77-498f-8973-ccc5d264846b",
                "grant_type": "client_credentials",
                "response_type": 'code'
            }
        }).then(res => {
            token = res.body.access_token
            cy.log(token)
        })
    })

    it('Test Get ngo registration request by ngo name with basic information', () => {

        cy.request({
            method: 'GET',
            url: 'platformservice/v1/ngo/request/' + ngoName,
            headers: {
                'authorization': 'Bearer ' + token
            }
        }).then(res => {
            expect(res.status).to.eq(222)
            expect(res.body.status).to.eq('DAFT')
            cy.log(JSON.stringify(res))
             /*ADD YOUR VALIDATION HERE*/
        })


    })

    it('Test Get all ngo registration requests with basic information', () => {
        /*ADD YOUR TEST HERE*/

    })

    it('Test Get pending ngo registration requests with basic information', () => {
         /*ADD YOUR TEST HERE*/
    })

})