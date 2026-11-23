import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBadWordsRoute,
  getBulkLookupRoute,
  getCountryRoute,
  getGeoIPRoute,
  getIPLookupRoute,
} from './routes'
import {
  getBadWordsRouteHandler,
  getBulkLookupRouteHandler,
  getCountryRouteHandler,
  getGeoIPRouteHandler,
  getIPLookupRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBulkLookupRoute, getBulkLookupRouteHandler)
  .openapi(getCountryRoute, getCountryRouteHandler)
  .openapi(getGeoIPRoute, getGeoIPRouteHandler)
  .openapi(getIPLookupRoute, getIPLookupRouteHandler)
  .openapi(getBadWordsRoute, getBadWordsRouteHandler)

export default app
