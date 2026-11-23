import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoryInfoJsonRoute } from '../routes'

export const getCategoryInfoJsonRouteHandler: RouteHandler<
  typeof getCategoryInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
