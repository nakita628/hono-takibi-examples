import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendVenueRoute } from '../routes'

export const postSendVenueRouteHandler: RouteHandler<typeof postSendVenueRoute> = async (c) => {
  throw new Error('Not implemented')
}
