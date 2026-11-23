import type { RouteHandler } from '@hono/zod-openapi'
import type { postVhinscCertificateRoute } from '../routes'

export const postVhinscCertificateRouteHandler: RouteHandler<
  typeof postVhinscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
