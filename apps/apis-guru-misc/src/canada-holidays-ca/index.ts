import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1HolidaysHolidayIdRoute,
  getApiV1HolidaysRoute,
  getApiV1ProvincesProvinceIdRoute,
  getApiV1ProvincesRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from './routes'
import {
  getApiV1HolidaysHolidayIdRouteHandler,
  getApiV1HolidaysRouteHandler,
  getApiV1ProvincesProvinceIdRouteHandler,
  getApiV1ProvincesRouteHandler,
  getApiV1RouteHandler,
  getApiV1SpecRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1Route, getApiV1RouteHandler)
  .openapi(getApiV1HolidaysRoute, getApiV1HolidaysRouteHandler)
  .openapi(getApiV1HolidaysHolidayIdRoute, getApiV1HolidaysHolidayIdRouteHandler)
  .openapi(getApiV1ProvincesRoute, getApiV1ProvincesRouteHandler)
  .openapi(getApiV1ProvincesProvinceIdRoute, getApiV1ProvincesProvinceIdRouteHandler)
  .openapi(getApiV1SpecRoute, getApiV1SpecRouteHandler)

export default app
