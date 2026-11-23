import type { RouteHandler } from '@hono/zod-openapi'
import type { getClusteringDataPlanesRoute, getClusteringStatusRoute } from '../routes'

export const getClusteringDataPlanesRouteHandler: RouteHandler<
  typeof getClusteringDataPlanesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusteringStatusRouteHandler: RouteHandler<
  typeof getClusteringStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
