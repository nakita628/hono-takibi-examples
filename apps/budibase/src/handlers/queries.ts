import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueriesQueryIdRoute, postQueriesSearchRoute } from '../routes'

export const postQueriesQueryIdRouteHandler: RouteHandler<typeof postQueriesQueryIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQueriesSearchRouteHandler: RouteHandler<typeof postQueriesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
