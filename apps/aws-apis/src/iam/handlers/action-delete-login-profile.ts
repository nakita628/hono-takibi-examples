import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteLoginProfileRoute, postActionDeleteLoginProfileRoute } from '../routes'

export const getActionDeleteLoginProfileRouteHandler: RouteHandler<
  typeof getActionDeleteLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLoginProfileRouteHandler: RouteHandler<
  typeof postActionDeleteLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
