import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesRoute,
  getAliasesAllRoute,
  getAliasesRoute,
  getClicksRoute,
  postAliasesRoute,
  postClicksPgRoute,
  putAliasesRoute,
} from './routes'
import {
  deleteAliasesRouteHandler,
  getAliasesAllRouteHandler,
  getAliasesRouteHandler,
  getClicksRouteHandler,
  postAliasesRouteHandler,
  postClicksPgRouteHandler,
  putAliasesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAliasesRoute, deleteAliasesRouteHandler)
  .openapi(getAliasesRoute, getAliasesRouteHandler)
  .openapi(postAliasesRoute, postAliasesRouteHandler)
  .openapi(putAliasesRoute, putAliasesRouteHandler)
  .openapi(getAliasesAllRoute, getAliasesAllRouteHandler)
  .openapi(getClicksRoute, getClicksRouteHandler)
  .openapi(postClicksPgRoute, postClicksPgRouteHandler)

export default app
