import type { RouteHandler } from '@hono/zod-openapi'
import type { getAbbreviationJsonRoute } from '../routes'

export const getAbbreviationJsonRouteHandler: RouteHandler<
  typeof getAbbreviationJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
