import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchMessagesRoute } from '../routes'

export const getSearchMessagesRouteHandler: RouteHandler<typeof getSearchMessagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
