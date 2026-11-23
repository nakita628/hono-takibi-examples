import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteWorldTemplateRoute } from '../routes'

export const postDeleteWorldTemplateRouteHandler: RouteHandler<
  typeof postDeleteWorldTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
