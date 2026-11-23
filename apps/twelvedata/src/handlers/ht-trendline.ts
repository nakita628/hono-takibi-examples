import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtTrendlineRoute } from '../routes'

export const getHtTrendlineRouteHandler: RouteHandler<typeof getHtTrendlineRoute> = async (c) => {
  throw new Error('Not implemented')
}
