import type { RouteHandler } from '@hono/zod-openapi'
import type { postLicerCertificateRoute } from '../routes'

export const postLicerCertificateRouteHandler: RouteHandler<
  typeof postLicerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
