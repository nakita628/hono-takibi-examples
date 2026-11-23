import type { RouteHandler } from '@hono/zod-openapi'
import type { getTyppriceRoute } from '../routes'

export const getTyppriceRouteHandler: RouteHandler<typeof getTyppriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
