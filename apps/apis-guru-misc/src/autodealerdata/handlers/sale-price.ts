import type { RouteHandler } from '@hono/zod-openapi'
import type { getSalePriceRoute } from '../routes'

export const getSalePriceRouteHandler: RouteHandler<typeof getSalePriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
