import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsUpdateRoute } from '../routes'

export const postStarsUpdateRouteHandler: RouteHandler<typeof postStarsUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
