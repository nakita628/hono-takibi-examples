import type { RouteHandler } from '@hono/zod-openapi'
import type { postSessionServerRoute } from '../routes'

export const postSessionServerRouteHandler: RouteHandler<typeof postSessionServerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
