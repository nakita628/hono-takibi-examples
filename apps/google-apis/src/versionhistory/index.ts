import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ParentChannelsRoute,
  getV1ParentPlatformsRoute,
  getV1ParentReleasesRoute,
  getV1ParentVersionsRoute,
} from './routes'
import {
  getV1ParentChannelsRouteHandler,
  getV1ParentPlatformsRouteHandler,
  getV1ParentReleasesRouteHandler,
  getV1ParentVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ParentChannelsRoute, getV1ParentChannelsRouteHandler)
  .openapi(getV1ParentPlatformsRoute, getV1ParentPlatformsRouteHandler)
  .openapi(getV1ParentReleasesRoute, getV1ParentReleasesRouteHandler)
  .openapi(getV1ParentVersionsRoute, getV1ParentVersionsRouteHandler)

export default app
