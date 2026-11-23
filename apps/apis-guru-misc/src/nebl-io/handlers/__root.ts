import type { RouteHandler } from '@hono/zod-openapi'
import type { postRoute } from '../routes'

export const postRouteHandler: RouteHandler<typeof postRoute> = async (c) => {
  throw new Error('Not implemented')
}
