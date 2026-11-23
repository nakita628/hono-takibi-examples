import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTokenBalanceRoute } from '../routes'

export const postGetTokenBalanceRouteHandler: RouteHandler<
  typeof postGetTokenBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
