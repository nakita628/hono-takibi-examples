import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1PushTokenRoute,
  getApiV1BannersIdRoute,
  getApiV1BannersRoute,
  getApiV1PushGetRoute,
  getApiV1PushInfoRoute,
  postApiV1BannersDismissRoute,
  postApiV1PushTestRoute,
  postApiV1PushTokenRoute,
} from './routes'
import {
  deleteApiV1PushTokenRouteHandler,
  getApiV1BannersIdRouteHandler,
  getApiV1BannersRouteHandler,
  getApiV1PushGetRouteHandler,
  getApiV1PushInfoRouteHandler,
  postApiV1BannersDismissRouteHandler,
  postApiV1PushTestRouteHandler,
  postApiV1PushTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1BannersIdRoute, getApiV1BannersIdRouteHandler)
  .openapi(getApiV1BannersRoute, getApiV1BannersRouteHandler)
  .openapi(postApiV1BannersDismissRoute, postApiV1BannersDismissRouteHandler)
  .openapi(getApiV1PushGetRoute, getApiV1PushGetRouteHandler)
  .openapi(deleteApiV1PushTokenRoute, deleteApiV1PushTokenRouteHandler)
  .openapi(postApiV1PushTokenRoute, postApiV1PushTokenRouteHandler)
  .openapi(getApiV1PushInfoRoute, getApiV1PushInfoRouteHandler)
  .openapi(postApiV1PushTestRoute, postApiV1PushTestRouteHandler)

export default app
