import type { RouteHandler } from '@hono/zod-openapi'
import type { postLeaveChannelRoute } from '../routes'

export const postLeaveChannelRouteHandler: RouteHandler<typeof postLeaveChannelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
