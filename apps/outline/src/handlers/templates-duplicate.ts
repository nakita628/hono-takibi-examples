import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesDuplicateRoute } from '../routes'

export const postTemplatesDuplicateRouteHandler: RouteHandler<
  typeof postTemplatesDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
