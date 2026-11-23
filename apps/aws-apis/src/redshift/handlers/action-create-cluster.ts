import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateClusterRoute, postActionCreateClusterRoute } from '../routes'

export const getActionCreateClusterRouteHandler: RouteHandler<
  typeof getActionCreateClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClusterRouteHandler: RouteHandler<
  typeof postActionCreateClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
