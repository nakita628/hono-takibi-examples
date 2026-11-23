import type { RouteHandler } from '@hono/zod-openapi'
import type { postPsnocCertificateRoute } from '../routes'

export const postPsnocCertificateRouteHandler: RouteHandler<
  typeof postPsnocCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
