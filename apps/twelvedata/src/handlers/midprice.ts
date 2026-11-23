import type { RouteHandler } from '@hono/zod-openapi'
import type { getMidpriceRoute } from '../routes'

export const getMidpriceRouteHandler: RouteHandler<typeof getMidpriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
