import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateGroupQueryRoute } from '../routes'

export const postUpdateGroupQueryRouteHandler: RouteHandler<
  typeof postUpdateGroupQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
