import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOffersLoungesLocationRoute,
  getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute,
} from '../routes'

export const getOffersLoungesLocationRouteHandler: RouteHandler<
  typeof getOffersLoungesLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRouteHandler: RouteHandler<
  typeof getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}
