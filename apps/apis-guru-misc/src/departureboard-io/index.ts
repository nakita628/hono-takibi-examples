import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetArrivalsAndDeparturesByCRSCRSRoute,
  getGetArrivalsByCRSCRSRoute,
  getGetDeparturesByCRSCRSRoute,
  getGetFastestDeparturesByCRSCRSRoute,
  getGetNextDeparturesByCRSCRSRoute,
  getGetServiceDetailsByIDServiceIDRoute,
} from './routes'
import {
  getGetArrivalsAndDeparturesByCRSCRSRouteHandler,
  getGetArrivalsByCRSCRSRouteHandler,
  getGetDeparturesByCRSCRSRouteHandler,
  getGetFastestDeparturesByCRSCRSRouteHandler,
  getGetNextDeparturesByCRSCRSRouteHandler,
  getGetServiceDetailsByIDServiceIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getGetArrivalsAndDeparturesByCRSCRSRoute,
    getGetArrivalsAndDeparturesByCRSCRSRouteHandler,
  )
  .openapi(getGetArrivalsByCRSCRSRoute, getGetArrivalsByCRSCRSRouteHandler)
  .openapi(getGetDeparturesByCRSCRSRoute, getGetDeparturesByCRSCRSRouteHandler)
  .openapi(getGetFastestDeparturesByCRSCRSRoute, getGetFastestDeparturesByCRSCRSRouteHandler)
  .openapi(getGetNextDeparturesByCRSCRSRoute, getGetNextDeparturesByCRSCRSRouteHandler)
  .openapi(getGetServiceDetailsByIDServiceIDRoute, getGetServiceDetailsByIDServiceIDRouteHandler)

export default app
