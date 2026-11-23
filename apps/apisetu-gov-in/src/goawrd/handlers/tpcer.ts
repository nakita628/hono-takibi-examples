import type { RouteHandler } from '@hono/zod-openapi'
import type { postTpcerCertificateRoute } from '../routes'

export const postTpcerCertificateRouteHandler: RouteHandler<
  typeof postTpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
