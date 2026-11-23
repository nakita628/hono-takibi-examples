import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsListRoute } from '../routes'

export const postStarsListRouteHandler: RouteHandler<typeof postStarsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
