import type { RouteHandler } from '@hono/zod-openapi'
import type { getSegmentsAccountsRoute, getSegmentsUsersRoute } from '../routes'

export const getSegmentsAccountsRouteHandler: RouteHandler<
  typeof getSegmentsAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSegmentsUsersRouteHandler: RouteHandler<typeof getSegmentsUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
