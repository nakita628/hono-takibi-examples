import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateListenerRoute, postActionCreateListenerRoute } from '../routes'

export const getActionCreateListenerRouteHandler: RouteHandler<
  typeof getActionCreateListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateListenerRouteHandler: RouteHandler<
  typeof postActionCreateListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
