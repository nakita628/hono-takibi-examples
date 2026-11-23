import type { RouteHandler } from '@hono/zod-openapi'
import type { postListApplicationsRoute } from '../routes'

export const postListApplicationsRouteHandler: RouteHandler<
  typeof postListApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
