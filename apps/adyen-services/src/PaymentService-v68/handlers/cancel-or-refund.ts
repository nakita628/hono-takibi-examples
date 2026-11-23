import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelOrRefundRoute } from '../routes'

export const postCancelOrRefundRouteHandler: RouteHandler<typeof postCancelOrRefundRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
