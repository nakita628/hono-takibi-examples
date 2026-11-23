import type { RouteHandler } from '@hono/zod-openapi'
import type { postSecerCertificateRoute } from '../routes'

export const postSecerCertificateRouteHandler: RouteHandler<
  typeof postSecerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
