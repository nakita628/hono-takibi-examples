import type { RouteHandler } from '@hono/zod-openapi'
import type { postTrimStringRoute } from '../routes'

export const postTrimStringRouteHandler: RouteHandler<typeof postTrimStringRoute> = async (c) => {
  throw new Error('Not implemented')
}
