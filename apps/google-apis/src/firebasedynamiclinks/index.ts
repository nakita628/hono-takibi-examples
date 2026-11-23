import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DynamicLinkLinkStatsRoute,
  postV1InstallAttributionRoute,
  postV1ManagedShortLinksCreateRoute,
  postV1ReopenAttributionRoute,
  postV1ShortLinksRoute,
} from './routes'
import {
  getV1DynamicLinkLinkStatsRouteHandler,
  postV1InstallAttributionRouteHandler,
  postV1ManagedShortLinksCreateRouteHandler,
  postV1ReopenAttributionRouteHandler,
  postV1ShortLinksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1InstallAttributionRoute, postV1InstallAttributionRouteHandler)
  .openapi(postV1ManagedShortLinksCreateRoute, postV1ManagedShortLinksCreateRouteHandler)
  .openapi(postV1ReopenAttributionRoute, postV1ReopenAttributionRouteHandler)
  .openapi(postV1ShortLinksRoute, postV1ShortLinksRouteHandler)
  .openapi(getV1DynamicLinkLinkStatsRoute, getV1DynamicLinkLinkStatsRouteHandler)

export default app
