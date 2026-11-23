import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesRoute,
  getLocationsRoute,
  getOsBrowsersRoute,
  getProfilesRoute,
  getResolutionsRoute,
  getTestIdRoute,
  getTestIdZipRoute,
  postRoute,
  putStopTestIdRoute,
} from './routes'
import {
  getDevicesRouteHandler,
  getLocationsRouteHandler,
  getOsBrowsersRouteHandler,
  getProfilesRouteHandler,
  getResolutionsRouteHandler,
  getTestIdRouteHandler,
  getTestIdZipRouteHandler,
  postRouteHandler,
  putStopTestIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRoute, postRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(getLocationsRoute, getLocationsRouteHandler)
  .openapi(getOsBrowsersRoute, getOsBrowsersRouteHandler)
  .openapi(getProfilesRoute, getProfilesRouteHandler)
  .openapi(getResolutionsRoute, getResolutionsRouteHandler)
  .openapi(putStopTestIdRoute, putStopTestIdRouteHandler)
  .openapi(getTestIdRoute, getTestIdRouteHandler)
  .openapi(getTestIdZipRoute, getTestIdZipRouteHandler)

export default app
