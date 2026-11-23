import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateProjectIdRoute } from '../routes'

export const postUpdateProjectIdRouteHandler: RouteHandler<
  typeof postUpdateProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
