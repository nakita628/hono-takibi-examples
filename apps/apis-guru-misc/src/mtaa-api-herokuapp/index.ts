import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCountryRegionDistrictRoute,
  getCountryRegionDistrictWardRoute,
  getCountryRegionDistrictWardStreetRoute,
  getCountryRegionRoute,
  getCountryRoute,
} from './routes'
import {
  getCountryRegionDistrictRouteHandler,
  getCountryRegionDistrictWardRouteHandler,
  getCountryRegionDistrictWardStreetRouteHandler,
  getCountryRegionRouteHandler,
  getCountryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCountryRoute, getCountryRouteHandler)
  .openapi(getCountryRegionRoute, getCountryRegionRouteHandler)
  .openapi(getCountryRegionDistrictRoute, getCountryRegionDistrictRouteHandler)
  .openapi(getCountryRegionDistrictWardRoute, getCountryRegionDistrictWardRouteHandler)
  .openapi(getCountryRegionDistrictWardStreetRoute, getCountryRegionDistrictWardStreetRouteHandler)

export default app
