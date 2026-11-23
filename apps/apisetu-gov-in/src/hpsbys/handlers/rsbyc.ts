import type { RouteHandler } from '@hono/zod-openapi'
import type { postRsbycCertificateRoute } from '../routes'

export const postRsbycCertificateRouteHandler: RouteHandler<
  typeof postRsbycCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
