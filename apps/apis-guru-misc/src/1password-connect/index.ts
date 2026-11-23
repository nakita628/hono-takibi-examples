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
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getHeartbeatRoute, getHeartbeatRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getVaultsRoute, getVaultsRouteHandler)
  .openapi(getVaultsVaultUuidRoute, getVaultsVaultUuidRouteHandler)
  .openapi(getVaultsVaultUuidItemsRoute, getVaultsVaultUuidItemsRouteHandler)
  .openapi(postVaultsVaultUuidItemsRoute, postVaultsVaultUuidItemsRouteHandler)
  .openapi(deleteVaultsVaultUuidItemsItemUuidRoute, deleteVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(getVaultsVaultUuidItemsItemUuidRoute, getVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(patchVaultsVaultUuidItemsItemUuidRoute, patchVaultsVaultUuidItemsItemUuidRouteHandler)
  .openapi(putVaultsVaultUuidItemsItemUuidRoute, putVaultsVaultUuidItemsItemUuidRouteHandler)
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

export default app
