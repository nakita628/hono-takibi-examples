import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelSpotInstanceRequestsRoute,
  postActionCancelSpotInstanceRequestsRoute,
} from '../routes'

export const getActionCancelSpotInstanceRequestsRouteHandler: RouteHandler<
  typeof getActionCancelSpotInstanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelSpotInstanceRequestsRouteHandler: RouteHandler<
  typeof postActionCancelSpotInstanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
