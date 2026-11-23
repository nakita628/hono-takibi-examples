import type { RouteHandler } from '@hono/zod-openapi'
import type { postTetcrCertificateRoute } from '../routes'

export const postTetcrCertificateRouteHandler: RouteHandler<
  typeof postTetcrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
