import type { RouteHandler } from '@hono/zod-openapi'
import type { getBinRoute } from '../routes'

export const getBinRouteHandler: RouteHandler<typeof getBinRoute> = async (c) => {
  throw new Error('Not implemented')
}
