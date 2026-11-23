import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsOauth2AuthorizeRoute,
  postIndexPhpAppsOauth2ApiV1TokenRoute,
} from './routes'
import {
  getIndexPhpAppsOauth2AuthorizeRouteHandler,
  postIndexPhpAppsOauth2ApiV1TokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIndexPhpAppsOauth2AuthorizeRoute, getIndexPhpAppsOauth2AuthorizeRouteHandler)
  .openapi(postIndexPhpAppsOauth2ApiV1TokenRoute, postIndexPhpAppsOauth2ApiV1TokenRouteHandler)

export default app
