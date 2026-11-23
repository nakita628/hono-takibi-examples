import type { RouteHandler } from '@hono/zod-openapi'
import type { postTransactionstatusRoute } from '../routes'

export const postTransactionstatusRouteHandler: RouteHandler<
  typeof postTransactionstatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
