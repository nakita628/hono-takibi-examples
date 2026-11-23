import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchCategoriesRoute, getSearchChannelsRoute } from '../routes'

export const getSearchCategoriesRouteHandler: RouteHandler<
  typeof getSearchCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchChannelsRouteHandler: RouteHandler<typeof getSearchChannelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
