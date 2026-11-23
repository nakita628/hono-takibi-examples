import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelSpotFleetRequestsRoute,
  postActionCancelSpotFleetRequestsRoute,
} from '../routes'

export const getActionCancelSpotFleetRequestsRouteHandler: RouteHandler<
  typeof getActionCancelSpotFleetRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelSpotFleetRequestsRouteHandler: RouteHandler<
  typeof postActionCancelSpotFleetRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
