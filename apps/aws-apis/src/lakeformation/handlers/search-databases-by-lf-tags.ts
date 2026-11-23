import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchDatabasesByLFTagsRoute } from '../routes'

export const postSearchDatabasesByLFTagsRouteHandler: RouteHandler<
  typeof postSearchDatabasesByLFTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
