import type { RouteHandler } from '@hono/zod-openapi'
import type { getDataSourceKeywordsSourceRoute } from '../routes'

export const getDataSourceKeywordsSourceRouteHandler: RouteHandler<
  typeof getDataSourceKeywordsSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
