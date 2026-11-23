import type { RouteHandler } from '@hono/zod-openapi'
import type { postEscerCertificateRoute } from '../routes'

export const postEscerCertificateRouteHandler: RouteHandler<
  typeof postEscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
