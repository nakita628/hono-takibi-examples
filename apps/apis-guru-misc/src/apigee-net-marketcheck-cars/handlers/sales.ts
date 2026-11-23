import type { RouteHandler } from '@hono/zod-openapi'
import type { getSalesCarRoute } from '../routes'

export const getSalesCarRouteHandler: RouteHandler<typeof getSalesCarRoute> = async (c) => {
  throw new Error('Not implemented')
}
