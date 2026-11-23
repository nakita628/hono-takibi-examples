import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthDeleteRoute } from '../routes'

export const postAuthDeleteRouteHandler: RouteHandler<typeof postAuthDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
