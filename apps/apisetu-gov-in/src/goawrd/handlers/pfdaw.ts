import type { RouteHandler } from '@hono/zod-openapi'
import type { postPfdawCertificateRoute } from '../routes'

export const postPfdawCertificateRouteHandler: RouteHandler<
  typeof postPfdawCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
