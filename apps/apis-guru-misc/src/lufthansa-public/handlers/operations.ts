import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusFlightNumberDateRoute,
  getOperationsFlightstatusRouteOriginDestinationDateRoute,
  getOperationsSchedulesOriginDestinationFromDateTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsFlightstatusRouteOriginDestinationDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsFlightstatusFlightNumberDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsSchedulesOriginDestinationFromDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
