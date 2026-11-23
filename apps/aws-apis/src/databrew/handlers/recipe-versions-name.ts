import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecipeVersionsNameRoute } from '../routes'

export const getRecipeVersionsNameRouteHandler: RouteHandler<
  typeof getRecipeVersionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
