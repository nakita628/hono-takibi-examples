import type { RouteHandler } from '@hono/zod-openapi'
import type { getContactSuggestionsRoute } from '../routes'

export const getContactSuggestionsRouteHandler: RouteHandler<
  typeof getContactSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
