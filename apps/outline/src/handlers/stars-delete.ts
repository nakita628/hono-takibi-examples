import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsDeleteRoute } from '../routes'

export const postStarsDeleteRouteHandler: RouteHandler<typeof postStarsDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
