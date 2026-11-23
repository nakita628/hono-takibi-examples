import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1NotesRoute,
  postV1NotesRoute,
  postV1ParentPermissionsBatchCreateRoute,
  postV1ParentPermissionsBatchDeleteRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1NotesRouteHandler,
  postV1NotesRouteHandler,
  postV1ParentPermissionsBatchCreateRouteHandler,
  postV1ParentPermissionsBatchDeleteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NotesRoute, getV1NotesRouteHandler)
  .openapi(postV1NotesRoute, postV1NotesRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1ParentPermissionsBatchCreateRoute, postV1ParentPermissionsBatchCreateRouteHandler)
  .openapi(postV1ParentPermissionsBatchDeleteRoute, postV1ParentPermissionsBatchDeleteRouteHandler)

export default app
