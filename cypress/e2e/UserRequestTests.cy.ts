/// <reference types ="Cypress" />

describe('User Controller Request Tests', () => {
    let token = ''
    let ngoName = 'MD Test One'
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

    it('Test Create contact us request', () => {
        cy.fixture('contactUs\\form.json').then(payload => {
            cy.request({
                method: 'POST',
                url: '/platformservice/v1/user/contact-us/request',
                headers: {
                    'authorization': 'Bearer ' + token
                },
                body: payload
            }).then(res => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(2081)
                /* ADD VALIDATIONS FOR ALL THE PARAMETERS PRESENT IN THE FORM */
            })

        })

    })

    /**ADD MORE TESTS FROM 
     * https://dev-platformservice.ugdevops.com/swagger-ui/index.html#/user-controller
     * https://dev-platformservice.ugdevops.com/swagger-ui/index.html#/user-account-controller
     */

})