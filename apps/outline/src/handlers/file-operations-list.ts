import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileOperationsListRoute } from '../routes'

export const postFileOperationsListRouteHandler: RouteHandler<
  typeof postFileOperationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
