import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountsRoute } from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}
