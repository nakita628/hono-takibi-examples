import type { RouteHandler } from '@hono/zod-openapi'
import type { getMatchesMatchIdRoute } from '../routes'

export const getMatchesMatchIdRouteHandler: RouteHandler<typeof getMatchesMatchIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
