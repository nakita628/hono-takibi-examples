import type { RouteHandler } from '@hono/zod-openapi'
import type { postNstscCertificateRoute } from '../routes'

export const postNstscCertificateRouteHandler: RouteHandler<
  typeof postNstscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
