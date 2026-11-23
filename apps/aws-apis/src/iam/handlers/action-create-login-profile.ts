import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateLoginProfileRoute, postActionCreateLoginProfileRoute } from '../routes'

export const getActionCreateLoginProfileRouteHandler: RouteHandler<
  typeof getActionCreateLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLoginProfileRouteHandler: RouteHandler<
  typeof postActionCreateLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
