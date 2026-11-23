import type { RouteHandler } from '@hono/zod-openapi'
import type { postMnrgaCertificateRoute } from '../routes'

export const postMnrgaCertificateRouteHandler: RouteHandler<
  typeof postMnrgaCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
