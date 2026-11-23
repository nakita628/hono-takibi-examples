import type { RouteHandler } from '@hono/zod-openapi'
import type { postArcmwCertificateRoute } from '../routes'

export const postArcmwCertificateRouteHandler: RouteHandler<
  typeof postArcmwCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
