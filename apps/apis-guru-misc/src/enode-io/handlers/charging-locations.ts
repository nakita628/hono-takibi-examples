import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChargingLocationsChargingLocationIdRoute,
  getChargingLocationsChargingLocationIdRoute,
  getChargingLocationsRoute,
  postChargingLocationsRoute,
  putChargingLocationsChargingLocationIdRoute,
} from '../routes'

export const getChargingLocationsRouteHandler: RouteHandler<
  typeof getChargingLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChargingLocationsRouteHandler: RouteHandler<
  typeof postChargingLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChargingLocationsChargingLocationIdRouteHandler: RouteHandler<
  typeof deleteChargingLocationsChargingLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChargingLocationsChargingLocationIdRouteHandler: RouteHandler<
  typeof getChargingLocationsChargingLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChargingLocationsChargingLocationIdRouteHandler: RouteHandler<
  typeof putChargingLocationsChargingLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
