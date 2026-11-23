import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileOperationsDeleteRoute } from '../routes'

export const postFileOperationsDeleteRouteHandler: RouteHandler<
  typeof postFileOperationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
