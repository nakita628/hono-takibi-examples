import type { RouteHandler } from '@hono/zod-openapi'
import type { postPartialUpdateObjectsRoute } from '../routes'

export const postPartialUpdateObjectsRouteHandler: RouteHandler<
  typeof postPartialUpdateObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
