import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductOptionAssignJsonRoute } from '../routes'

export const postProductOptionAssignJsonRouteHandler: RouteHandler<
  typeof postProductOptionAssignJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
