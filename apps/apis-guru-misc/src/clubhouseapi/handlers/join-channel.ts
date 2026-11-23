import type { RouteHandler } from '@hono/zod-openapi'
import type { postJoinChannelRoute } from '../routes'

export const postJoinChannelRouteHandler: RouteHandler<typeof postJoinChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}
