import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateChannelRoute } from '../routes'

export const postCreateChannelRouteHandler: RouteHandler<typeof postCreateChannelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
