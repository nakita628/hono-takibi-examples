import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2betaNameRoute,
  getV2betaLabelsRoute,
  getV2betaLimitsLabelRoute,
  getV2betaNameRoute,
  getV2betaParentLocksRoute,
  getV2betaParentPermissionsRoute,
  patchV2betaParentPermissionsRoute,
  postV2betaLabelsRoute,
  postV2betaNameDeltaRoute,
  postV2betaNameDisableRoute,
  postV2betaNameEnableRoute,
  postV2betaNamePublishRoute,
  postV2betaNameUpdateLabelCopyModeRoute,
  postV2betaParentPermissionsBatchDeleteRoute,
  postV2betaParentPermissionsBatchUpdateRoute,
  postV2betaParentPermissionsRoute,
} from './routes'
import {
  deleteV2betaNameRouteHandler,
  getV2betaLabelsRouteHandler,
  getV2betaLimitsLabelRouteHandler,
  getV2betaNameRouteHandler,
  getV2betaParentLocksRouteHandler,
  getV2betaParentPermissionsRouteHandler,
  patchV2betaParentPermissionsRouteHandler,
  postV2betaLabelsRouteHandler,
  postV2betaNameDeltaRouteHandler,
  postV2betaNameDisableRouteHandler,
  postV2betaNameEnableRouteHandler,
  postV2betaNamePublishRouteHandler,
  postV2betaNameUpdateLabelCopyModeRouteHandler,
  postV2betaParentPermissionsBatchDeleteRouteHandler,
  postV2betaParentPermissionsBatchUpdateRouteHandler,
  postV2betaParentPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2betaLabelsRoute, getV2betaLabelsRouteHandler)
  .openapi(postV2betaLabelsRoute, postV2betaLabelsRouteHandler)
  .openapi(getV2betaLimitsLabelRoute, getV2betaLimitsLabelRouteHandler)
  .openapi(deleteV2betaNameRoute, deleteV2betaNameRouteHandler)
  .openapi(getV2betaNameRoute, getV2betaNameRouteHandler)
  .openapi(postV2betaNameDeltaRoute, postV2betaNameDeltaRouteHandler)
  .openapi(postV2betaNameDisableRoute, postV2betaNameDisableRouteHandler)
  .openapi(postV2betaNameEnableRoute, postV2betaNameEnableRouteHandler)
  .openapi(postV2betaNamePublishRoute, postV2betaNamePublishRouteHandler)
  .openapi(postV2betaNameUpdateLabelCopyModeRoute, postV2betaNameUpdateLabelCopyModeRouteHandler)
  .openapi(getV2betaParentLocksRoute, getV2betaParentLocksRouteHandler)
  .openapi(getV2betaParentPermissionsRoute, getV2betaParentPermissionsRouteHandler)
  .openapi(patchV2betaParentPermissionsRoute, patchV2betaParentPermissionsRouteHandler)
  .openapi(postV2betaParentPermissionsRoute, postV2betaParentPermissionsRouteHandler)
  .openapi(
    postV2betaParentPermissionsBatchDeleteRoute,
    postV2betaParentPermissionsBatchDeleteRouteHandler,
  )
  .openapi(
    postV2betaParentPermissionsBatchUpdateRoute,
    postV2betaParentPermissionsBatchUpdateRouteHandler,
  )

export default app
