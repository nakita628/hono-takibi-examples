import type { RouteHandler } from '@hono/zod-openapi'
import type { postMrcerCertificateRoute } from '../routes'

export const postMrcerCertificateRouteHandler: RouteHandler<
  typeof postMrcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
