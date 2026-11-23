import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRequestSpotInstancesRoute,
  postActionRequestSpotInstancesRoute,
} from '../routes'

export const getActionRequestSpotInstancesRouteHandler: RouteHandler<
  typeof getActionRequestSpotInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRequestSpotInstancesRouteHandler: RouteHandler<
  typeof postActionRequestSpotInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
