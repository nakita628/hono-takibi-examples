import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueriesRoute, getQueriesSuggestionsRoute } from '../routes'

export const getQueriesRouteHandler: RouteHandler<typeof getQueriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueriesSuggestionsRouteHandler: RouteHandler<
  typeof getQueriesSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
