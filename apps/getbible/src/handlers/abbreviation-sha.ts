import type { RouteHandler } from '@hono/zod-openapi'
import type { getAbbreviationShaRoute } from '../routes'

export const getAbbreviationShaRouteHandler: RouteHandler<typeof getAbbreviationShaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
