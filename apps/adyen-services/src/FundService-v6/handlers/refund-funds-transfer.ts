import type { RouteHandler } from '@hono/zod-openapi'
import type { postRefundFundsTransferRoute } from '../routes'

export const postRefundFundsTransferRouteHandler: RouteHandler<
  typeof postRefundFundsTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
