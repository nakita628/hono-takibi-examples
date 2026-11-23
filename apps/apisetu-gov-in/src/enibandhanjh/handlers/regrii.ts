import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegriiCertificateRoute } from '../routes'

export const postRegriiCertificateRouteHandler: RouteHandler<
  typeof postRegriiCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
