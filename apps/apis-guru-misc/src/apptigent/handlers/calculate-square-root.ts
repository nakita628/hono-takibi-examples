import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateSquareRootRoute } from '../routes'

export const postCalculateSquareRootRouteHandler: RouteHandler<
  typeof postCalculateSquareRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}
