import type { RouteHandler } from '@hono/zod-openapi'
import type { postOscerCertificateRoute } from '../routes'

export const postOscerCertificateRouteHandler: RouteHandler<
  typeof postOscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
