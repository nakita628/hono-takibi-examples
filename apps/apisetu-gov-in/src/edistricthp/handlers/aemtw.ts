import type { RouteHandler } from '@hono/zod-openapi'
import type { postAemtwCertificateRoute } from '../routes'

export const postAemtwCertificateRouteHandler: RouteHandler<
  typeof postAemtwCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
