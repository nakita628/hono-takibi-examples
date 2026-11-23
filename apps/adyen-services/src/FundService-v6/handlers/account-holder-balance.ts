import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountHolderBalanceRoute } from '../routes'

export const postAccountHolderBalanceRouteHandler: RouteHandler<
  typeof postAccountHolderBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
