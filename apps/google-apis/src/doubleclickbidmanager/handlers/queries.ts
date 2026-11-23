import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueriesQueryIdReportsRoute, getQueriesRoute } from '../routes'

export const getQueriesRouteHandler: RouteHandler<typeof getQueriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueriesQueryIdReportsRouteHandler: RouteHandler<
  typeof getQueriesQueryIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
