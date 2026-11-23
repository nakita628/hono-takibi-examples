import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteObjectsOnCancelRoute } from '../routes'

export const postDeleteObjectsOnCancelRouteHandler: RouteHandler<
  typeof postDeleteObjectsOnCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
