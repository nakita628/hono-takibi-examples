import type { RouteHandler } from '@hono/zod-openapi'
import type { getBusinessCurrentAccountsRoute, headBusinessCurrentAccountsRoute } from '../routes'

export const getBusinessCurrentAccountsRouteHandler: RouteHandler<
  typeof getBusinessCurrentAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headBusinessCurrentAccountsRouteHandler: RouteHandler<
  typeof headBusinessCurrentAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
