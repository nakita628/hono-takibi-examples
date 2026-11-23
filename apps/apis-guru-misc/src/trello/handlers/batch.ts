import type { RouteHandler } from '@hono/zod-openapi'
import type { getBatchRoute } from '../routes'

export const getBatchRouteHandler: RouteHandler<typeof getBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
