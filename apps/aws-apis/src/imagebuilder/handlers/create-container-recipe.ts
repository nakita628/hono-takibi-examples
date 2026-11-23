import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateContainerRecipeRoute } from '../routes'

export const putCreateContainerRecipeRouteHandler: RouteHandler<
  typeof putCreateContainerRecipeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
