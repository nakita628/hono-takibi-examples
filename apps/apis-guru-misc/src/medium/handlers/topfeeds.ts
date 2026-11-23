import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopfeedsTagModeRoute } from '../routes'

export const getTopfeedsTagModeRouteHandler: RouteHandler<typeof getTopfeedsTagModeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
