import type { RouteHandler } from '@hono/zod-openapi'
import type { postLocerCertificateRoute } from '../routes'

export const postLocerCertificateRouteHandler: RouteHandler<
  typeof postLocerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
