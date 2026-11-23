import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductOptionValueAddJsonRoute } from '../routes'

export const postProductOptionValueAddJsonRouteHandler: RouteHandler<
  typeof postProductOptionValueAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
