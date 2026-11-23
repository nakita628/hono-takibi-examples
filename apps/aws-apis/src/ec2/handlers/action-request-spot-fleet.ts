import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRequestSpotFleetRoute, postActionRequestSpotFleetRoute } from '../routes'

export const getActionRequestSpotFleetRouteHandler: RouteHandler<
  typeof getActionRequestSpotFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRequestSpotFleetRouteHandler: RouteHandler<
  typeof postActionRequestSpotFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
