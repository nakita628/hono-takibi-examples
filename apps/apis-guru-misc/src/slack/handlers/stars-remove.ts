import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsRemoveRoute } from '../routes'

export const postStarsRemoveRouteHandler: RouteHandler<typeof postStarsRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}
