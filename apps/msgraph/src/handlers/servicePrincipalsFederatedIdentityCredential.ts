import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
  getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
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
  .openapi(
    deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsNameNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdFederatedIdentityCredentialsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
