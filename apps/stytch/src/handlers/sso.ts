import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute,
  deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute,
  getV1B2bSsoOrganizationIdRoute,
  postV1B2bSsoAuthenticateRoute,
  postV1B2bSsoExternalOrganizationIdRoute,
  postV1B2bSsoOidcOrganizationIdRoute,
  postV1B2bSsoSamlOrganizationIdRoute,
  putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute,
  putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app
  .openapi(getV1B2bSsoOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bSsoOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoOidcOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoOidcOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSsoSamlOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoSamlOrganizationIdConnectionsConnectionIdUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdVerificationCertificatesCertificateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1B2bSsoSamlOrganizationIdConnectionsConnectionIdEncryptionPrivateKeysPrivateKeyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1B2bSsoExternalOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bSsoExternalOrganizationIdConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
