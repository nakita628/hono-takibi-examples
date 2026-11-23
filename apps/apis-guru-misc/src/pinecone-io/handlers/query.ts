import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryRoute } from '../routes'

export const postQueryRouteHandler: RouteHandler<typeof postQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
