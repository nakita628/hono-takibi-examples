import type { RouteHandler } from '@hono/zod-openapi'
import type { getPropertiesAccountsRoute, getPropertiesUsersRoute } from '../routes'

export const getPropertiesAccountsRouteHandler: RouteHandler<
  typeof getPropertiesAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertiesUsersRouteHandler: RouteHandler<typeof getPropertiesUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
