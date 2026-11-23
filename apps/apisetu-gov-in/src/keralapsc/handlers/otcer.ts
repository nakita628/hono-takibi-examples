import type { RouteHandler } from '@hono/zod-openapi'
import type { postOtcerCertificateRoute } from '../routes'

export const postOtcerCertificateRouteHandler: RouteHandler<
  typeof postOtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
