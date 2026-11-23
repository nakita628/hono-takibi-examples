import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderTimeUpdatedRoute } from '../routes'

export const postOrderTimeUpdatedRouteHandler: RouteHandler<
  typeof postOrderTimeUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
