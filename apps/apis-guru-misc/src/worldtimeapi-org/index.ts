import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpIpv4Route,
  getIpIpv4TxtRoute,
  getIpRoute,
  getIpTxtRoute,
  getTimezoneAreaLocationRegionRoute,
  getTimezoneAreaLocationRegionTxtRoute,
  getTimezoneAreaLocationRoute,
  getTimezoneAreaLocationTxtRoute,
  getTimezoneAreaRoute,
  getTimezoneAreaTxtRoute,
  getTimezoneRoute,
  getTimezoneTxtRoute,
} from './routes'
import {
  getIpIpv4RouteHandler,
  getIpIpv4TxtRouteHandler,
  getIpRouteHandler,
  getIpTxtRouteHandler,
  getTimezoneAreaLocationRegionRouteHandler,
  getTimezoneAreaLocationRegionTxtRouteHandler,
  getTimezoneAreaLocationRouteHandler,
  getTimezoneAreaLocationTxtRouteHandler,
  getTimezoneAreaRouteHandler,
  getTimezoneAreaTxtRouteHandler,
  getTimezoneRouteHandler,
  getTimezoneTxtRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIpRoute, getIpRouteHandler)
  .openapi(getIpTxtRoute, getIpTxtRouteHandler)
  .openapi(getIpIpv4Route, getIpIpv4RouteHandler)
  .openapi(getIpIpv4TxtRoute, getIpIpv4TxtRouteHandler)
  .openapi(getTimezoneRoute, getTimezoneRouteHandler)
  .openapi(getTimezoneTxtRoute, getTimezoneTxtRouteHandler)
  .openapi(getTimezoneAreaRoute, getTimezoneAreaRouteHandler)
  .openapi(getTimezoneAreaTxtRoute, getTimezoneAreaTxtRouteHandler)
  .openapi(getTimezoneAreaLocationRoute, getTimezoneAreaLocationRouteHandler)
  .openapi(getTimezoneAreaLocationTxtRoute, getTimezoneAreaLocationTxtRouteHandler)
  .openapi(getTimezoneAreaLocationRegionRoute, getTimezoneAreaLocationRegionRouteHandler)
  .openapi(getTimezoneAreaLocationRegionTxtRoute, getTimezoneAreaLocationRegionTxtRouteHandler)

export default app
