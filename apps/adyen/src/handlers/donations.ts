import type { RouteHandler } from '@hono/zod-openapi'
import type { postDonationsRoute } from '../routes'

export const postDonationsRouteHandler: RouteHandler<typeof postDonationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
