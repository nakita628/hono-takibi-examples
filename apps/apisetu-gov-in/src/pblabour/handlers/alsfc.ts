import type { RouteHandler } from '@hono/zod-openapi'
import type { postAlsfcCertificateRoute } from '../routes'

export const postAlsfcCertificateRouteHandler: RouteHandler<
  typeof postAlsfcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
