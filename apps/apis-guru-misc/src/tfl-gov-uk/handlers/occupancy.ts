import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOccupancyBikePointsIdsRoute,
  getOccupancyCarParkIdRoute,
  getOccupancyCarParkRoute,
  getOccupancyChargeConnectorIdsRoute,
  getOccupancyChargeConnectorRoute,
} from '../routes'

export const getOccupancyBikePointsIdsRouteHandler: RouteHandler<
  typeof getOccupancyBikePointsIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupancyCarParkRouteHandler: RouteHandler<
  typeof getOccupancyCarParkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupancyCarParkIdRouteHandler: RouteHandler<
  typeof getOccupancyCarParkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupancyChargeConnectorRouteHandler: RouteHandler<
  typeof getOccupancyChargeConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupancyChargeConnectorIdsRouteHandler: RouteHandler<
  typeof getOccupancyChargeConnectorIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
