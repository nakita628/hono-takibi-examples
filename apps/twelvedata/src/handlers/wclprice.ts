import type { RouteHandler } from '@hono/zod-openapi'
import type { getWclpriceRoute } from '../routes'

export const getWclpriceRouteHandler: RouteHandler<typeof getWclpriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
