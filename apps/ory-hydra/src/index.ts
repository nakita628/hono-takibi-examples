import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminClientsIdRoute,
  deleteAdminClientsIdSecretsRotateRoute,
  deleteAdminKeysSetKidRoute,
  deleteAdminKeysSetRoute,
  deleteAdminOauth2AuthSessionsConsentRoute,
  deleteAdminOauth2AuthSessionsLoginRoute,
  deleteAdminOauth2TokensRoute,
  deleteAdminTrustGrantsJwtBearerIssuersIdRoute,
  deleteOauth2RegisterIdRoute,
  getAdminClientsIdRoute,
  getAdminClientsRoute,
  getAdminKeysSetKidRoute,
  getAdminKeysSetRoute,
  getAdminOauth2AuthRequestsConsentRoute,
  getAdminOauth2AuthRequestsLoginRoute,
  getAdminOauth2AuthRequestsLogoutRoute,
  getAdminOauth2AuthSessionsConsentRoute,
  getAdminTrustGrantsJwtBearerIssuersIdRoute,
  getAdminTrustGrantsJwtBearerIssuersRoute,
  getHealthAliveRoute,
  getHealthReadyRoute,
  getOauth2AuthRoute,
  getOauth2DeviceVerifyRoute,
  getOauth2RegisterIdRoute,
  getOauth2SessionsLogoutRoute,
  getUserinfoRoute,
  getVersionRoute,
  getWellKnownJwksJsonRoute,
  getWellKnownOpenidConfigurationRoute,
  patchAdminClientsIdRoute,
  postAdminClientsIdSecretsRotateRoute,
  postAdminClientsRoute,
  postAdminKeysSetRoute,
  postAdminOauth2IntrospectRoute,
  postAdminTrustGrantsJwtBearerIssuersRoute,
  postCredentialsRoute,
  postOauth2DeviceAuthRoute,
  postOauth2RegisterRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
  putAdminClientsIdLifespansRoute,
  putAdminClientsIdRoute,
  putAdminKeysSetKidRoute,
  putAdminKeysSetRoute,
  putAdminOauth2AuthRequestsConsentAcceptRoute,
  putAdminOauth2AuthRequestsConsentRejectRoute,
  putAdminOauth2AuthRequestsDeviceAcceptRoute,
  putAdminOauth2AuthRequestsLoginAcceptRoute,
  putAdminOauth2AuthRequestsLoginRejectRoute,
  putAdminOauth2AuthRequestsLogoutAcceptRoute,
  putAdminOauth2AuthRequestsLogoutRejectRoute,
  putOauth2RegisterIdRoute,
} from './routes'
import {
  deleteAdminClientsIdRouteHandler,
  deleteAdminClientsIdSecretsRotateRouteHandler,
  deleteAdminKeysSetKidRouteHandler,
  deleteAdminKeysSetRouteHandler,
  deleteAdminOauth2AuthSessionsConsentRouteHandler,
  deleteAdminOauth2AuthSessionsLoginRouteHandler,
  deleteAdminOauth2TokensRouteHandler,
  deleteAdminTrustGrantsJwtBearerIssuersIdRouteHandler,
  deleteOauth2RegisterIdRouteHandler,
  getAdminClientsIdRouteHandler,
  getAdminClientsRouteHandler,
  getAdminKeysSetKidRouteHandler,
  getAdminKeysSetRouteHandler,
  getAdminOauth2AuthRequestsConsentRouteHandler,
  getAdminOauth2AuthRequestsLoginRouteHandler,
  getAdminOauth2AuthRequestsLogoutRouteHandler,
  getAdminOauth2AuthSessionsConsentRouteHandler,
  getAdminTrustGrantsJwtBearerIssuersIdRouteHandler,
  getAdminTrustGrantsJwtBearerIssuersRouteHandler,
  getHealthAliveRouteHandler,
  getHealthReadyRouteHandler,
  getOauth2AuthRouteHandler,
  getOauth2DeviceVerifyRouteHandler,
  getOauth2RegisterIdRouteHandler,
  getOauth2SessionsLogoutRouteHandler,
  getUserinfoRouteHandler,
  getVersionRouteHandler,
  getWellKnownJwksJsonRouteHandler,
  getWellKnownOpenidConfigurationRouteHandler,
  patchAdminClientsIdRouteHandler,
  postAdminClientsIdSecretsRotateRouteHandler,
  postAdminClientsRouteHandler,
  postAdminKeysSetRouteHandler,
  postAdminOauth2IntrospectRouteHandler,
  postAdminTrustGrantsJwtBearerIssuersRouteHandler,
  postCredentialsRouteHandler,
  postOauth2DeviceAuthRouteHandler,
  postOauth2RegisterRouteHandler,
  postOauth2RevokeRouteHandler,
  postOauth2TokenRouteHandler,
  putAdminClientsIdLifespansRouteHandler,
  putAdminClientsIdRouteHandler,
  putAdminKeysSetKidRouteHandler,
  putAdminKeysSetRouteHandler,
  putAdminOauth2AuthRequestsConsentAcceptRouteHandler,
  putAdminOauth2AuthRequestsConsentRejectRouteHandler,
  putAdminOauth2AuthRequestsDeviceAcceptRouteHandler,
  putAdminOauth2AuthRequestsLoginAcceptRouteHandler,
  putAdminOauth2AuthRequestsLoginRejectRouteHandler,
  putAdminOauth2AuthRequestsLogoutAcceptRouteHandler,
  putAdminOauth2AuthRequestsLogoutRejectRouteHandler,
  putOauth2RegisterIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWellKnownJwksJsonRoute, getWellKnownJwksJsonRouteHandler)
  .openapi(getWellKnownOpenidConfigurationRoute, getWellKnownOpenidConfigurationRouteHandler)
  .openapi(getAdminClientsRoute, getAdminClientsRouteHandler)
  .openapi(postAdminClientsRoute, postAdminClientsRouteHandler)
  .openapi(deleteAdminClientsIdRoute, deleteAdminClientsIdRouteHandler)
  .openapi(getAdminClientsIdRoute, getAdminClientsIdRouteHandler)
  .openapi(patchAdminClientsIdRoute, patchAdminClientsIdRouteHandler)
  .openapi(putAdminClientsIdRoute, putAdminClientsIdRouteHandler)
  .openapi(putAdminClientsIdLifespansRoute, putAdminClientsIdLifespansRouteHandler)
  .openapi(deleteAdminClientsIdSecretsRotateRoute, deleteAdminClientsIdSecretsRotateRouteHandler)
  .openapi(postAdminClientsIdSecretsRotateRoute, postAdminClientsIdSecretsRotateRouteHandler)
  .openapi(deleteAdminKeysSetRoute, deleteAdminKeysSetRouteHandler)
  .openapi(getAdminKeysSetRoute, getAdminKeysSetRouteHandler)
  .openapi(postAdminKeysSetRoute, postAdminKeysSetRouteHandler)
  .openapi(putAdminKeysSetRoute, putAdminKeysSetRouteHandler)
  .openapi(deleteAdminKeysSetKidRoute, deleteAdminKeysSetKidRouteHandler)
  .openapi(getAdminKeysSetKidRoute, getAdminKeysSetKidRouteHandler)
  .openapi(putAdminKeysSetKidRoute, putAdminKeysSetKidRouteHandler)
  .openapi(getAdminOauth2AuthRequestsConsentRoute, getAdminOauth2AuthRequestsConsentRouteHandler)
  .openapi(
    putAdminOauth2AuthRequestsConsentAcceptRoute,
    putAdminOauth2AuthRequestsConsentAcceptRouteHandler,
  )
  .openapi(
    putAdminOauth2AuthRequestsConsentRejectRoute,
    putAdminOauth2AuthRequestsConsentRejectRouteHandler,
  )
  .openapi(
    putAdminOauth2AuthRequestsDeviceAcceptRoute,
    putAdminOauth2AuthRequestsDeviceAcceptRouteHandler,
  )
  .openapi(getAdminOauth2AuthRequestsLoginRoute, getAdminOauth2AuthRequestsLoginRouteHandler)
  .openapi(
    putAdminOauth2AuthRequestsLoginAcceptRoute,
    putAdminOauth2AuthRequestsLoginAcceptRouteHandler,
  )
  .openapi(
    putAdminOauth2AuthRequestsLoginRejectRoute,
    putAdminOauth2AuthRequestsLoginRejectRouteHandler,
  )
  .openapi(getAdminOauth2AuthRequestsLogoutRoute, getAdminOauth2AuthRequestsLogoutRouteHandler)
  .openapi(
    putAdminOauth2AuthRequestsLogoutAcceptRoute,
    putAdminOauth2AuthRequestsLogoutAcceptRouteHandler,
  )
  .openapi(
    putAdminOauth2AuthRequestsLogoutRejectRoute,
    putAdminOauth2AuthRequestsLogoutRejectRouteHandler,
  )
  .openapi(
    deleteAdminOauth2AuthSessionsConsentRoute,
    deleteAdminOauth2AuthSessionsConsentRouteHandler,
  )
  .openapi(getAdminOauth2AuthSessionsConsentRoute, getAdminOauth2AuthSessionsConsentRouteHandler)
  .openapi(deleteAdminOauth2AuthSessionsLoginRoute, deleteAdminOauth2AuthSessionsLoginRouteHandler)
  .openapi(postAdminOauth2IntrospectRoute, postAdminOauth2IntrospectRouteHandler)
  .openapi(deleteAdminOauth2TokensRoute, deleteAdminOauth2TokensRouteHandler)
  .openapi(
    getAdminTrustGrantsJwtBearerIssuersRoute,
    getAdminTrustGrantsJwtBearerIssuersRouteHandler,
  )
  .openapi(
    postAdminTrustGrantsJwtBearerIssuersRoute,
    postAdminTrustGrantsJwtBearerIssuersRouteHandler,
  )
  .openapi(
    deleteAdminTrustGrantsJwtBearerIssuersIdRoute,
    deleteAdminTrustGrantsJwtBearerIssuersIdRouteHandler,
  )
  .openapi(
    getAdminTrustGrantsJwtBearerIssuersIdRoute,
    getAdminTrustGrantsJwtBearerIssuersIdRouteHandler,
  )
  .openapi(postCredentialsRoute, postCredentialsRouteHandler)
  .openapi(getHealthAliveRoute, getHealthAliveRouteHandler)
  .openapi(getHealthReadyRoute, getHealthReadyRouteHandler)
  .openapi(getOauth2AuthRoute, getOauth2AuthRouteHandler)
  .openapi(postOauth2DeviceAuthRoute, postOauth2DeviceAuthRouteHandler)
  .openapi(getOauth2DeviceVerifyRoute, getOauth2DeviceVerifyRouteHandler)
  .openapi(postOauth2RegisterRoute, postOauth2RegisterRouteHandler)
  .openapi(deleteOauth2RegisterIdRoute, deleteOauth2RegisterIdRouteHandler)
  .openapi(getOauth2RegisterIdRoute, getOauth2RegisterIdRouteHandler)
  .openapi(putOauth2RegisterIdRoute, putOauth2RegisterIdRouteHandler)
  .openapi(postOauth2RevokeRoute, postOauth2RevokeRouteHandler)
  .openapi(getOauth2SessionsLogoutRoute, getOauth2SessionsLogoutRouteHandler)
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(getUserinfoRoute, getUserinfoRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
