import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetGroupQueryRoute } from '../routes'

export const postGetGroupQueryRouteHandler: RouteHandler<typeof postGetGroupQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
