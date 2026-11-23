import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestV1FeedRoute,
  getRestV1FeedTodayRoute,
  getRestV1NeoAsteroidIdRoute,
  getRestV1NeoBrowseRoute,
  getRestV1NeoSentryAsteroidIdRoute,
  getRestV1NeoSentryRoute,
  getRestV1StatsRoute,
} from './routes'
import {
  getRestV1FeedRouteHandler,
  getRestV1FeedTodayRouteHandler,
  getRestV1NeoAsteroidIdRouteHandler,
  getRestV1NeoBrowseRouteHandler,
  getRestV1NeoSentryAsteroidIdRouteHandler,
  getRestV1NeoSentryRouteHandler,
  getRestV1StatsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRestV1FeedRoute, getRestV1FeedRouteHandler)
  .openapi(getRestV1FeedTodayRoute, getRestV1FeedTodayRouteHandler)
  .openapi(getRestV1NeoBrowseRoute, getRestV1NeoBrowseRouteHandler)
  .openapi(getRestV1NeoSentryRoute, getRestV1NeoSentryRouteHandler)
  .openapi(getRestV1NeoSentryAsteroidIdRoute, getRestV1NeoSentryAsteroidIdRouteHandler)
  .openapi(getRestV1NeoAsteroidIdRoute, getRestV1NeoAsteroidIdRouteHandler)
  .openapi(getRestV1StatsRoute, getRestV1StatsRouteHandler)

export default app
