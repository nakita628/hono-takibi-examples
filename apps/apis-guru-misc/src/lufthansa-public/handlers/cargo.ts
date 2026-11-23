import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCargoGetRouteOriginDestinationFromDateProductCodeRoute,
  getCargoShipmentTrackingAWBPrefixAWBNumberRoute,
} from '../routes'

export const getCargoGetRouteOriginDestinationFromDateProductCodeRouteHandler: RouteHandler<
  typeof getCargoGetRouteOriginDestinationFromDateProductCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCargoShipmentTrackingAWBPrefixAWBNumberRouteHandler: RouteHandler<
  typeof getCargoShipmentTrackingAWBPrefixAWBNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
