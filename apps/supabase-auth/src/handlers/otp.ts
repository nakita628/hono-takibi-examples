import type { RouteHandler } from '@hono/zod-openapi'
import type { postOtpRoute } from '../routes'

export const postOtpRouteHandler: RouteHandler<typeof postOtpRoute> = async (c) => {
  throw new Error('Not implemented')
}
