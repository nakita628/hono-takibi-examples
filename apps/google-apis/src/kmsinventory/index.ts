import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameProtectedResourcesSummaryRoute,
  getV1ParentCryptoKeysRoute,
  getV1ScopeProtectedResourcesSearchRoute,
} from './routes'
import {
  getV1NameProtectedResourcesSummaryRouteHandler,
  getV1ParentCryptoKeysRouteHandler,
  getV1ScopeProtectedResourcesSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameProtectedResourcesSummaryRoute, getV1NameProtectedResourcesSummaryRouteHandler)
  .openapi(getV1ParentCryptoKeysRoute, getV1ParentCryptoKeysRouteHandler)
  .openapi(getV1ScopeProtectedResourcesSearchRoute, getV1ScopeProtectedResourcesSearchRouteHandler)

export default app
