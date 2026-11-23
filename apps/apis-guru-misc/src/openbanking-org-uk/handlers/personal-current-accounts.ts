import type { RouteHandler } from '@hono/zod-openapi'
import type { getPersonalCurrentAccountsRoute, headPersonalCurrentAccountsRoute } from '../routes'

export const getPersonalCurrentAccountsRouteHandler: RouteHandler<
  typeof getPersonalCurrentAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headPersonalCurrentAccountsRouteHandler: RouteHandler<
  typeof headPersonalCurrentAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
