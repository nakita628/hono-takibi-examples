import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateAbsoluteRoute } from '../routes'

export const postCalculateAbsoluteRouteHandler: RouteHandler<
  typeof postCalculateAbsoluteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
