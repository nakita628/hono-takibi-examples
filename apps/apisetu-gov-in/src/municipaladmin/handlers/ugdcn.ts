import type { RouteHandler } from '@hono/zod-openapi'
import type { postUgdcnCertificateRoute } from '../routes'

export const postUgdcnCertificateRouteHandler: RouteHandler<
  typeof postUgdcnCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
