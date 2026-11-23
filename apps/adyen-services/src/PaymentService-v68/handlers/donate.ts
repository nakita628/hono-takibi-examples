import type { RouteHandler } from '@hono/zod-openapi'
import type { postDonateRoute } from '../routes'

export const postDonateRouteHandler: RouteHandler<typeof postDonateRoute> = async (c) => {
  throw new Error('Not implemented')
}
