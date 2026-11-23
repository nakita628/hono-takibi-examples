import type { RouteHandler } from '@hono/zod-openapi'
import type { postTrcerCertificateRoute } from '../routes'

export const postTrcerCertificateRouteHandler: RouteHandler<
  typeof postTrcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
