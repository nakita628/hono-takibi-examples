import type { RouteHandler } from '@hono/zod-openapi'
import type { getVwapRoute } from '../routes'

export const getVwapRouteHandler: RouteHandler<typeof getVwapRoute> = async (c) => {
  throw new Error('Not implemented')
}
