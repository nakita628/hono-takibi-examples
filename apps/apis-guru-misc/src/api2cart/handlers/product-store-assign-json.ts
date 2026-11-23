import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductStoreAssignJsonRoute } from '../routes'

export const postProductStoreAssignJsonRouteHandler: RouteHandler<
  typeof postProductStoreAssignJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
