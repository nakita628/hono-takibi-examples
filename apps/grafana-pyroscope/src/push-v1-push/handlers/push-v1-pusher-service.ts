import type { RouteHandler } from '@hono/zod-openapi'
import type { postPushV1PusherServicePushRoute } from '../routes'

export const postPushV1PusherServicePushRouteHandler: RouteHandler<
  typeof postPushV1PusherServicePushRoute
> = async (c) => {
  throw new Error('Not implemented')
}
