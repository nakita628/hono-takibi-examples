import type { RouteHandler } from '@hono/zod-openapi'
import type { postAecmwCertificateRoute } from '../routes'

export const postAecmwCertificateRouteHandler: RouteHandler<
  typeof postAecmwCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
