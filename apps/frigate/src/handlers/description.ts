import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescriptionGenerateRoute } from '../routes'

export const postDescriptionGenerateRouteHandler: RouteHandler<
  typeof postDescriptionGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
