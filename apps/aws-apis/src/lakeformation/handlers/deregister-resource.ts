import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeregisterResourceRoute } from '../routes'

export const postDeregisterResourceRouteHandler: RouteHandler<
  typeof postDeregisterResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
