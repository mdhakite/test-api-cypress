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

/* CREATE TESTS FOR:
1. Create job application request
2. Get job application
3. Check whether already apply for same job
4. Download Job Files
5. Get All Comments of a Job Application
6. Add comments to Job Application
USE: https://dev-platformservice.ugdevops.com/swagger-ui/index.html#/job-application-controller
*/

})
