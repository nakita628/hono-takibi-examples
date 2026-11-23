import type { RouteHandler } from '@hono/zod-openapi'
import type { postSslcsCertificateRoute } from '../routes'

export const postSslcsCertificateRouteHandler: RouteHandler<
  typeof postSslcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
