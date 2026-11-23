import type { RouteHandler } from '@hono/zod-openapi'
import type { getOfferRoute } from '../routes'

export const getOfferRouteHandler: RouteHandler<typeof getOfferRoute> = async (c) => {
  throw new Error('Not implemented')
}
