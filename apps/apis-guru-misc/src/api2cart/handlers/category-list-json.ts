import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoryListJsonRoute } from '../routes'

export const getCategoryListJsonRouteHandler: RouteHandler<
  typeof getCategoryListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
