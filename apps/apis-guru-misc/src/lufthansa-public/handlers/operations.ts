import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute,
  getOperationsFlightstatusFlightNumberDateRoute,
  getOperationsFlightstatusRouteOriginDestinationDateRoute,
  getOperationsSchedulesOriginDestinationFromDateTimeRoute,
} from '../routes'

export const getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRouteHandler: RouteHandler<
  typeof getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRouteHandler: RouteHandler<
  typeof getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperationsFlightstatusRouteOriginDestinationDateRouteHandler: RouteHandler<
  typeof getOperationsFlightstatusRouteOriginDestinationDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperationsFlightstatusFlightNumberDateRouteHandler: RouteHandler<
  typeof getOperationsFlightstatusFlightNumberDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperationsSchedulesOriginDestinationFromDateTimeRouteHandler: RouteHandler<
  typeof getOperationsSchedulesOriginDestinationFromDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
