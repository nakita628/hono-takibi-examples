import type { RouteHandler } from '@hono/zod-openapi'
import type { postListContainerRecipesRoute } from '../routes'

export const postListContainerRecipesRouteHandler: RouteHandler<
  typeof postListContainerRecipesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
