import type { RouteHandler } from '@hono/zod-openapi'
import type { postGuestRoute } from '../routes'

export const postGuestRouteHandler: RouteHandler<typeof postGuestRoute> = async (c) => {
  throw new Error('Not implemented')
}
