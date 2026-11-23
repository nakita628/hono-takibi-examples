import type { RouteHandler } from '@hono/zod-openapi'
import type { postPsprtCertificateRoute } from '../routes'

export const postPsprtCertificateRouteHandler: RouteHandler<
  typeof postPsprtCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
