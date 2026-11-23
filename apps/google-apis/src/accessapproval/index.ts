import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentApprovalRequestsRoute,
  patchV1NameRoute,
  postV1NameApproveRoute,
  postV1NameDismissRoute,
  postV1NameInvalidateRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentApprovalRequestsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameApproveRouteHandler,
  postV1NameDismissRouteHandler,
  postV1NameInvalidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameApproveRoute, postV1NameApproveRouteHandler)
  .openapi(postV1NameDismissRoute, postV1NameDismissRouteHandler)
  .openapi(postV1NameInvalidateRoute, postV1NameInvalidateRouteHandler)
  .openapi(getV1ParentApprovalRequestsRoute, getV1ParentApprovalRequestsRouteHandler)

export default app
