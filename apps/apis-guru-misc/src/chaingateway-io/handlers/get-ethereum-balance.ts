import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetEthereumBalanceRoute } from '../routes'

export const postGetEthereumBalanceRouteHandler: RouteHandler<
  typeof postGetEthereumBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
