import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHelloRoute,
  getReadyRoute,
  getTykApisRoute,
  postTykApisRoute,
  deleteTykApisApiIDRoute,
  getTykApisApiIDRoute,
  putTykApisApiIDRoute,
  getTykApisApiIDVersionsRoute,
  getTykApisOasRoute,
  postTykApisOasRoute,
  deleteTykApisOasApiIDRoute,
  getTykApisOasApiIDRoute,
  patchTykApisOasApiIDRoute,
  putTykApisOasApiIDRoute,
  getTykApisOasApiIDExportRoute,
  getTykApisOasApiIDVersionsRoute,
  getTykApisOasExportRoute,
  postTykApisOasImportRoute,
  getTykMcpsRoute,
  postTykMcpsRoute,
  getTykMcpsApiIDRoute,
  putTykMcpsApiIDRoute,
  deleteTykMcpsApiIDRoute,
  deleteTykCacheApiIDRoute,
  deleteTykCacheJwksApiIDRoute,
  deleteTykCacheJwksRoute,
  getTykCertsRoute,
  postTykCertsRoute,
  deleteTykCertsCertIDRoute,
  getTykCertsCertIDRoute,
  postTykDebugRoute,
  getTykKeysRoute,
  postTykKeysRoute,
  deleteTykKeysKeyIDRoute,
  getTykKeysKeyIDRoute,
  postTykKeysKeyIDRoute,
  putTykKeysKeyIDRoute,
  postTykKeysCreateRoute,
  postTykKeysPolicyKeyIDRoute,
  postTykKeysPreviewRoute,
  getTykOauthClientsApiIDRoute,
  deleteTykOauthClientsApiIDKeyNameRoute,
  getTykOauthClientsApiIDKeyNameRoute,
  putTykOauthClientsApiIDKeyNameRoute,
  putTykOauthClientsApiIDKeyNameRotateRoute,
  getTykOauthClientsApiIDKeyNameTokensRoute,
  getTykOauthClientsApisAppIDRoute,
  postTykOauthClientsCreateRoute,
  deleteTykOauthRefreshKeyNameRoute,
  postTykOauthRevokeRoute,
  postTykOauthRevokeAllRoute,
  deleteTykOauthTokensRoute,
  getTykOrgKeysRoute,
  deleteTykOrgKeysKeyIDRoute,
  getTykOrgKeysKeyIDRoute,
  postTykOrgKeysKeyIDRoute,
  putTykOrgKeysKeyIDRoute,
  getTykPoliciesRoute,
  postTykPoliciesRoute,
  deleteTykPoliciesPolIDRoute,
  getTykPoliciesPolIDRoute,
  putTykPoliciesPolIDRoute,
  getTykReloadRoute,
  getTykReloadGroupRoute,
  postListenPathTykBatchRoute,
  getTykSchemaRoute,
} from './routes'
import {
  getHelloRouteHandler,
  getReadyRouteHandler,
  getTykApisRouteHandler,
  postTykApisRouteHandler,
  deleteTykApisApiIDRouteHandler,
  getTykApisApiIDRouteHandler,
  putTykApisApiIDRouteHandler,
  getTykApisApiIDVersionsRouteHandler,
  getTykApisOasRouteHandler,
  postTykApisOasRouteHandler,
  deleteTykApisOasApiIDRouteHandler,
  getTykApisOasApiIDRouteHandler,
  patchTykApisOasApiIDRouteHandler,
  putTykApisOasApiIDRouteHandler,
  getTykApisOasApiIDExportRouteHandler,
  getTykApisOasApiIDVersionsRouteHandler,
  getTykApisOasExportRouteHandler,
  postTykApisOasImportRouteHandler,
  getTykMcpsRouteHandler,
  postTykMcpsRouteHandler,
  getTykMcpsApiIDRouteHandler,
  putTykMcpsApiIDRouteHandler,
  deleteTykMcpsApiIDRouteHandler,
  deleteTykCacheApiIDRouteHandler,
  deleteTykCacheJwksApiIDRouteHandler,
  deleteTykCacheJwksRouteHandler,
  getTykCertsRouteHandler,
  postTykCertsRouteHandler,
  deleteTykCertsCertIDRouteHandler,
  getTykCertsCertIDRouteHandler,
  postTykDebugRouteHandler,
  getTykKeysRouteHandler,
  postTykKeysRouteHandler,
  deleteTykKeysKeyIDRouteHandler,
  getTykKeysKeyIDRouteHandler,
  postTykKeysKeyIDRouteHandler,
  putTykKeysKeyIDRouteHandler,
  postTykKeysCreateRouteHandler,
  postTykKeysPolicyKeyIDRouteHandler,
  postTykKeysPreviewRouteHandler,
  getTykOauthClientsApiIDRouteHandler,
  deleteTykOauthClientsApiIDKeyNameRouteHandler,
  getTykOauthClientsApiIDKeyNameRouteHandler,
  putTykOauthClientsApiIDKeyNameRouteHandler,
  putTykOauthClientsApiIDKeyNameRotateRouteHandler,
  getTykOauthClientsApiIDKeyNameTokensRouteHandler,
  getTykOauthClientsApisAppIDRouteHandler,
  postTykOauthClientsCreateRouteHandler,
  deleteTykOauthRefreshKeyNameRouteHandler,
  postTykOauthRevokeRouteHandler,
  postTykOauthRevokeAllRouteHandler,
  deleteTykOauthTokensRouteHandler,
  getTykOrgKeysRouteHandler,
  deleteTykOrgKeysKeyIDRouteHandler,
  getTykOrgKeysKeyIDRouteHandler,
  postTykOrgKeysKeyIDRouteHandler,
  putTykOrgKeysKeyIDRouteHandler,
  getTykPoliciesRouteHandler,
  postTykPoliciesRouteHandler,
  deleteTykPoliciesPolIDRouteHandler,
  getTykPoliciesPolIDRouteHandler,
  putTykPoliciesPolIDRouteHandler,
  getTykReloadRouteHandler,
  getTykReloadGroupRouteHandler,
  postListenPathTykBatchRouteHandler,
  getTykSchemaRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHelloRoute, getHelloRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getTykApisRoute, getTykApisRouteHandler)
  .openapi(postTykApisRoute, postTykApisRouteHandler)
  .openapi(deleteTykApisApiIDRoute, deleteTykApisApiIDRouteHandler)
  .openapi(getTykApisApiIDRoute, getTykApisApiIDRouteHandler)
  .openapi(putTykApisApiIDRoute, putTykApisApiIDRouteHandler)
  .openapi(getTykApisApiIDVersionsRoute, getTykApisApiIDVersionsRouteHandler)
  .openapi(getTykApisOasRoute, getTykApisOasRouteHandler)
  .openapi(postTykApisOasRoute, postTykApisOasRouteHandler)
  .openapi(deleteTykApisOasApiIDRoute, deleteTykApisOasApiIDRouteHandler)
  .openapi(getTykApisOasApiIDRoute, getTykApisOasApiIDRouteHandler)
  .openapi(patchTykApisOasApiIDRoute, patchTykApisOasApiIDRouteHandler)
  .openapi(putTykApisOasApiIDRoute, putTykApisOasApiIDRouteHandler)
  .openapi(getTykApisOasApiIDExportRoute, getTykApisOasApiIDExportRouteHandler)
  .openapi(getTykApisOasApiIDVersionsRoute, getTykApisOasApiIDVersionsRouteHandler)
  .openapi(getTykApisOasExportRoute, getTykApisOasExportRouteHandler)
  .openapi(postTykApisOasImportRoute, postTykApisOasImportRouteHandler)
  .openapi(getTykMcpsRoute, getTykMcpsRouteHandler)
  .openapi(postTykMcpsRoute, postTykMcpsRouteHandler)
  .openapi(getTykMcpsApiIDRoute, getTykMcpsApiIDRouteHandler)
  .openapi(putTykMcpsApiIDRoute, putTykMcpsApiIDRouteHandler)
  .openapi(deleteTykMcpsApiIDRoute, deleteTykMcpsApiIDRouteHandler)
  .openapi(deleteTykCacheApiIDRoute, deleteTykCacheApiIDRouteHandler)
  .openapi(deleteTykCacheJwksApiIDRoute, deleteTykCacheJwksApiIDRouteHandler)
  .openapi(deleteTykCacheJwksRoute, deleteTykCacheJwksRouteHandler)
  .openapi(getTykCertsRoute, getTykCertsRouteHandler)
  .openapi(postTykCertsRoute, postTykCertsRouteHandler)
  .openapi(deleteTykCertsCertIDRoute, deleteTykCertsCertIDRouteHandler)
  .openapi(getTykCertsCertIDRoute, getTykCertsCertIDRouteHandler)
  .openapi(postTykDebugRoute, postTykDebugRouteHandler)
  .openapi(getTykKeysRoute, getTykKeysRouteHandler)
  .openapi(postTykKeysRoute, postTykKeysRouteHandler)
  .openapi(deleteTykKeysKeyIDRoute, deleteTykKeysKeyIDRouteHandler)
  .openapi(getTykKeysKeyIDRoute, getTykKeysKeyIDRouteHandler)
  .openapi(postTykKeysKeyIDRoute, postTykKeysKeyIDRouteHandler)
  .openapi(putTykKeysKeyIDRoute, putTykKeysKeyIDRouteHandler)
  .openapi(postTykKeysCreateRoute, postTykKeysCreateRouteHandler)
  .openapi(postTykKeysPolicyKeyIDRoute, postTykKeysPolicyKeyIDRouteHandler)
  .openapi(postTykKeysPreviewRoute, postTykKeysPreviewRouteHandler)
  .openapi(getTykOauthClientsApiIDRoute, getTykOauthClientsApiIDRouteHandler)
  .openapi(deleteTykOauthClientsApiIDKeyNameRoute, deleteTykOauthClientsApiIDKeyNameRouteHandler)
  .openapi(getTykOauthClientsApiIDKeyNameRoute, getTykOauthClientsApiIDKeyNameRouteHandler)
  .openapi(putTykOauthClientsApiIDKeyNameRoute, putTykOauthClientsApiIDKeyNameRouteHandler)
  .openapi(
    putTykOauthClientsApiIDKeyNameRotateRoute,
    putTykOauthClientsApiIDKeyNameRotateRouteHandler,
  )
  .openapi(
    getTykOauthClientsApiIDKeyNameTokensRoute,
    getTykOauthClientsApiIDKeyNameTokensRouteHandler,
  )
  .openapi(getTykOauthClientsApisAppIDRoute, getTykOauthClientsApisAppIDRouteHandler)
  .openapi(postTykOauthClientsCreateRoute, postTykOauthClientsCreateRouteHandler)
  .openapi(deleteTykOauthRefreshKeyNameRoute, deleteTykOauthRefreshKeyNameRouteHandler)
  .openapi(postTykOauthRevokeRoute, postTykOauthRevokeRouteHandler)
  .openapi(postTykOauthRevokeAllRoute, postTykOauthRevokeAllRouteHandler)
  .openapi(deleteTykOauthTokensRoute, deleteTykOauthTokensRouteHandler)
  .openapi(getTykOrgKeysRoute, getTykOrgKeysRouteHandler)
  .openapi(deleteTykOrgKeysKeyIDRoute, deleteTykOrgKeysKeyIDRouteHandler)
  .openapi(getTykOrgKeysKeyIDRoute, getTykOrgKeysKeyIDRouteHandler)
  .openapi(postTykOrgKeysKeyIDRoute, postTykOrgKeysKeyIDRouteHandler)
  .openapi(putTykOrgKeysKeyIDRoute, putTykOrgKeysKeyIDRouteHandler)
  .openapi(getTykPoliciesRoute, getTykPoliciesRouteHandler)
  .openapi(postTykPoliciesRoute, postTykPoliciesRouteHandler)
  .openapi(deleteTykPoliciesPolIDRoute, deleteTykPoliciesPolIDRouteHandler)
  .openapi(getTykPoliciesPolIDRoute, getTykPoliciesPolIDRouteHandler)
  .openapi(putTykPoliciesPolIDRoute, putTykPoliciesPolIDRouteHandler)
  .openapi(getTykReloadRoute, getTykReloadRouteHandler)
  .openapi(getTykReloadGroupRoute, getTykReloadGroupRouteHandler)
  .openapi(postListenPathTykBatchRoute, postListenPathTykBatchRouteHandler)
  .openapi(getTykSchemaRoute, getTykSchemaRouteHandler)

export default app
