import type { RouteHandler } from '@hono/zod-openapi'
import type { postTapcnCertificateRoute } from '../routes'

export const postTapcnCertificateRouteHandler: RouteHandler<
  typeof postTapcnCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
