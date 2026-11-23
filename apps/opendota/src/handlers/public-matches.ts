import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicMatchesRoute } from '../routes'

export const getPublicMatchesRouteHandler: RouteHandler<typeof getPublicMatchesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
