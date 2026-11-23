import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoriesIdRoute, getCategoriesRoute } from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesIdRouteHandler: RouteHandler<typeof getCategoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
