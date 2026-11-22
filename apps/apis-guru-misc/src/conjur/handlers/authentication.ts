import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthnAccountLoginRoute,
  getAuthnLdapServiceIdAccountLoginRoute,
  patchAuthenticatorAccountRoute,
  patchAuthenticatorServiceIdAccountRoute,
  postAuthnAccountLoginAuthenticateRoute,
  postAuthnAzureServiceIdAccountLoginAuthenticateRoute,
  postAuthnGcpAccountAuthenticateRoute,
  postAuthnIamServiceIdAccountLoginAuthenticateRoute,
  postAuthnJwtServiceIdAccountAuthenticateRoute,
  postAuthnJwtServiceIdAccountIdAuthenticateRoute,
  postAuthnK8sServiceIdAccountLoginAuthenticateRoute,
  postAuthnK8sServiceIdInjectClientCertRoute,
  postAuthnLdapServiceIdAccountLoginAuthenticateRoute,
  postAuthnOidcServiceIdAccountAuthenticateRoute,
  putAuthnAccountApiKeyRoute,
  putAuthnAccountPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postAuthnAzureServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnGcpAccountAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnIamServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnJwtServiceIdAccountAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnJwtServiceIdAccountIdAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnK8sServiceIdInjectClientCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnK8sServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthnLdapServiceIdAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnLdapServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnOidcServiceIdAccountAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthnAccountApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthnAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthnAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorServiceIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
