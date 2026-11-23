import type { RouteHandler } from '@hono/zod-openapi'
import type { getParsedMatchesRoute } from '../routes'

export const getParsedMatchesRouteHandler: RouteHandler<typeof getParsedMatchesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
