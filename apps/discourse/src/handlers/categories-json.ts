import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoriesJsonRoute, postCategoriesJsonRoute } from '../routes'

export const postCategoriesJsonRouteHandler: RouteHandler<typeof postCategoriesJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCategoriesJsonRouteHandler: RouteHandler<typeof getCategoriesJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
