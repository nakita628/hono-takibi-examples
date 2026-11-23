import type { RouteHandler } from '@hono/zod-openapi'
import type { getListPriceRoute } from '../routes'

export const getListPriceRouteHandler: RouteHandler<typeof getListPriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
