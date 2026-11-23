import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductOptionAddJsonRoute } from '../routes'

export const postProductOptionAddJsonRouteHandler: RouteHandler<
  typeof postProductOptionAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
