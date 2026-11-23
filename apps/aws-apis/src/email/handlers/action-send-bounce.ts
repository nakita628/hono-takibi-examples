import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSendBounceRoute, postActionSendBounceRoute } from '../routes'

export const getActionSendBounceRouteHandler: RouteHandler<
  typeof getActionSendBounceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendBounceRouteHandler: RouteHandler<
  typeof postActionSendBounceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
