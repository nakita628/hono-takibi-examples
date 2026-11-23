import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchSuggestionsRoute } from '../routes'

export const getSearchSuggestionsRouteHandler: RouteHandler<
  typeof getSearchSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
