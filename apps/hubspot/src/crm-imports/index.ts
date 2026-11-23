import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmImports202609ImportIdErrorsRoute,
  getCrmImports202609ImportIdRoute,
  getCrmImports202609Route,
  postCrmImports202609ImportIdCancelRoute,
  postCrmImports202609Route,
} from './routes'
import {
  getCrmImports202609ImportIdErrorsRouteHandler,
  getCrmImports202609ImportIdRouteHandler,
  getCrmImports202609RouteHandler,
  postCrmImports202609ImportIdCancelRouteHandler,
  postCrmImports202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmImports202609Route, getCrmImports202609RouteHandler)
  .openapi(postCrmImports202609Route, postCrmImports202609RouteHandler)
  .openapi(getCrmImports202609ImportIdRoute, getCrmImports202609ImportIdRouteHandler)
  .openapi(postCrmImports202609ImportIdCancelRoute, postCrmImports202609ImportIdCancelRouteHandler)
  .openapi(getCrmImports202609ImportIdErrorsRoute, getCrmImports202609ImportIdErrorsRouteHandler)

export default app
