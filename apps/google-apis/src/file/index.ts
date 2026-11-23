import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentBackupsRoute,
  getV1ParentInstancesRoute,
  getV1ParentSnapshotsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRestoreRoute,
  postV1NameRevertRoute,
  postV1ParentBackupsRoute,
  postV1ParentInstancesRoute,
  postV1ParentSnapshotsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentBackupsRouteHandler,
  getV1ParentInstancesRouteHandler,
  getV1ParentSnapshotsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameRestoreRouteHandler,
  postV1NameRevertRouteHandler,
  postV1ParentBackupsRouteHandler,
  postV1ParentInstancesRouteHandler,
  postV1ParentSnapshotsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameRestoreRoute, postV1NameRestoreRouteHandler)
  .openapi(postV1NameRevertRoute, postV1NameRevertRouteHandler)
  .openapi(getV1ParentBackupsRoute, getV1ParentBackupsRouteHandler)
  .openapi(postV1ParentBackupsRoute, postV1ParentBackupsRouteHandler)
  .openapi(getV1ParentInstancesRoute, getV1ParentInstancesRouteHandler)
  .openapi(postV1ParentInstancesRoute, postV1ParentInstancesRouteHandler)
  .openapi(getV1ParentSnapshotsRoute, getV1ParentSnapshotsRouteHandler)
  .openapi(postV1ParentSnapshotsRoute, postV1ParentSnapshotsRouteHandler)

export default app
