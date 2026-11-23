import type { RouteHandler } from '@hono/zod-openapi'
import type { getV3AccountsIcanTransactionsRoute } from '../routes'

export const getV3AccountsIcanTransactionsRouteHandler: RouteHandler<
  typeof getV3AccountsIcanTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
