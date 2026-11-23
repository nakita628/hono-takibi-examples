import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3UrlNotificationsMetadataRoute, postV3UrlNotificationsPublishRoute } from './routes'
import {
  getV3UrlNotificationsMetadataRouteHandler,
  postV3UrlNotificationsPublishRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV3UrlNotificationsMetadataRoute, getV3UrlNotificationsMetadataRouteHandler)
  .openapi(postV3UrlNotificationsPublishRoute, postV3UrlNotificationsPublishRouteHandler)

export default app
