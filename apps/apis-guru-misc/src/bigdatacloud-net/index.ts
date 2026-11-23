import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataIpGeolocationFullRoute, getDataIpGeolocationWithConfidenceRoute } from './routes'
import {
  getDataIpGeolocationFullRouteHandler,
  getDataIpGeolocationWithConfidenceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDataIpGeolocationFullRoute, getDataIpGeolocationFullRouteHandler)
  .openapi(getDataIpGeolocationWithConfidenceRoute, getDataIpGeolocationWithConfidenceRouteHandler)

export default app
