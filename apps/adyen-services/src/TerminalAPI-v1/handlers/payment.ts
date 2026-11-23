import type { RouteHandler } from '@hono/zod-openapi'
import type { postPaymentRoute } from '../routes'

export const postPaymentRouteHandler: RouteHandler<typeof postPaymentRoute> = async (c) => {
  throw new Error('Not implemented')
}
