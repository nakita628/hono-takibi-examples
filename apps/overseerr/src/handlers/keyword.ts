import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeywordKeywordIdRoute } from '../routes'

export const getKeywordKeywordIdRouteHandler: RouteHandler<
  typeof getKeywordKeywordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
