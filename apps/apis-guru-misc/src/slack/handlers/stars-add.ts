import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsAddRoute } from '../routes'

export const postStarsAddRouteHandler: RouteHandler<typeof postStarsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}
