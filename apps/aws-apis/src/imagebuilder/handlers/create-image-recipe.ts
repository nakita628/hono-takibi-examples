import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateImageRecipeRoute } from '../routes'

export const putCreateImageRecipeRouteHandler: RouteHandler<
  typeof putCreateImageRecipeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
