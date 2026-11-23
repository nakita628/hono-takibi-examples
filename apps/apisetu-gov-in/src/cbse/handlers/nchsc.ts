import type { RouteHandler } from '@hono/zod-openapi'
import type { postNchscCertificateRoute } from '../routes'

export const postNchscCertificateRouteHandler: RouteHandler<
  typeof postNchscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
