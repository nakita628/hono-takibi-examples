import type { RouteHandler } from '@hono/zod-openapi'
import type { postTransferRoutesCalculateRoute } from '../routes'

export const postTransferRoutesCalculateRouteHandler: RouteHandler<
  typeof postTransferRoutesCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
