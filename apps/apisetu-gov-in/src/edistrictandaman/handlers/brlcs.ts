import type { RouteHandler } from '@hono/zod-openapi'
import type { postBrlcsCertificateRoute } from '../routes'

export const postBrlcsCertificateRouteHandler: RouteHandler<
  typeof postBrlcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
