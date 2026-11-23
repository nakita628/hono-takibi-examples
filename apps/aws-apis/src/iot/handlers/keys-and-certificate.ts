import type { RouteHandler } from '@hono/zod-openapi'
import type { postKeysAndCertificateRoute } from '../routes'

export const postKeysAndCertificateRouteHandler: RouteHandler<
  typeof postKeysAndCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
