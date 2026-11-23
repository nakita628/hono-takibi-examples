import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateStackSetRoute, postActionCreateStackSetRoute } from '../routes'

export const getActionCreateStackSetRouteHandler: RouteHandler<
  typeof getActionCreateStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateStackSetRouteHandler: RouteHandler<
  typeof postActionCreateStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
