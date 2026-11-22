import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsFederatedIdentityCredentialHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
