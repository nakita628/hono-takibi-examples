import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileOperationsInfoRoute } from '../routes'

export const postFileOperationsInfoRouteHandler: RouteHandler<
  typeof postFileOperationsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
