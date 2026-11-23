import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentRowsRoute,
  getV1alpha1TablesRoute,
  getV1alpha1WorkspacesRoute,
  patchV1alpha1NameRoute,
  postV1alpha1ParentRowsBatchCreateRoute,
  postV1alpha1ParentRowsBatchDeleteRoute,
  postV1alpha1ParentRowsBatchUpdateRoute,
  postV1alpha1ParentRowsRoute,
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentRowsRouteHandler,
  getV1alpha1TablesRouteHandler,
  getV1alpha1WorkspacesRouteHandler,
  patchV1alpha1NameRouteHandler,
  postV1alpha1ParentRowsBatchCreateRouteHandler,
  postV1alpha1ParentRowsBatchDeleteRouteHandler,
  postV1alpha1ParentRowsBatchUpdateRouteHandler,
  postV1alpha1ParentRowsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1alpha1TablesRoute, getV1alpha1TablesRouteHandler)
  .openapi(getV1alpha1WorkspacesRoute, getV1alpha1WorkspacesRouteHandler)
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(getV1alpha1ParentRowsRoute, getV1alpha1ParentRowsRouteHandler)
  .openapi(postV1alpha1ParentRowsRoute, postV1alpha1ParentRowsRouteHandler)
  .openapi(postV1alpha1ParentRowsBatchCreateRoute, postV1alpha1ParentRowsBatchCreateRouteHandler)
  .openapi(postV1alpha1ParentRowsBatchDeleteRoute, postV1alpha1ParentRowsBatchDeleteRouteHandler)
  .openapi(postV1alpha1ParentRowsBatchUpdateRoute, postV1alpha1ParentRowsBatchUpdateRouteHandler)

export default app
