import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSearchRoute,
  postAutocompleteRoute,
  postBulkRoute,
  postDeleteRoute,
  postInsertRoute,
  postPqTableSearchRoute,
  postReplaceRoute,
  postSqlRoute,
  postTokenRoute,
  postUpdateRoute,
  postTableUpdateIdRoute,
} from './routes'
import {
  postSearchRouteHandler,
  postAutocompleteRouteHandler,
  postBulkRouteHandler,
  postDeleteRouteHandler,
  postInsertRouteHandler,
  postPqTableSearchRouteHandler,
  postReplaceRouteHandler,
  postSqlRouteHandler,
  postTokenRouteHandler,
  postUpdateRouteHandler,
  postTableUpdateIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(postAutocompleteRoute, postAutocompleteRouteHandler)
  .openapi(postBulkRoute, postBulkRouteHandler)
  .openapi(postDeleteRoute, postDeleteRouteHandler)
  .openapi(postInsertRoute, postInsertRouteHandler)
  .openapi(postPqTableSearchRoute, postPqTableSearchRouteHandler)
  .openapi(postReplaceRoute, postReplaceRouteHandler)
  .openapi(postSqlRoute, postSqlRouteHandler)
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(postUpdateRoute, postUpdateRouteHandler)
  .openapi(postTableUpdateIdRoute, postTableUpdateIdRouteHandler)

export default app
