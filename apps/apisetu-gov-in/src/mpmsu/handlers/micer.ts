import type { RouteHandler } from '@hono/zod-openapi'
import type { postMicerCertificateRoute } from '../routes'

export const postMicerCertificateRouteHandler: RouteHandler<
  typeof postMicerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
