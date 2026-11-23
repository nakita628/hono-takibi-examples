import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteChannelRoute } from '../routes'

export const postDeleteChannelRouteHandler: RouteHandler<typeof postDeleteChannelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
