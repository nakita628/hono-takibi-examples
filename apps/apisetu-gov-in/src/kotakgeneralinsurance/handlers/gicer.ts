import type { RouteHandler } from '@hono/zod-openapi'
import type { postGicerCertificateRoute } from '../routes'

export const postGicerCertificateRouteHandler: RouteHandler<
  typeof postGicerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
