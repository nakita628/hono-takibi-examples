import type { RouteHandler } from '@hono/zod-openapi'
import type { postLvcerCertificateRoute } from '../routes'

export const postLvcerCertificateRouteHandler: RouteHandler<
  typeof postLvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
