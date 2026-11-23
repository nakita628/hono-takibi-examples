import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicHistoryRoute } from '../routes'

export const getPublicHistoryRouteHandler: RouteHandler<typeof getPublicHistoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
