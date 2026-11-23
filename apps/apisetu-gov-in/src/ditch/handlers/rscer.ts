import type { RouteHandler } from '@hono/zod-openapi'
import type { postRscerCertificateRoute } from '../routes'

export const postRscerCertificateRouteHandler: RouteHandler<
  typeof postRscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
