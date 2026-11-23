import type { RouteHandler } from '@hono/zod-openapi'
import type { getPriceRoute } from '../routes'

export const getPriceRouteHandler: RouteHandler<typeof getPriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
