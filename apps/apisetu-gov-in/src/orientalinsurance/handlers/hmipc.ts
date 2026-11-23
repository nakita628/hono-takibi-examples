import type { RouteHandler } from '@hono/zod-openapi'
import type { postHmipcCertificateRoute } from '../routes'

export const postHmipcCertificateRouteHandler: RouteHandler<
  typeof postHmipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
