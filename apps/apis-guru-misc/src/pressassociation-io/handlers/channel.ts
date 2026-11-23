import type { RouteHandler } from '@hono/zod-openapi'
import type { getChannelChannelIdRoute, getChannelRoute } from '../routes'

export const getChannelRouteHandler: RouteHandler<typeof getChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelChannelIdRouteHandler: RouteHandler<
  typeof getChannelChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
