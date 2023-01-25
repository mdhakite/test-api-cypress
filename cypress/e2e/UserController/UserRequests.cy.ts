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
                expect(res.status).to.eq(201)
                expect(res.body.contactUs.firstName).to.eq(payload.contactUs.firstName)
                expect(res.body.contactUs).has.property('email', payload.contactUs.email)
                expect(res.body.contactUs).has.property('lastName', payload.contactUs.lastName)
                expect(res.body.contactUs).has.property('contactNumber', payload.contactUs.contactNumber)
                expect(res.body.contactUs).has.property('messageSubject', payload.contactUs.messageSubject)
                expect(res.body.contactUs).has.property('howCanWeHelp', payload.contactUs.howCanWeHelp)
                expect(res.body.contactUs).has.property('userType', payload.contactUs.userType)
            })

        })

    })
})