import type { RouteHandler } from '@hono/zod-openapi'
import type { postForwardMessageRoute } from '../routes'

export const postForwardMessageRouteHandler: RouteHandler<typeof postForwardMessageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
