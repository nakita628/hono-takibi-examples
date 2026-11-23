import type { RouteHandler } from '@hono/zod-openapi'
import type { getOffersRoute } from '../routes'

export const getOffersRouteHandler: RouteHandler<typeof getOffersRoute> = async (c) => {
  throw new Error('Not implemented')
}
