import type { RouteHandler } from '@hono/zod-openapi'
import type { postSrcerCertificateRoute } from '../routes'

export const postSrcerCertificateRouteHandler: RouteHandler<
  typeof postSrcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
