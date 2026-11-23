import type { RouteHandler } from '@hono/zod-openapi'
import type { postPscerCertificateRoute } from '../routes'

export const postPscerCertificateRouteHandler: RouteHandler<
  typeof postPscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
