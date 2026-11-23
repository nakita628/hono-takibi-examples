import type { RouteHandler } from '@hono/zod-openapi'
import type { postListresourcetypesRoute } from '../routes'

export const postListresourcetypesRouteHandler: RouteHandler<
  typeof postListresourcetypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
