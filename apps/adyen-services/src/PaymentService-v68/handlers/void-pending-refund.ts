import type { RouteHandler } from '@hono/zod-openapi'
import type { postVoidPendingRefundRoute } from '../routes'

export const postVoidPendingRefundRouteHandler: RouteHandler<
  typeof postVoidPendingRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}
