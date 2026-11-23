import type { RouteHandler } from '@hono/zod-openapi'
import type { postOfferEventsRoute } from '../routes'

export const postOfferEventsRouteHandler: RouteHandler<typeof postOfferEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
