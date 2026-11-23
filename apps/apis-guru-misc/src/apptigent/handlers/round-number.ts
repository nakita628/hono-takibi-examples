import type { RouteHandler } from '@hono/zod-openapi'
import type { postRoundNumberRoute } from '../routes'

export const postRoundNumberRouteHandler: RouteHandler<typeof postRoundNumberRoute> = async (c) => {
  throw new Error('Not implemented')
}
