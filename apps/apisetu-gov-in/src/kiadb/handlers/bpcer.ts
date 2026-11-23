import type { RouteHandler } from '@hono/zod-openapi'
import type { postBpcerCertificateRoute } from '../routes'

export const postBpcerCertificateRouteHandler: RouteHandler<
  typeof postBpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
