import type { RouteHandler } from '@hono/zod-openapi'
import type { postRecipeJobsRoute, putRecipeJobsNameRoute } from '../routes'

export const postRecipeJobsRouteHandler: RouteHandler<typeof postRecipeJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRecipeJobsNameRouteHandler: RouteHandler<typeof putRecipeJobsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
