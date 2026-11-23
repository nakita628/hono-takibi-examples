import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetLoginProfileRoute, postActionGetLoginProfileRoute } from '../routes'

export const getActionGetLoginProfileRouteHandler: RouteHandler<
  typeof getActionGetLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetLoginProfileRouteHandler: RouteHandler<
  typeof postActionGetLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
