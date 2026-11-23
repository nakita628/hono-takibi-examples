import type { RouteHandler } from '@hono/zod-openapi'
import type { postCouponsRoute } from '../routes'

export const postCouponsRouteHandler: RouteHandler<typeof postCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}
