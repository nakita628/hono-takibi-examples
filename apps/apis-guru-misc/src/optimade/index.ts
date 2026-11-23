import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInfoEntryRoute,
  getInfoRoute,
  getLinksRoute,
  getReferencesEntryIdRoute,
  getReferencesRoute,
  getStructuresEntryIdRoute,
  getStructuresRoute,
  getVersionsRoute,
} from './routes'
import {
  getInfoEntryRouteHandler,
  getInfoRouteHandler,
  getLinksRouteHandler,
  getReferencesEntryIdRouteHandler,
  getReferencesRouteHandler,
  getStructuresEntryIdRouteHandler,
  getStructuresRouteHandler,
  getVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getInfoEntryRoute, getInfoEntryRouteHandler)
  .openapi(getLinksRoute, getLinksRouteHandler)
  .openapi(getReferencesRoute, getReferencesRouteHandler)
  .openapi(getReferencesEntryIdRoute, getReferencesEntryIdRouteHandler)
  .openapi(getStructuresRoute, getStructuresRouteHandler)
  .openapi(getStructuresEntryIdRoute, getStructuresEntryIdRouteHandler)
  .openapi(getVersionsRoute, getVersionsRouteHandler)

export default app
