import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductOptionValueAssignJsonRoute } from '../routes'

export const postProductOptionValueAssignJsonRouteHandler: RouteHandler<
  typeof postProductOptionValueAssignJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
