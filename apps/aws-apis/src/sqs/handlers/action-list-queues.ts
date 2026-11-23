import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListQueuesRoute, postActionListQueuesRoute } from '../routes'

export const getActionListQueuesRouteHandler: RouteHandler<
  typeof getActionListQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListQueuesRouteHandler: RouteHandler<
  typeof postActionListQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
