import type { RouteHandler } from '@hono/zod-openapi'
import type { postLhcerCertificateRoute } from '../routes'

export const postLhcerCertificateRouteHandler: RouteHandler<
  typeof postLhcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
