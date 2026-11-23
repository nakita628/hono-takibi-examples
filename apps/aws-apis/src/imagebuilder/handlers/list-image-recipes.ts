import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImageRecipesRoute } from '../routes'

export const postListImageRecipesRouteHandler: RouteHandler<
  typeof postListImageRecipesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
