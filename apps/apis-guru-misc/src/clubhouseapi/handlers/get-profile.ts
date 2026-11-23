import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetProfileRoute } from '../routes'

export const postGetProfileRouteHandler: RouteHandler<typeof postGetProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}
