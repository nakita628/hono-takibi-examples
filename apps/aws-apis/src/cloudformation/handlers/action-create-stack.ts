import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateStackRoute, postActionCreateStackRoute } from '../routes'

export const getActionCreateStackRouteHandler: RouteHandler<
  typeof getActionCreateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateStackRouteHandler: RouteHandler<
  typeof postActionCreateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
