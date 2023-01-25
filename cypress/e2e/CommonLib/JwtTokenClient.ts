export function getToken() {}

describe('Get Jwt Token',()=>{
    let token = ''
    function getToken(): string {

        cy.request({
            method: 'POST',
            url: 'https://dev-keycloak.ugdevops.com/auth/realms/UG/protocol/openid-connect/token',
            form: true,
            body:{
                "client_id": "UserService",
                "client_secret": "4555bac1-bf77-498f-8973-ccc5d264846b",
                "grant_type": "client_credentials",
                "response_type": 'code'
            }
        }).then(res =>{
            token = res.body.access_token
        })

        return token

    }
    
})