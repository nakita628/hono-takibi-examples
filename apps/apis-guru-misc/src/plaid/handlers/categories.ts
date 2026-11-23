import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategoriesGetRoute } from '../routes'

export const postCategoriesGetRouteHandler: RouteHandler<typeof postCategoriesGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
