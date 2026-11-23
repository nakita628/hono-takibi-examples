import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameLocationsRoute,
  getV1beta2NameOperationsRoute,
  getV1beta2NameRoute,
  getV1beta2ParentInstancesRoute,
  patchV1beta2NameRoute,
  patchV1beta2NameUpdateParametersRoute,
  postV1beta2InstanceApplySoftwareUpdateRoute,
  postV1beta2InstanceRescheduleMaintenanceRoute,
  postV1beta2NameApplyParametersRoute,
  postV1beta2NameCancelRoute,
  postV1beta2ParentInstancesRoute,
} from './routes'
import {
  deleteV1beta2NameRouteHandler,
  getV1beta2NameLocationsRouteHandler,
  getV1beta2NameOperationsRouteHandler,
  getV1beta2NameRouteHandler,
  getV1beta2ParentInstancesRouteHandler,
  patchV1beta2NameRouteHandler,
  patchV1beta2NameUpdateParametersRouteHandler,
  postV1beta2InstanceApplySoftwareUpdateRouteHandler,
  postV1beta2InstanceRescheduleMaintenanceRouteHandler,
  postV1beta2NameApplyParametersRouteHandler,
  postV1beta2NameCancelRouteHandler,
  postV1beta2ParentInstancesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta2InstanceApplySoftwareUpdateRoute,
    postV1beta2InstanceApplySoftwareUpdateRouteHandler,
  )
  .openapi(
    postV1beta2InstanceRescheduleMaintenanceRoute,
    postV1beta2InstanceRescheduleMaintenanceRouteHandler,
  )
  .openapi(deleteV1beta2NameRoute, deleteV1beta2NameRouteHandler)
  .openapi(getV1beta2NameRoute, getV1beta2NameRouteHandler)
  .openapi(patchV1beta2NameRoute, patchV1beta2NameRouteHandler)
  .openapi(getV1beta2NameLocationsRoute, getV1beta2NameLocationsRouteHandler)
  .openapi(getV1beta2NameOperationsRoute, getV1beta2NameOperationsRouteHandler)
  .openapi(postV1beta2NameApplyParametersRoute, postV1beta2NameApplyParametersRouteHandler)
  .openapi(postV1beta2NameCancelRoute, postV1beta2NameCancelRouteHandler)
  .openapi(patchV1beta2NameUpdateParametersRoute, patchV1beta2NameUpdateParametersRouteHandler)
  .openapi(getV1beta2ParentInstancesRoute, getV1beta2ParentInstancesRouteHandler)
  .openapi(postV1beta2ParentInstancesRoute, postV1beta2ParentInstancesRouteHandler)

export default app
