import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrdersBatchRoute } from '../routes'

export const postOrdersBatchRouteHandler: RouteHandler<typeof postOrdersBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
