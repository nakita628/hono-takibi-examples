import type { RouteHandler } from '@hono/zod-openapi'
import type { postRefundRoute } from '../routes'

export const postRefundRouteHandler: RouteHandler<typeof postRefundRoute> = async (c) => {
  throw new Error('Not implemented')
}
