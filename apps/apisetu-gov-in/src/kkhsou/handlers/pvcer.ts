import type { RouteHandler } from '@hono/zod-openapi'
import type { postPvcerCertificateRoute } from '../routes'

export const postPvcerCertificateRouteHandler: RouteHandler<
  typeof postPvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
