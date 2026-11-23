import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchRoute } from '../routes'

export const postSearchRouteHandler: RouteHandler<typeof postSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
