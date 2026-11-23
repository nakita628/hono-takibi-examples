import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUrlMappings202609UrlMappingsIdRoute,
  getUrlMappings202609UrlMappingsIdRoute,
  getUrlMappings202609UrlMappingsRoute,
  postUrlMappings202609UrlMappingsRoute,
} from './routes'
import {
  deleteUrlMappings202609UrlMappingsIdRouteHandler,
  getUrlMappings202609UrlMappingsIdRouteHandler,
  getUrlMappings202609UrlMappingsRouteHandler,
  postUrlMappings202609UrlMappingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUrlMappings202609UrlMappingsRoute, getUrlMappings202609UrlMappingsRouteHandler)
  .openapi(postUrlMappings202609UrlMappingsRoute, postUrlMappings202609UrlMappingsRouteHandler)
  .openapi(getUrlMappings202609UrlMappingsIdRoute, getUrlMappings202609UrlMappingsIdRouteHandler)
  .openapi(
    deleteUrlMappings202609UrlMappingsIdRoute,
    deleteUrlMappings202609UrlMappingsIdRouteHandler,
  )

export default app
