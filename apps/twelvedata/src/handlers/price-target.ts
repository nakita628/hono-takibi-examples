import type { RouteHandler } from '@hono/zod-openapi'
import type { getPriceTargetRoute } from '../routes'

export const getPriceTargetRouteHandler: RouteHandler<typeof getPriceTargetRoute> = async (c) => {
  throw new Error('Not implemented')
}
