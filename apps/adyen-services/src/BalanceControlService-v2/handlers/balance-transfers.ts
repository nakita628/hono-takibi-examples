import type { RouteHandler } from '@hono/zod-openapi'
import type { postBalanceTransfersRoute } from '../routes'

export const postBalanceTransfersRouteHandler: RouteHandler<
  typeof postBalanceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
