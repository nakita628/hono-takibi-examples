import type { RouteHandler } from '@hono/zod-openapi'
import type { postSicerCertificateRoute } from '../routes'

export const postSicerCertificateRouteHandler: RouteHandler<
  typeof postSicerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
