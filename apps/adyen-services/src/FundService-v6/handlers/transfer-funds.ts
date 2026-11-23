import type { RouteHandler } from '@hono/zod-openapi'
import type { postTransferFundsRoute } from '../routes'

export const postTransferFundsRouteHandler: RouteHandler<typeof postTransferFundsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
