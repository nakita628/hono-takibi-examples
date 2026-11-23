import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultsVaultUuidItemsItemUuidRoute,
  getActivityRoute,
  getHealthRoute,
  getHeartbeatRoute,
  getMetricsRoute,
  getVaultsRoute,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute,
  getVaultsVaultUuidItemsItemUuidFilesRoute,
  getVaultsVaultUuidItemsItemUuidRoute,
  getVaultsVaultUuidItemsRoute,
  getVaultsVaultUuidRoute,
  patchVaultsVaultUuidItemsItemUuidRoute,
  postVaultsVaultUuidItemsRoute,
  putVaultsVaultUuidItemsItemUuidRoute,
} from './routes'
import {
  deleteVaultsVaultUuidItemsItemUuidRouteHandler,
  getActivityRouteHandler,
  getHealthRouteHandler,
  getHeartbeatRouteHandler,
  getMetricsRouteHandler,
  getVaultsRouteHandler,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRouteHandler,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidRouteHandler,
  getVaultsVaultUuidItemsItemUuidFilesRouteHandler,
  getVaultsVaultUuidItemsItemUuidRouteHandler,
  getVaultsVaultUuidItemsRouteHandler,
  getVaultsVaultUuidRouteHandler,
  patchVaultsVaultUuidItemsItemUuidRouteHandler,
  postVaultsVaultUuidItemsRouteHandler,
  putVaultsVaultUuidItemsItemUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActivityRoute, getActivityRouteHandler)
  .openapi(getVaultsRoute, getVaultsRouteHandler)
  .openapi(getVaultsVaultUuidRoute, getVaultsVaultUuidRouteHandler)
  .openapi(getVaultsVaultUuidItemsRoute, getVaultsVaultUuidItemsRouteHandler)
  .openapi(postVaultsVaultUuidItemsRoute, postVaultsVaultUuidItemsRouteHandler)
  .openapi(getVaultsVaultUuidItemsItemUuidRoute, getVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(putVaultsVaultUuidItemsItemUuidRoute, putVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(deleteVaultsVaultUuidItemsItemUuidRoute, deleteVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(patchVaultsVaultUuidItemsItemUuidRoute, patchVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(
    getVaultsVaultUuidItemsItemUuidFilesRoute,
    getVaultsVaultUuidItemsItemUuidFilesRouteHandler,
  )
  .openapi(
    getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute,
    getVaultsVaultUuidItemsItemUuidFilesFileUuidRouteHandler,
  )
  .openapi(
    getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute,
    getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRouteHandler,
  )
  .openapi(getHeartbeatRoute, getHeartbeatRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)

export default app
