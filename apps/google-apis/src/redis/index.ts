import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameAuthStringRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentInstancesRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameExportRoute,
  postV1NameFailoverRoute,
  postV1NameImportRoute,
  postV1NameRescheduleMaintenanceRoute,
  postV1NameUpgradeRoute,
  postV1ParentInstancesRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameAuthStringRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentInstancesRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameExportRouteHandler,
  postV1NameFailoverRouteHandler,
  postV1NameImportRouteHandler,
  postV1NameRescheduleMaintenanceRouteHandler,
  postV1NameUpgradeRouteHandler,
  postV1ParentInstancesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameAuthStringRoute, getV1NameAuthStringRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameExportRoute, postV1NameExportRouteHandler)
  .openapi(postV1NameFailoverRoute, postV1NameFailoverRouteHandler)
  .openapi(postV1NameImportRoute, postV1NameImportRouteHandler)
  .openapi(postV1NameRescheduleMaintenanceRoute, postV1NameRescheduleMaintenanceRouteHandler)
  .openapi(postV1NameUpgradeRoute, postV1NameUpgradeRouteHandler)
  .openapi(getV1ParentInstancesRoute, getV1ParentInstancesRouteHandler)
  .openapi(postV1ParentInstancesRoute, postV1ParentInstancesRouteHandler)

export default app
