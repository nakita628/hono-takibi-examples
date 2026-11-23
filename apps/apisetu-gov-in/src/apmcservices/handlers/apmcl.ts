import type { RouteHandler } from '@hono/zod-openapi'
import type { postApmclCertificateRoute } from '../routes'

export const postApmclCertificateRouteHandler: RouteHandler<
  typeof postApmclCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
