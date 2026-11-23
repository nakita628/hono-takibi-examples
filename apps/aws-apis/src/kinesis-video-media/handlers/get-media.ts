import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetMediaRoute } from '../routes'

export const postGetMediaRouteHandler: RouteHandler<typeof postGetMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}
