/// <reference types ="Cypress" />

describe('Payment Controller Request Tests', () => {
    let token = ''
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

/*ADD API TESTS FROM
https://dev-paymentservice.ugdevops.com/swagger-ui/index.html#/
- ONE TEST IN ONE IT BLOCK
- AUTOMATE AS MANY TEST CASES AS POSSIBLE
- ADD AS MUCH VALIDATION AS POSSIBLE
*/

    it('Test ___', () => {
        
    })
    
})