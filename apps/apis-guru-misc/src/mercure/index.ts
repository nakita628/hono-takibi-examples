import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWellKnownMercureRoute,
  getWellKnownMercureSubscriptionsRoute,
  getWellKnownMercureSubscriptionsTopicRoute,
  getWellKnownMercureSubscriptionsTopicSubscriberRoute,
  postWellKnownMercureRoute,
} from './routes'
import {
  getWellKnownMercureRouteHandler,
  getWellKnownMercureSubscriptionsRouteHandler,
  getWellKnownMercureSubscriptionsTopicRouteHandler,
  getWellKnownMercureSubscriptionsTopicSubscriberRouteHandler,
  postWellKnownMercureRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWellKnownMercureRoute, getWellKnownMercureRouteHandler)
  .openapi(postWellKnownMercureRoute, postWellKnownMercureRouteHandler)
  .openapi(getWellKnownMercureSubscriptionsRoute, getWellKnownMercureSubscriptionsRouteHandler)
  .openapi(
    getWellKnownMercureSubscriptionsTopicRoute,
    getWellKnownMercureSubscriptionsTopicRouteHandler,
  )
  .openapi(
    getWellKnownMercureSubscriptionsTopicSubscriberRoute,
    getWellKnownMercureSubscriptionsTopicSubscriberRouteHandler,
  )

export default app
