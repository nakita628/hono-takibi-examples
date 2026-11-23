import type { RouteHandler } from '@hono/zod-openapi'
import type { postRatcrCertificateRoute } from '../routes'

export const postRatcrCertificateRouteHandler: RouteHandler<
  typeof postRatcrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
