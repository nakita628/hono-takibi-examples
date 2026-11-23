import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCountryAllRoute,
  getCountryCodeRoute,
  getCountryRoute,
  getHelpCountriesRoute,
  getReportCountryAllRoute,
  getReportCountryCodeRoute,
  getReportCountryNameRoute,
  getReportTotalsRoute,
  getTotalsRoute,
} from './routes'
import {
  getCountryAllRouteHandler,
  getCountryCodeRouteHandler,
  getCountryRouteHandler,
  getHelpCountriesRouteHandler,
  getReportCountryAllRouteHandler,
  getReportCountryCodeRouteHandler,
  getReportCountryNameRouteHandler,
  getReportTotalsRouteHandler,
  getTotalsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCountryRoute, getCountryRouteHandler)
  .openapi(getCountryAllRoute, getCountryAllRouteHandler)
  .openapi(getCountryCodeRoute, getCountryCodeRouteHandler)
  .openapi(getHelpCountriesRoute, getHelpCountriesRouteHandler)
  .openapi(getReportCountryAllRoute, getReportCountryAllRouteHandler)
  .openapi(getReportCountryCodeRoute, getReportCountryCodeRouteHandler)
  .openapi(getReportCountryNameRoute, getReportCountryNameRouteHandler)
  .openapi(getReportTotalsRoute, getReportTotalsRouteHandler)
  .openapi(getTotalsRoute, getTotalsRouteHandler)

export default app
