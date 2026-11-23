import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserdataValidateRoute } from '../routes'

export const postUserdataValidateRouteHandler: RouteHandler<
  typeof postUserdataValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
