import type { RouteHandler } from '@hono/zod-openapi'
import type { postPushSubscribeRoute, postPushUnsubscribeRoute } from '../routes'

export const postPushSubscribeRouteHandler: RouteHandler<typeof postPushSubscribeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPushUnsubscribeRouteHandler: RouteHandler<
  typeof postPushUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
