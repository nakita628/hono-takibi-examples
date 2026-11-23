import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateChannelRoute } from '../routes'

export const postUpdateChannelRouteHandler: RouteHandler<typeof postUpdateChannelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
