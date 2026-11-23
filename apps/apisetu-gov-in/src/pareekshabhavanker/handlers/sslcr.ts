import type { RouteHandler } from '@hono/zod-openapi'
import type { postSslcrCertificateRoute } from '../routes'

export const postSslcrCertificateRouteHandler: RouteHandler<
  typeof postSslcrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
