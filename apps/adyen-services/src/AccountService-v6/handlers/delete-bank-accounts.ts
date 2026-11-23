import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteBankAccountsRoute } from '../routes'

export const postDeleteBankAccountsRouteHandler: RouteHandler<
  typeof postDeleteBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
