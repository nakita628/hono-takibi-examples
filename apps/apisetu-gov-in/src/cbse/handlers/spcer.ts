import type { RouteHandler } from '@hono/zod-openapi'
import type { postSpcerCertificateRoute } from '../routes'

export const postSpcerCertificateRouteHandler: RouteHandler<
  typeof postSpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
