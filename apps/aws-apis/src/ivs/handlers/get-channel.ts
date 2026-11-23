import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetChannelRoute } from '../routes'

export const postGetChannelRouteHandler: RouteHandler<typeof postGetChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}
