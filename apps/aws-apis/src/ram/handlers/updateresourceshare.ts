import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateresourceshareRoute } from '../routes'

export const postUpdateresourceshareRouteHandler: RouteHandler<
  typeof postUpdateresourceshareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
