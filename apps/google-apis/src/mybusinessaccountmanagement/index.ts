import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AccountsRoute,
  getV1NameRoute,
  getV1ParentAdminsRoute,
  getV1ParentInvitationsRoute,
  patchV1NameRoute,
  postV1AccountsRoute,
  postV1NameAcceptRoute,
  postV1NameDeclineRoute,
  postV1NameTransferRoute,
  postV1ParentAdminsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1AccountsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAdminsRouteHandler,
  getV1ParentInvitationsRouteHandler,
  patchV1NameRouteHandler,
  postV1AccountsRouteHandler,
  postV1NameAcceptRouteHandler,
  postV1NameDeclineRouteHandler,
  postV1NameTransferRouteHandler,
  postV1ParentAdminsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AccountsRoute, getV1AccountsRouteHandler)
  .openapi(postV1AccountsRoute, postV1AccountsRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameAcceptRoute, postV1NameAcceptRouteHandler)
  .openapi(postV1NameDeclineRoute, postV1NameDeclineRouteHandler)
  .openapi(postV1NameTransferRoute, postV1NameTransferRouteHandler)
  .openapi(getV1ParentAdminsRoute, getV1ParentAdminsRouteHandler)
  .openapi(postV1ParentAdminsRoute, postV1ParentAdminsRouteHandler)
  .openapi(getV1ParentInvitationsRoute, getV1ParentInvitationsRouteHandler)

export default app
