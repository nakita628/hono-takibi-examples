import type { RouteHandler } from '@hono/zod-openapi'
import type { postTetmsCertificateRoute } from '../routes'

export const postTetmsCertificateRouteHandler: RouteHandler<
  typeof postTetmsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
