import type { RouteHandler } from '@hono/zod-openapi'
import type { postPayoutRoute } from '../routes'

export const postPayoutRouteHandler: RouteHandler<typeof postPayoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
