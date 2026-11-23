import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetpasswordIndexRoute } from '../routes'

export const postSetpasswordIndexRouteHandler: RouteHandler<
  typeof postSetpasswordIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
