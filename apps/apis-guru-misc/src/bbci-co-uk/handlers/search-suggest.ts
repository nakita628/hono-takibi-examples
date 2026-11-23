import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchSuggestRoute } from '../routes'

export const getSearchSuggestRouteHandler: RouteHandler<typeof getSearchSuggestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
