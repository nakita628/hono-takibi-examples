import type { RouteHandler } from '@hono/zod-openapi'
import type { getPromotionsRoute } from '../routes'

export const getPromotionsRouteHandler: RouteHandler<typeof getPromotionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
