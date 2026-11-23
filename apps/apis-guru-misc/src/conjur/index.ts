import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHostFactoryTokensTokenRoute,
  deleteRolesAccountKindIdentifierRoute,
  getAuthenticatorServiceIdAccountStatusRoute,
  getAuthenticatorsRoute,
  getAuthnAccountLoginRoute,
  getAuthnGcpAccountStatusRoute,
  getAuthnLdapServiceIdAccountLoginRoute,
  getHealthRoute,
  getInfoRoute,
  getPublicKeysAccountKindIdentifierRoute,
  getRemoteHealthRemoteRoute,
  getResourcesAccountKindIdentifierRoute,
  getResourcesAccountKindRoute,
  getResourcesAccountRoute,
  getResourcesRoute,
  getRolesAccountKindIdentifierRoute,
  getSecretsAccountKindIdentifierRoute,
  getSecretsRoute,
  getWhoamiRoute,
  patchAuthenticatorAccountRoute,
  patchAuthenticatorServiceIdAccountRoute,
  patchPoliciesAccountPolicyIdentifierRoute,
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
  postCaAccountServiceIdSignRoute,
  postHostFactoriesHostsRoute,
  postHostFactoryTokensRoute,
  postPoliciesAccountPolicyIdentifierRoute,
  postRolesAccountKindIdentifierRoute,
  postSecretsAccountKindIdentifierRoute,
  putAuthnAccountApiKeyRoute,
  putAuthnAccountPasswordRoute,
  putPoliciesAccountPolicyIdentifierRoute,
} from './routes'
import {
  deleteHostFactoryTokensTokenRouteHandler,
  deleteRolesAccountKindIdentifierRouteHandler,
  getAuthenticatorServiceIdAccountStatusRouteHandler,
  getAuthenticatorsRouteHandler,
  getAuthnAccountLoginRouteHandler,
  getAuthnGcpAccountStatusRouteHandler,
  getAuthnLdapServiceIdAccountLoginRouteHandler,
  getHealthRouteHandler,
  getInfoRouteHandler,
  getPublicKeysAccountKindIdentifierRouteHandler,
  getRemoteHealthRemoteRouteHandler,
  getResourcesAccountKindIdentifierRouteHandler,
  getResourcesAccountKindRouteHandler,
  getResourcesAccountRouteHandler,
  getResourcesRouteHandler,
  getRolesAccountKindIdentifierRouteHandler,
  getSecretsAccountKindIdentifierRouteHandler,
  getSecretsRouteHandler,
  getWhoamiRouteHandler,
  patchAuthenticatorAccountRouteHandler,
  patchAuthenticatorServiceIdAccountRouteHandler,
  patchPoliciesAccountPolicyIdentifierRouteHandler,
  postAuthnAccountLoginAuthenticateRouteHandler,
  postAuthnAzureServiceIdAccountLoginAuthenticateRouteHandler,
  postAuthnGcpAccountAuthenticateRouteHandler,
  postAuthnIamServiceIdAccountLoginAuthenticateRouteHandler,
  postAuthnJwtServiceIdAccountAuthenticateRouteHandler,
  postAuthnJwtServiceIdAccountIdAuthenticateRouteHandler,
  postAuthnK8sServiceIdAccountLoginAuthenticateRouteHandler,
  postAuthnK8sServiceIdInjectClientCertRouteHandler,
  postAuthnLdapServiceIdAccountLoginAuthenticateRouteHandler,
  postAuthnOidcServiceIdAccountAuthenticateRouteHandler,
  postCaAccountServiceIdSignRouteHandler,
  postHostFactoriesHostsRouteHandler,
  postHostFactoryTokensRouteHandler,
  postPoliciesAccountPolicyIdentifierRouteHandler,
  postRolesAccountKindIdentifierRouteHandler,
  postSecretsAccountKindIdentifierRouteHandler,
  putAuthnAccountApiKeyRouteHandler,
  putAuthnAccountPasswordRouteHandler,
  putPoliciesAccountPolicyIdentifierRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthenticatorsRoute, getAuthenticatorsRouteHandler)
  .openapi(
    postAuthnAzureServiceIdAccountLoginAuthenticateRoute,
    postAuthnAzureServiceIdAccountLoginAuthenticateRouteHandler,
  )
  .openapi(postAuthnGcpAccountAuthenticateRoute, postAuthnGcpAccountAuthenticateRouteHandler)
  .openapi(getAuthnGcpAccountStatusRoute, getAuthnGcpAccountStatusRouteHandler)
  .openapi(
    postAuthnIamServiceIdAccountLoginAuthenticateRoute,
    postAuthnIamServiceIdAccountLoginAuthenticateRouteHandler,
  )
  .openapi(
    postAuthnJwtServiceIdAccountAuthenticateRoute,
    postAuthnJwtServiceIdAccountAuthenticateRouteHandler,
  )
  .openapi(
    postAuthnJwtServiceIdAccountIdAuthenticateRoute,
    postAuthnJwtServiceIdAccountIdAuthenticateRouteHandler,
  )
  .openapi(
    postAuthnK8sServiceIdInjectClientCertRoute,
    postAuthnK8sServiceIdInjectClientCertRouteHandler,
  )
  .openapi(
    postAuthnK8sServiceIdAccountLoginAuthenticateRoute,
    postAuthnK8sServiceIdAccountLoginAuthenticateRouteHandler,
  )
  .openapi(getAuthnLdapServiceIdAccountLoginRoute, getAuthnLdapServiceIdAccountLoginRouteHandler)
  .openapi(
    postAuthnLdapServiceIdAccountLoginAuthenticateRoute,
    postAuthnLdapServiceIdAccountLoginAuthenticateRouteHandler,
  )
  .openapi(
    postAuthnOidcServiceIdAccountAuthenticateRoute,
    postAuthnOidcServiceIdAccountAuthenticateRouteHandler,
  )
  .openapi(putAuthnAccountApiKeyRoute, putAuthnAccountApiKeyRouteHandler)
  .openapi(getAuthnAccountLoginRoute, getAuthnAccountLoginRouteHandler)
  .openapi(putAuthnAccountPasswordRoute, putAuthnAccountPasswordRouteHandler)
  .openapi(postAuthnAccountLoginAuthenticateRoute, postAuthnAccountLoginAuthenticateRouteHandler)
  .openapi(postCaAccountServiceIdSignRoute, postCaAccountServiceIdSignRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(postHostFactoriesHostsRoute, postHostFactoriesHostsRouteHandler)
  .openapi(postHostFactoryTokensRoute, postHostFactoryTokensRouteHandler)
  .openapi(deleteHostFactoryTokensTokenRoute, deleteHostFactoryTokensTokenRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(
    patchPoliciesAccountPolicyIdentifierRoute,
    patchPoliciesAccountPolicyIdentifierRouteHandler,
  )
  .openapi(
    postPoliciesAccountPolicyIdentifierRoute,
    postPoliciesAccountPolicyIdentifierRouteHandler,
  )
  .openapi(putPoliciesAccountPolicyIdentifierRoute, putPoliciesAccountPolicyIdentifierRouteHandler)
  .openapi(getPublicKeysAccountKindIdentifierRoute, getPublicKeysAccountKindIdentifierRouteHandler)
  .openapi(getRemoteHealthRemoteRoute, getRemoteHealthRemoteRouteHandler)
  .openapi(getResourcesRoute, getResourcesRouteHandler)
  .openapi(getResourcesAccountRoute, getResourcesAccountRouteHandler)
  .openapi(getResourcesAccountKindRoute, getResourcesAccountKindRouteHandler)
  .openapi(getResourcesAccountKindIdentifierRoute, getResourcesAccountKindIdentifierRouteHandler)
  .openapi(deleteRolesAccountKindIdentifierRoute, deleteRolesAccountKindIdentifierRouteHandler)
  .openapi(getRolesAccountKindIdentifierRoute, getRolesAccountKindIdentifierRouteHandler)
  .openapi(postRolesAccountKindIdentifierRoute, postRolesAccountKindIdentifierRouteHandler)
  .openapi(getSecretsRoute, getSecretsRouteHandler)
  .openapi(getSecretsAccountKindIdentifierRoute, getSecretsAccountKindIdentifierRouteHandler)
  .openapi(postSecretsAccountKindIdentifierRoute, postSecretsAccountKindIdentifierRouteHandler)
  .openapi(getWhoamiRoute, getWhoamiRouteHandler)
  .openapi(patchAuthenticatorAccountRoute, patchAuthenticatorAccountRouteHandler)
  .openapi(patchAuthenticatorServiceIdAccountRoute, patchAuthenticatorServiceIdAccountRouteHandler)
  .openapi(
    getAuthenticatorServiceIdAccountStatusRoute,
    getAuthenticatorServiceIdAccountStatusRouteHandler,
  )

export default app
