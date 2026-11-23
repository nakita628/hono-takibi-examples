import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateWorldTemplateRoute } from '../routes'

export const postCreateWorldTemplateRouteHandler: RouteHandler<
  typeof postCreateWorldTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
