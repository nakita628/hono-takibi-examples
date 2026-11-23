import type { RouteHandler } from '@hono/zod-openapi'
import type { postBalanceinquiryRoute } from '../routes'

export const postBalanceinquiryRouteHandler: RouteHandler<typeof postBalanceinquiryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
