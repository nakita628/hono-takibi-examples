import type { RouteHandler } from '@hono/zod-openapi'
import type { getAutocompleteSuggestionsRoute } from '../routes'

export const getAutocompleteSuggestionsRouteHandler: RouteHandler<
  typeof getAutocompleteSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
