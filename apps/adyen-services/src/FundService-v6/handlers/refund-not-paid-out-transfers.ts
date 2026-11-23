import type { RouteHandler } from '@hono/zod-openapi'
import type { postRefundNotPaidOutTransfersRoute } from '../routes'

export const postRefundNotPaidOutTransfersRouteHandler: RouteHandler<
  typeof postRefundNotPaidOutTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
