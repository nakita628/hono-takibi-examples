import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykApisApiIDRoute,
  deleteTykApisOasApiIDRoute,
  deleteTykCacheApiIDRoute,
  deleteTykCacheJwksApiIDRoute,
  deleteTykCacheJwksRoute,
  deleteTykCertsCertIDRoute,
  deleteTykKeysKeyIDRoute,
  deleteTykMcpsApiIDRoute,
  deleteTykOauthClientsApiIDKeyNameRoute,
  deleteTykOauthRefreshKeyNameRoute,
  deleteTykOauthTokensRoute,
  deleteTykOrgKeysKeyIDRoute,
  deleteTykPoliciesPolIDRoute,
  getHelloRoute,
  getReadyRoute,
  getTykApisApiIDRoute,
  getTykApisApiIDVersionsRoute,
  getTykApisOasApiIDExportRoute,
  getTykApisOasApiIDRoute,
  getTykApisOasApiIDVersionsRoute,
  getTykApisOasExportRoute,
  getTykApisOasRoute,
  getTykApisRoute,
  getTykCertsCertIDRoute,
  getTykCertsRoute,
  getTykKeysKeyIDRoute,
  getTykKeysRoute,
  getTykMcpsApiIDRoute,
  getTykMcpsRoute,
  getTykOauthClientsApiIDKeyNameRoute,
  getTykOauthClientsApiIDKeyNameTokensRoute,
  getTykOauthClientsApiIDRoute,
  getTykOauthClientsApisAppIDRoute,
  getTykOrgKeysKeyIDRoute,
  getTykOrgKeysRoute,
  getTykPoliciesPolIDRoute,
  getTykPoliciesRoute,
  getTykReloadGroupRoute,
  getTykReloadRoute,
  getTykSchemaRoute,
  patchTykApisOasApiIDRoute,
  postListenPathTykBatchRoute,
  postTykApisOasImportRoute,
  postTykApisOasRoute,
  postTykApisRoute,
  postTykCertsRoute,
  postTykDebugRoute,
  postTykKeysCreateRoute,
  postTykKeysKeyIDRoute,
  postTykKeysPolicyKeyIDRoute,
  postTykKeysPreviewRoute,
  postTykKeysRoute,
  postTykMcpsRoute,
  postTykOauthClientsCreateRoute,
  postTykOauthRevokeAllRoute,
  postTykOauthRevokeRoute,
  postTykOrgKeysKeyIDRoute,
  postTykPoliciesRoute,
  putTykApisApiIDRoute,
  putTykApisOasApiIDRoute,
  putTykKeysKeyIDRoute,
  putTykMcpsApiIDRoute,
  putTykOauthClientsApiIDKeyNameRotateRoute,
  putTykOauthClientsApiIDKeyNameRoute,
  putTykOrgKeysKeyIDRoute,
  putTykPoliciesPolIDRoute,
} from './routes'
import {
  deleteTykApisApiIDRouteHandler,
  deleteTykApisOasApiIDRouteHandler,
  deleteTykCacheApiIDRouteHandler,
  deleteTykCacheJwksApiIDRouteHandler,
  deleteTykCacheJwksRouteHandler,
  deleteTykCertsCertIDRouteHandler,
  deleteTykKeysKeyIDRouteHandler,
  deleteTykMcpsApiIDRouteHandler,
  deleteTykOauthClientsApiIDKeyNameRouteHandler,
  deleteTykOauthRefreshKeyNameRouteHandler,
  deleteTykOauthTokensRouteHandler,
  deleteTykOrgKeysKeyIDRouteHandler,
  deleteTykPoliciesPolIDRouteHandler,
  getHelloRouteHandler,
  getReadyRouteHandler,
  getTykApisApiIDRouteHandler,
  getTykApisApiIDVersionsRouteHandler,
  getTykApisOasApiIDExportRouteHandler,
  getTykApisOasApiIDRouteHandler,
  getTykApisOasApiIDVersionsRouteHandler,
  getTykApisOasExportRouteHandler,
  getTykApisOasRouteHandler,
  getTykApisRouteHandler,
  getTykCertsCertIDRouteHandler,
  getTykCertsRouteHandler,
  getTykKeysKeyIDRouteHandler,
  getTykKeysRouteHandler,
  getTykMcpsApiIDRouteHandler,
  getTykMcpsRouteHandler,
  getTykOauthClientsApiIDKeyNameRouteHandler,
  getTykOauthClientsApiIDKeyNameTokensRouteHandler,
  getTykOauthClientsApiIDRouteHandler,
  getTykOauthClientsApisAppIDRouteHandler,
  getTykOrgKeysKeyIDRouteHandler,
  getTykOrgKeysRouteHandler,
  getTykPoliciesPolIDRouteHandler,
  getTykPoliciesRouteHandler,
  getTykReloadGroupRouteHandler,
  getTykReloadRouteHandler,
  getTykSchemaRouteHandler,
  patchTykApisOasApiIDRouteHandler,
  postListenPathTykBatchRouteHandler,
  postTykApisOasImportRouteHandler,
  postTykApisOasRouteHandler,
  postTykApisRouteHandler,
  postTykCertsRouteHandler,
  postTykDebugRouteHandler,
  postTykKeysCreateRouteHandler,
  postTykKeysKeyIDRouteHandler,
  postTykKeysPolicyKeyIDRouteHandler,
  postTykKeysPreviewRouteHandler,
  postTykKeysRouteHandler,
  postTykMcpsRouteHandler,
  postTykOauthClientsCreateRouteHandler,
  postTykOauthRevokeAllRouteHandler,
  postTykOauthRevokeRouteHandler,
  postTykOrgKeysKeyIDRouteHandler,
  postTykPoliciesRouteHandler,
  putTykApisApiIDRouteHandler,
  putTykApisOasApiIDRouteHandler,
  putTykKeysKeyIDRouteHandler,
  putTykMcpsApiIDRouteHandler,
  putTykOauthClientsApiIDKeyNameRotateRouteHandler,
  putTykOauthClientsApiIDKeyNameRouteHandler,
  putTykOrgKeysKeyIDRouteHandler,
  putTykPoliciesPolIDRouteHandler,
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
