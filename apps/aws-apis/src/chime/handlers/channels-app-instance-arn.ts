import type { RouteHandler } from '@hono/zod-openapi'
import type { getChannelsAppInstanceArnRoute } from '../routes'

export const getChannelsAppInstanceArnRouteHandler: RouteHandler<
  typeof getChannelsAppInstanceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
