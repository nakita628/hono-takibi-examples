import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthCertificateRoute } from '../routes'

export const postAuthCertificateRouteHandler: RouteHandler<
  typeof postAuthCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
