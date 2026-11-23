import type { RouteHandler } from '@hono/zod-openapi'
import type { postPncerCertificateRoute } from '../routes'

export const postPncerCertificateRouteHandler: RouteHandler<
  typeof postPncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
