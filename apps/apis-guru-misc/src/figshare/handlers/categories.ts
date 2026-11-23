import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoriesRoute } from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
