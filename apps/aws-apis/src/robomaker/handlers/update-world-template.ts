import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateWorldTemplateRoute } from '../routes'

export const postUpdateWorldTemplateRouteHandler: RouteHandler<
  typeof postUpdateWorldTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
