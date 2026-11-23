import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultConnectionsUnifiedApiServiceIdRoute,
  deleteVaultConsumersConsumerIdRoute,
  getVaultAuthorizeServiceIdApplicationIdRoute,
  getVaultCallbackRoute,
  getVaultConnectionsRoute,
  getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  getVaultConnectionsUnifiedApiServiceIdRoute,
  getVaultConsumersConsumerIdRoute,
  getVaultConsumersConsumerIdStatsRoute,
  getVaultConsumersRoute,
  getVaultLogsRoute,
  getVaultRevokeServiceIdApplicationIdRoute,
  patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  patchVaultConnectionsUnifiedApiServiceIdRoute,
  patchVaultConsumersConsumerIdRoute,
  postVaultConnectionsUnifiedApiServiceIdImportRoute,
  postVaultConnectionsUnifiedApiServiceIdRoute,
  postVaultConnectionsUnifiedApiServiceIdTokenRoute,
  postVaultConsumersRoute,
  postVaultSessionsRoute,
} from './routes'
import {
  deleteVaultConnectionsUnifiedApiServiceIdRouteHandler,
  deleteVaultConsumersConsumerIdRouteHandler,
  getVaultAuthorizeServiceIdApplicationIdRouteHandler,
  getVaultCallbackRouteHandler,
  getVaultConnectionsRouteHandler,
  getVaultConnectionsUnifiedApiServiceIdResourceConfigRouteHandler,
  getVaultConnectionsUnifiedApiServiceIdRouteHandler,
  getVaultConsumersConsumerIdRouteHandler,
  getVaultConsumersConsumerIdStatsRouteHandler,
  getVaultConsumersRouteHandler,
  getVaultLogsRouteHandler,
  getVaultRevokeServiceIdApplicationIdRouteHandler,
  patchVaultConnectionsUnifiedApiServiceIdResourceConfigRouteHandler,
  patchVaultConnectionsUnifiedApiServiceIdRouteHandler,
  patchVaultConsumersConsumerIdRouteHandler,
  postVaultConnectionsUnifiedApiServiceIdImportRouteHandler,
  postVaultConnectionsUnifiedApiServiceIdRouteHandler,
  postVaultConnectionsUnifiedApiServiceIdTokenRouteHandler,
  postVaultConsumersRouteHandler,
  postVaultSessionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getVaultAuthorizeServiceIdApplicationIdRoute,
    getVaultAuthorizeServiceIdApplicationIdRouteHandler,
  )
  .openapi(getVaultCallbackRoute, getVaultCallbackRouteHandler)
  .openapi(getVaultConnectionsRoute, getVaultConnectionsRouteHandler)
  .openapi(
    deleteVaultConnectionsUnifiedApiServiceIdRoute,
    deleteVaultConnectionsUnifiedApiServiceIdRouteHandler,
  )
  .openapi(
    getVaultConnectionsUnifiedApiServiceIdRoute,
    getVaultConnectionsUnifiedApiServiceIdRouteHandler,
  )
  .openapi(
    patchVaultConnectionsUnifiedApiServiceIdRoute,
    patchVaultConnectionsUnifiedApiServiceIdRouteHandler,
  )
  .openapi(
    postVaultConnectionsUnifiedApiServiceIdRoute,
    postVaultConnectionsUnifiedApiServiceIdRouteHandler,
  )
  .openapi(
    postVaultConnectionsUnifiedApiServiceIdImportRoute,
    postVaultConnectionsUnifiedApiServiceIdImportRouteHandler,
  )
  .openapi(
    postVaultConnectionsUnifiedApiServiceIdTokenRoute,
    postVaultConnectionsUnifiedApiServiceIdTokenRouteHandler,
  )
  .openapi(
    getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
    getVaultConnectionsUnifiedApiServiceIdResourceConfigRouteHandler,
  )
  .openapi(
    patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
    patchVaultConnectionsUnifiedApiServiceIdResourceConfigRouteHandler,
  )
  .openapi(getVaultConsumersRoute, getVaultConsumersRouteHandler)
  .openapi(postVaultConsumersRoute, postVaultConsumersRouteHandler)
  .openapi(deleteVaultConsumersConsumerIdRoute, deleteVaultConsumersConsumerIdRouteHandler)
  .openapi(getVaultConsumersConsumerIdRoute, getVaultConsumersConsumerIdRouteHandler)
  .openapi(patchVaultConsumersConsumerIdRoute, patchVaultConsumersConsumerIdRouteHandler)
  .openapi(getVaultConsumersConsumerIdStatsRoute, getVaultConsumersConsumerIdStatsRouteHandler)
  .openapi(getVaultLogsRoute, getVaultLogsRouteHandler)
  .openapi(
    getVaultRevokeServiceIdApplicationIdRoute,
    getVaultRevokeServiceIdApplicationIdRouteHandler,
  )
  .openapi(postVaultSessionsRoute, postVaultSessionsRouteHandler)

export default app
