import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEnvironmentsRoute,
  getV1beta1ParentImageVersionsRoute,
  patchV1beta1NameRoute,
  postV1beta1EnvironmentCheckUpgradeRoute,
  postV1beta1EnvironmentLoadSnapshotRoute,
  postV1beta1EnvironmentSaveSnapshotRoute,
  postV1beta1NameRestartWebServerRoute,
  postV1beta1ParentEnvironmentsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentEnvironmentsRouteHandler,
  getV1beta1ParentImageVersionsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1EnvironmentCheckUpgradeRouteHandler,
  postV1beta1EnvironmentLoadSnapshotRouteHandler,
  postV1beta1EnvironmentSaveSnapshotRouteHandler,
  postV1beta1NameRestartWebServerRouteHandler,
  postV1beta1ParentEnvironmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1beta1EnvironmentCheckUpgradeRoute, postV1beta1EnvironmentCheckUpgradeRouteHandler)
  .openapi(postV1beta1EnvironmentLoadSnapshotRoute, postV1beta1EnvironmentLoadSnapshotRouteHandler)
  .openapi(postV1beta1EnvironmentSaveSnapshotRoute, postV1beta1EnvironmentSaveSnapshotRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameRestartWebServerRoute, postV1beta1NameRestartWebServerRouteHandler)
  .openapi(getV1beta1ParentEnvironmentsRoute, getV1beta1ParentEnvironmentsRouteHandler)
  .openapi(postV1beta1ParentEnvironmentsRoute, postV1beta1ParentEnvironmentsRouteHandler)
  .openapi(getV1beta1ParentImageVersionsRoute, getV1beta1ParentImageVersionsRouteHandler)

export default app
